'use client';

import { useState, useRef, useCallback } from 'react';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';
import { updateProductMutation } from '../api/mutations';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import type { Product, ShippingObject, ProductAttribute } from '@/constants/mock-api-products';
import {
  getUniqueCategories,
  getUniqueManufacturers
} from '@/constants/mock-api-products';

// ─── Formatters ──────────────────────────────────────────────────────────────

function fmtPrice(n: number) {
  return new Intl.NumberFormat('vi-VN').format(n) + 'đ';
}

function fmtDate(s: string) {
  if (!s || s.startsWith('1999') || s.startsWith('1970')) return '—';
  try {
    return new Date(s).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch {
    return s;
  }
}

function fmtDateTime(s: string) {
  if (!s || s.startsWith('1999') || s.startsWith('1970')) return '—';
  try {
    return new Date(s).toLocaleString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return s;
  }
}

function toDatetimeLocal(s: string) {
  if (!s || s.startsWith('1999') || s.startsWith('1970')) return '';
  try {
    const d = new Date(s);
    if (isNaN(d.getTime())) return '';
    return d.toISOString().slice(0, 16);
  } catch {
    return '';
  }
}

function syncStateName(state: number) {
  return ['Unknown', 'Pending', 'Done', 'Error', 'Skipped'][state] ?? String(state);
}

// ─── Primitive UI helpers ─────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground'>
      {children}
    </p>
  );
}

function FieldRow({
  label,
  value,
  mono = false,
  children
}: {
  label: string;
  value?: string | number | null;
  mono?: boolean;
  children?: React.ReactNode;
}) {
  const display = children ?? (
    <span className={`text-right text-xs leading-relaxed ${mono ? 'font-mono' : 'font-medium'}`}>
      {value === null || value === undefined || value === '' ? (
        <span className='text-muted-foreground/50'>—</span>
      ) : (
        String(value)
      )}
    </span>
  );
  return (
    <div className='flex items-start justify-between gap-4'>
      <span className='flex-shrink-0 text-xs text-muted-foreground'>{label}</span>
      {display}
    </div>
  );
}

function StatusDot({
  active,
  label,
  warn,
  danger
}: {
  active: boolean;
  label: string;
  warn?: boolean;
  danger?: boolean;
}) {
  const color = active
    ? danger
      ? 'bg-destructive'
      : warn
        ? 'bg-amber-500'
        : 'bg-emerald-500'
    : 'bg-muted-foreground/25';
  const textColor = active
    ? danger
      ? 'text-destructive'
      : warn
        ? 'text-amber-700 dark:text-amber-400'
        : 'text-foreground'
    : 'text-muted-foreground';
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${textColor}`}>
      <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${color}`} />
      {label}
    </span>
  );
}

function BoolBadge({ value, labelOn, labelOff }: { value: boolean; labelOn: string; labelOff?: string }) {
  if (value) {
    return (
      <span className='inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400'>
        {labelOn}
      </span>
    );
  }
  if (labelOff) {
    return (
      <span className='inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-muted-foreground'>
        {labelOff}
      </span>
    );
  }
  return null;
}

// ─── Edit sub-components ──────────────────────────────────────────────────────

function EditField({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className='space-y-1'>
      <p className='text-xs text-muted-foreground'>{label}</p>
      {children}
    </div>
  );
}

function SwitchRow({
  label,
  checked,
  onChange,
  description
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  description?: string;
}) {
  return (
    <div className='flex items-center justify-between gap-3'>
      <div className='min-w-0'>
        <p className='text-sm font-medium leading-none'>{label}</p>
        {description && <p className='mt-0.5 text-xs text-muted-foreground'>{description}</p>}
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

// ─── Keyword tag editor ───────────────────────────────────────────────────────

function KeywordEditor({
  keywords,
  onChange
}: {
  keywords: string[];
  onChange: (kws: string[]) => void;
}) {
  const [draft, setDraft] = useState('');

  const add = () => {
    const kw = draft.trim();
    if (kw && !keywords.includes(kw)) {
      onChange([...keywords, kw]);
      setDraft('');
    }
  };

  const remove = (kw: string) => onChange(keywords.filter((k) => k !== kw));

  return (
    <div className='space-y-2'>
      <div className='flex gap-2'>
        <Input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder='Nhập keyword...'
          className='h-8 text-xs'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              add();
            }
          }}
        />
        <Button variant='outline' size='sm' onClick={add} className='h-8 shrink-0'>
          <Icons.plusCircle className='h-3.5 w-3.5' />
        </Button>
      </div>
      <div className='flex flex-wrap gap-1.5'>
        {keywords.map((kw) => (
          <span
            key={kw}
            className='inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-xs'
          >
            {kw}
            <button
              type='button'
              onClick={() => remove(kw)}
              className='text-muted-foreground hover:text-foreground'
            >
              <Icons.close className='h-3 w-3' />
            </button>
          </span>
        ))}
        {keywords.length === 0 && (
          <span className='text-xs text-muted-foreground/50'>Chưa có keyword</span>
        )}
      </div>
    </div>
  );
}

// ─── Attribute editor ─────────────────────────────────────────────────────────

function AttributeEditor({
  attrs,
  onChange
}: {
  attrs: ProductAttribute[];
  onChange: (a: ProductAttribute[]) => void;
}) {
  const removeGroup = (i: number) => onChange(attrs.filter((_, idx) => idx !== i));

  const removeValue = (gi: number, vi: number) => {
    const next = attrs.map((g, idx) =>
      idx === gi
        ? { ...g, filter_group_attribute: g.filter_group_attribute.filter((_, j) => j !== vi) }
        : g
    );
    onChange(next);
  };

  const addGroup = () => {
    onChange([
      ...attrs,
      {
        filter_group_name: '',
        id_filter_group_name: 0,
        filter_group_attribute: []
      }
    ]);
  };

  const updateGroupName = (i: number, name: string) => {
    onChange(attrs.map((g, idx) => (idx === i ? { ...g, filter_group_name: name } : g)));
  };

  const addAttrValue = (gi: number, name: string) => {
    if (!name.trim()) return;
    onChange(
      attrs.map((g, idx) =>
        idx === gi
          ? {
              ...g,
              filter_group_attribute: [
                ...g.filter_group_attribute,
                { name_filter: name.trim(), id_filter_group: 0 }
              ]
            }
          : g
      )
    );
  };

  return (
    <div className='space-y-4'>
      {attrs.map((group, gi) => (
        <div key={gi} className='rounded-lg border p-3 space-y-2'>
          <div className='flex items-center gap-2'>
            <Input
              value={group.filter_group_name}
              onChange={(e) => updateGroupName(gi, e.target.value)}
              placeholder='Tên nhóm thuộc tính'
              className='h-7 text-xs font-medium'
            />
            <button
              type='button'
              onClick={() => removeGroup(gi)}
              className='text-muted-foreground hover:text-destructive'
            >
              <Icons.trash className='h-3.5 w-3.5' />
            </button>
          </div>
          <div className='flex flex-wrap gap-1.5'>
            {group.filter_group_attribute.map((attr, vi) => (
              <span
                key={vi}
                className='inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-xs'
              >
                {attr.name_filter}
                <button
                  type='button'
                  onClick={() => removeValue(gi, vi)}
                  className='text-muted-foreground hover:text-destructive'
                >
                  <Icons.close className='h-3 w-3' />
                </button>
              </span>
            ))}
          </div>
          <AddAttrValue onAdd={(name) => addAttrValue(gi, name)} />
        </div>
      ))}
      <Button variant='outline' size='sm' className='w-full text-xs' onClick={addGroup}>
        <Icons.plusCircle className='mr-1.5 h-3.5 w-3.5' />
        Thêm nhóm thuộc tính
      </Button>
    </div>
  );
}

function AddAttrValue({ onAdd }: { onAdd: (name: string) => void }) {
  const [val, setVal] = useState('');
  const submit = () => {
    onAdd(val);
    setVal('');
  };
  return (
    <div className='flex gap-2'>
      <Input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder='Giá trị thuộc tính...'
        className='h-7 text-xs'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            submit();
          }
        }}
      />
      <Button variant='ghost' size='sm' className='h-7 px-2' onClick={submit}>
        <Icons.plusCircle className='h-3 w-3' />
      </Button>
    </div>
  );
}

// ─── Shipping editor ──────────────────────────────────────────────────────────

function ShippingEditor({
  shipping,
  onChange
}: {
  shipping: ShippingObject[];
  onChange: (s: ShippingObject[]) => void;
}) {
  const update = (i: number, field: keyof ShippingObject, value: unknown) => {
    onChange(
      shipping.map((s, idx) => (idx === i ? { ...s, [field]: value } : s))
    );
  };
  const remove = (i: number) => onChange(shipping.filter((_, idx) => idx !== i));
  const add = () =>
    onChange([...shipping, { label_url: '', district_ids: [], feeship_type_id: 0 }]);

  return (
    <div className='space-y-3'>
      {shipping.map((s, i) => (
        <div key={i} className='rounded-lg border p-3 space-y-2'>
          <div className='flex items-center justify-between'>
            <p className='text-xs font-medium text-muted-foreground'>Rule #{i + 1}</p>
            <button
              type='button'
              onClick={() => remove(i)}
              className='text-muted-foreground hover:text-destructive'
            >
              <Icons.trash className='h-3.5 w-3.5' />
            </button>
          </div>
          <Input
            value={s.label_url}
            onChange={(e) => update(i, 'label_url', e.target.value)}
            placeholder='Label URL'
            className='h-7 text-xs'
          />
          <div className='flex items-center gap-2'>
            <p className='text-xs text-muted-foreground shrink-0'>Feeship type:</p>
            <Input
              type='number'
              value={s.feeship_type_id}
              onChange={(e) => update(i, 'feeship_type_id', parseInt(e.target.value) || 0)}
              className='h-7 w-20 text-xs'
            />
          </div>
          <p className='text-xs text-muted-foreground'>
            Districts: {s.district_ids.join(', ') || '—'}
          </p>
        </div>
      ))}
      <Button variant='outline' size='sm' className='w-full text-xs' onClick={add}>
        <Icons.plusCircle className='mr-1.5 h-3.5 w-3.5' />
        Thêm shipping rule
      </Button>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface ProductDetailSheetProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProductUpdate?: (product: Product) => void;
}

export function ProductDetailSheet({
  product,
  open,
  onOpenChange,
  onProductUpdate
}: ProductDetailSheetProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [descPreview, setDescPreview] = useState(false);
  const [coverPreviewUrl, setCoverPreviewUrl] = useState<string | null>(null);
  const [transPreviewUrl, setTransPreviewUrl] = useState<string | null>(null);

  const coverInputRef = useRef<HTMLInputElement>(null);
  const transInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const updateMutation = useMutation({
    ...updateProductMutation,
    onSuccess: () => {
      toast.success('Cập nhật sản phẩm thành công');
      setIsEditing(false);
      if (onProductUpdate && editedProduct) onProductUpdate(editedProduct);
    },
    onError: () => {
      toast.error('Cập nhật thất bại');
    }
  });

  const categories = getUniqueCategories();
  const manufacturers = getUniqueManufacturers();

  if (!product) return null;

  const dp = isEditing && editedProduct ? editedProduct : product;

  const set = useCallback(
    (field: keyof Product, value: unknown) => {
      setEditedProduct((prev) => (prev ? { ...prev, [field]: value } : prev));
    },
    []
  );

  const handleEditClick = () => {
    setEditedProduct({ ...product });
    setIsEditing(true);
    setDescPreview(false);
    setCoverPreviewUrl(null);
    setTransPreviewUrl(null);
  };

  const handleCancelClick = () => {
    setEditedProduct(null);
    setIsEditing(false);
    setCoverPreviewUrl(null);
    setTransPreviewUrl(null);
  };

  const handleSaveClick = () => {
    if (!editedProduct) return;
    updateMutation.mutate({
      id: Number(editedProduct.id),
      values: {
        name: editedProduct.ecom_product_name,
        category: editedProduct.com_category_name,
        price: editedProduct.price,
        description: editedProduct.description || '',
        full_link: editedProduct.full_link,
        link_video: editedProduct.link_video,
        description_content: editedProduct.description_content,
        text_online: editedProduct.text_online,
        top_text: editedProduct.top_text,
        middle_text: editedProduct.middle_text,
        bottom_text: editedProduct.bottom_text,
        center_text: editedProduct.center_text,
        com_category_id: editedProduct.com_category_id,
        com_manufacturer_id: editedProduct.com_manufacturer_id,
        com_manufacturer_name: editedProduct.com_manufacturer_name,
        sale_price_vat: editedProduct.sale_price_vat,
        is_have_discount: editedProduct.is_have_discount,
        discount_amount: editedProduct.discount_amount,
        discount_percent: editedProduct.discount_percent,
        is_order_discount: editedProduct.is_order_discount,
        order_discount_from: editedProduct.order_discount_from,
        promotion_name: editedProduct.promotion_name,
        promotion_begin_date: editedProduct.promotion_begin_date,
        promotion_end_date: editedProduct.promotion_end_date,
        is_promotion_vip: editedProduct.is_promotion_vip,
        date_start_quick_sale: editedProduct.date_start_quick_sale,
        date_end_quick_sale: editedProduct.date_end_quick_sale,
        stock_quantity: editedProduct.stock_quantity,
        quantity_per_pack: editedProduct.quantity_per_pack,
        membership_type_id: editedProduct.membership_type_id,
        digital_type_id: editedProduct.digital_type_id,
        label_type: editedProduct.label_type,
        is_online: editedProduct.is_online,
        is_selling: editedProduct.is_selling,
        is_only_online: editedProduct.is_only_online,
        is_processing: editedProduct.is_processing,
        is_deleted: editedProduct.is_deleted,
        is_reference: editedProduct.is_reference,
        is_free_ship: editedProduct.is_free_ship,
        is_super_fast_delivery: editedProduct.is_super_fast_delivery,
        is_have_gift: editedProduct.is_have_gift,
        is_combo: editedProduct.is_combo,
        type_combo: editedProduct.type_combo,
        combo_name: editedProduct.combo_name,
        is_livestream: editedProduct.is_livestream,
        is_video_shopping: editedProduct.is_video_shopping,
        event_uid: editedProduct.event_uid,
        image_frame: editedProduct.image_frame,
        frame_expired: editedProduct.frame_expired,
        keywords: editedProduct.keywords,
        product_attributes: editedProduct.product_attributes,
        shipping_object: editedProduct.shipping_object
      }
    });
  };

  const coverUrl = coverPreviewUrl || dp.product_image_cover;
  const transUrl = transPreviewUrl || dp.product_image_trans;
  const hasSavings = dp.is_have_discount && dp.discount_amount > 0;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side='right'
          className='flex w-full flex-col gap-0 p-0 sm:max-w-[52vw] inset-y-2 right-2 h-[calc(100vh-1rem)] rounded-xl border shadow-xl'
        >
          {/* Header */}
          <div className='flex-shrink-0 flex items-center justify-between border-b px-5 py-3.5 pr-12'>
            <SheetTitle className='text-sm font-medium text-muted-foreground'>
              Chi tiết sản phẩm
            </SheetTitle>
            <span className='font-mono text-[11px] text-muted-foreground/60'>
              #{product.ecom_product_id}
            </span>
          </div>

          {/* Mode switcher */}
          <div className='flex-shrink-0 border-b px-5 py-2.5'>
            <div className='flex w-fit gap-1 rounded-lg border bg-muted p-1'>
              <button
                type='button'
                onClick={() => { if (isEditing) handleCancelClick(); }}
                className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  !isEditing
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Xem
              </button>
              <button
                type='button'
                onClick={() => { if (!isEditing) handleEditClick(); }}
                className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isEditing
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Chỉnh sửa
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div className='flex-1 overflow-y-auto'>
            <div className='space-y-0'>

              {/* ── 1. Media ─────────────────────────────────────────────── */}
              <div className='px-5 pt-5 pb-4'>
                <div className='flex h-44 gap-2'>
                  {/* Cover image */}
                  <div
                    className={`relative flex-[3] overflow-hidden rounded-xl bg-muted ${
                      isEditing ? 'cursor-pointer' : coverUrl ? 'cursor-zoom-in' : ''
                    }`}
                    onClick={() => {
                      if (isEditing) coverInputRef.current?.click();
                      else if (coverUrl) setPreviewImage(coverUrl);
                    }}
                  >
                    {coverUrl ? (
                      <img src={coverUrl} alt={dp.ecom_product_name} className='h-full w-full object-cover' />
                    ) : (
                      <div className='flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/40'>
                        <Icons.image className='h-8 w-8' />
                        {isEditing && <span className='text-xs'>Tải ảnh bìa</span>}
                      </div>
                    )}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/40 transition-opacity ${coverUrl || isEditing ? 'opacity-0 hover:opacity-100' : 'opacity-0'}`}>
                      {isEditing
                        ? <><Icons.upload className='h-5 w-5 text-white' /><span className='text-xs font-medium text-white'>{coverUrl ? 'Thay ảnh' : 'Tải lên'}</span></>
                        : <Icons.search className='h-5 w-5 text-white' />
                      }
                    </div>
                    {isEditing && (
                      <div className='absolute bottom-1.5 right-1.5'>
                        <span className='rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] text-white'>Cover</span>
                      </div>
                    )}
                  </div>

                  {/* Trans image */}
                  <div
                    className={`relative flex-[1.5] overflow-hidden rounded-xl bg-muted ${
                      isEditing ? 'cursor-pointer' : transUrl ? 'cursor-zoom-in' : ''
                    }`}
                    onClick={() => {
                      if (isEditing) transInputRef.current?.click();
                      else if (transUrl) setPreviewImage(transUrl);
                    }}
                  >
                    {transUrl ? (
                      <img src={transUrl} alt='' className='h-full w-full object-contain p-2' />
                    ) : (
                      <div className='flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/40'>
                        <Icons.image className='h-6 w-6' />
                        {isEditing && <span className='text-[10px]'>Trans</span>}
                      </div>
                    )}
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${transUrl || isEditing ? 'opacity-0 hover:opacity-100' : 'opacity-0'}`}>
                      {isEditing
                        ? <Icons.upload className='h-4 w-4 text-white' />
                        : <Icons.search className='h-4 w-4 text-white' />
                      }
                    </div>
                    {isEditing && (
                      <div className='absolute bottom-1.5 right-1.5'>
                        <span className='rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] text-white'>Trans</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Manufacturer logo */}
                {product.com_manufacturer_image_logo_url && (
                  <div className='mt-2 flex items-center gap-2'>
                    <img
                      src={product.com_manufacturer_image_logo_url}
                      alt={product.com_manufacturer_name}
                      className='h-5 w-auto max-w-[72px] object-contain opacity-60'
                    />
                  </div>
                )}

                {/* Video upload (edit mode) */}
                {isEditing && (
                  <div className='mt-2'>
                    <button
                      type='button'
                      onClick={() => videoInputRef.current?.click()}
                      className='flex w-full items-center gap-2 rounded-lg border border-dashed px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground'
                    >
                      <Icons.video className='h-3.5 w-3.5 flex-shrink-0' />
                      <span>{dp.link_video ? 'Thay video' : 'Tải video (MP4, MOV)'}</span>
                      {dp.link_video && (
                        <span className='ml-auto truncate max-w-[120px] font-medium text-foreground'>
                          {dp.link_video.split('/').pop()}
                        </span>
                      )}
                    </button>
                  </div>
                )}

                {/* Hidden file inputs */}
                <input ref={coverInputRef} type='file' accept='image/jpeg,image/png,image/webp' className='hidden'
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) setCoverPreviewUrl(URL.createObjectURL(f)); }} />
                <input ref={transInputRef} type='file' accept='image/jpeg,image/png,image/webp' className='hidden'
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) setTransPreviewUrl(URL.createObjectURL(f)); }} />
                <input ref={videoInputRef} type='file' accept='video/mp4,video/quicktime' className='hidden'
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) { set('link_video', f.name); toast.success(`Video: ${f.name}`); } }} />
              </div>

              <Separator />

              {/* ── 2. Name & Status ─────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Tên & Trạng thái</SectionLabel>
                {isEditing ? (
                  <Input
                    value={dp.ecom_product_name}
                    onChange={(e) => set('ecom_product_name', e.target.value)}
                    className='text-base font-semibold h-auto py-2 px-2.5'
                    placeholder='Tên sản phẩm'
                  />
                ) : (
                  <h3 className='text-base font-semibold leading-snug'>{product.ecom_product_name}</h3>
                )}
                <div className='flex flex-wrap items-center gap-x-4 gap-y-1.5'>
                  <StatusDot active={dp.is_online} label='Online' />
                  <StatusDot active={dp.is_selling} label='Đang bán' />
                  <StatusDot active={!dp.is_outstock} label='Còn hàng' />
                  <StatusDot active={dp.is_only_online} label='Chỉ Online' />
                  {dp.is_processing && <StatusDot active warn label='Đang xử lý' />}
                  {dp.is_deleted && <StatusDot active danger label='Đã xóa' />}
                  {dp.is_reference && <StatusDot active={false} label='Tham chiếu' />}
                </div>
                {/* ERP name if different */}
                {product.erp_product_name && product.erp_product_name !== product.ecom_product_name && (
                  <p className='text-xs text-muted-foreground'>
                    <span className='font-medium'>ERP:</span> {product.erp_product_name}
                  </p>
                )}
              </div>

              <Separator />

              {/* ── 3. Identity ───────────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Danh mục & Thương hiệu</SectionLabel>
                <div className='grid grid-cols-2 gap-x-6 gap-y-3'>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Danh mục (Ecom)</p>
                    {isEditing ? (
                      <select
                        value={dp.com_category_name}
                        onChange={(e) => {
                          const cat = categories.find((c) => c.name === e.target.value);
                          if (cat) {
                            set('com_category_name', e.target.value);
                            set('com_category_id', cat.id);
                          }
                        }}
                        className='w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm'
                      >
                        {categories.map((c) => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    ) : (
                      <p className='text-sm font-medium'>{product.com_category_name}</p>
                    )}
                  </div>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Danh mục (ERP)</p>
                    <p className='text-sm font-medium'>{product.erp_category_name || '—'}</p>
                    {product.erp_category_id > 0 && (
                      <p className='font-mono text-[10px] text-muted-foreground'>#{product.erp_category_id}</p>
                    )}
                  </div>
                  <div className='col-span-2'>
                    <p className='mb-1 text-xs text-muted-foreground'>Thương hiệu (Ecom)</p>
                    {isEditing ? (
                      <select
                        value={dp.com_manufacturer_name}
                        onChange={(e) => {
                          const m = manufacturers.find((m) => m.name === e.target.value);
                          if (m) {
                            set('com_manufacturer_name', e.target.value);
                            set('com_manufacturer_id', m.id);
                          }
                        }}
                        className='w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm'
                      >
                        {manufacturers.map((m) => (
                          <option key={m.id} value={m.name}>{m.name}</option>
                        ))}
                      </select>
                    ) : (
                      <div className='flex items-center gap-2'>
                        {product.com_manufacturer_image_square_url && (
                          <img src={product.com_manufacturer_image_square_url} alt='' className='h-5 w-5 rounded object-contain' />
                        )}
                        <span className='text-sm font-medium'>{product.com_manufacturer_name}</span>
                      </div>
                    )}
                  </div>
                  {(product.erp_manufacturer_name && product.erp_manufacturer_name !== product.com_manufacturer_name) && (
                    <div className='col-span-2'>
                      <p className='mb-1 text-xs text-muted-foreground'>Thương hiệu (ERP)</p>
                      <p className='text-sm font-medium'>{product.erp_manufacturer_name}</p>
                    </div>
                  )}
                  <div className='col-span-2'>
                    <p className='mb-1 text-xs text-muted-foreground'>Link sản phẩm</p>
                    {isEditing ? (
                      <Input
                        value={dp.full_link}
                        onChange={(e) => set('full_link', e.target.value)}
                        placeholder='/slug/ten-san-pham-12345.html'
                        className='h-8 text-xs'
                      />
                    ) : (
                      product.full_link ? (
                        <a href={product.full_link} target='_blank' rel='noopener noreferrer'
                          className='inline-flex items-center gap-1 text-xs text-primary hover:underline break-all'>
                          <Icons.externalLink className='h-3 w-3 flex-shrink-0' />
                          {product.full_link}
                        </a>
                      ) : (
                        <span className='text-xs text-muted-foreground/50'>—</span>
                      )
                    )}
                  </div>
                  <div className='col-span-2'>
                    <p className='mb-1 text-xs text-muted-foreground'>Link video</p>
                    {isEditing ? (
                      <Input
                        value={dp.link_video}
                        onChange={(e) => set('link_video', e.target.value)}
                        placeholder='https://...'
                        className='h-8 text-xs'
                      />
                    ) : (
                      product.link_video ? (
                        <a href={product.link_video} target='_blank' rel='noopener noreferrer'
                          className='inline-flex items-center gap-1 text-xs text-primary hover:underline break-all'>
                          <Icons.video className='h-3 w-3 flex-shrink-0' />
                          {product.link_video}
                        </a>
                      ) : (
                        <span className='text-xs text-muted-foreground/50'>—</span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <Separator />

              {/* ── 4. Pricing ────────────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Giá</SectionLabel>
                <div className='flex items-baseline gap-3 flex-wrap'>
                  {isEditing ? (
                    <Input type='number' value={dp.sale_price_vat}
                      onChange={(e) => set('sale_price_vat', parseFloat(e.target.value) || 0)}
                      className='w-36 text-base font-bold' />
                  ) : (
                    <p className='text-xl font-bold text-primary'>{fmtPrice(product.sale_price_vat)}</p>
                  )}
                  {(isEditing || product.price !== product.sale_price_vat) && (
                    isEditing ? (
                      <div>
                        <p className='text-[10px] text-muted-foreground mb-0.5'>Giá gốc</p>
                        <Input type='number' value={dp.price}
                          onChange={(e) => set('price', parseFloat(e.target.value) || 0)}
                          className='w-32 text-sm' />
                      </div>
                    ) : (
                      <p className='text-sm text-muted-foreground line-through'>{fmtPrice(product.price)}</p>
                    )
                  )}
                </div>

                {/* Discount */}
                {isEditing ? (
                  <div className='space-y-3 rounded-lg bg-muted/50 p-3'>
                    <SwitchRow
                      label='Có giảm giá'
                      checked={dp.is_have_discount}
                      onChange={(v) => set('is_have_discount', v)}
                    />
                    {dp.is_have_discount && (
                      <div className='grid grid-cols-2 gap-3'>
                        <EditField label='% giảm'>
                          <Input type='number' value={dp.discount_percent}
                            onChange={(e) => set('discount_percent', parseFloat(e.target.value) || 0)}
                            className='h-8 text-xs' />
                        </EditField>
                        <EditField label='Số tiền giảm'>
                          <Input type='number' value={dp.discount_amount}
                            onChange={(e) => set('discount_amount', parseFloat(e.target.value) || 0)}
                            className='h-8 text-xs' />
                        </EditField>
                      </div>
                    )}
                    <Separator />
                    <SwitchRow
                      label='Giảm giá theo đơn hàng'
                      checked={dp.is_order_discount}
                      onChange={(v) => set('is_order_discount', v)}
                    />
                    {dp.is_order_discount && (
                      <EditField label='Giá trị đơn tối thiểu'>
                        <Input type='number' value={dp.order_discount_from}
                          onChange={(e) => set('order_discount_from', parseFloat(e.target.value) || 0)}
                          className='h-8 text-xs' />
                      </EditField>
                    )}
                  </div>
                ) : (
                  <div className='space-y-1.5'>
                    {product.is_have_discount && product.discount_percent > 0 && (
                      <div className='flex items-center gap-2 text-xs'>
                        <span className='rounded bg-destructive/10 px-1.5 py-0.5 font-semibold text-destructive'>
                          -{product.discount_percent.toFixed(0)}%
                        </span>
                        {hasSavings && (
                          <span className='text-muted-foreground'>Tiết kiệm {fmtPrice(product.discount_amount)}</span>
                        )}
                      </div>
                    )}
                    {!product.is_have_discount && (
                      <p className='text-xs text-muted-foreground/60'>Không có giảm giá</p>
                    )}
                    {product.is_order_discount && product.order_discount_from > 0 && (
                      <p className='text-xs text-muted-foreground'>
                        Giảm giá đơn từ {fmtPrice(product.order_discount_from)}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <Separator />

              {/* ── 5. Promotion ─────────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Khuyến mãi</SectionLabel>
                {isEditing ? (
                  <div className='space-y-3'>
                    <EditField label='Tên khuyến mãi'>
                      <Input value={dp.promotion_name}
                        onChange={(e) => set('promotion_name', e.target.value)}
                        placeholder='Tên chương trình KM...'
                        className='h-8 text-xs' />
                    </EditField>
                    <div className='grid grid-cols-2 gap-3'>
                      <EditField label='Bắt đầu'>
                        <Input type='datetime-local' value={toDatetimeLocal(dp.promotion_begin_date)}
                          onChange={(e) => set('promotion_begin_date', e.target.value)}
                          className='h-8 text-xs' />
                      </EditField>
                      <EditField label='Kết thúc'>
                        <Input type='datetime-local' value={toDatetimeLocal(dp.promotion_end_date)}
                          onChange={(e) => set('promotion_end_date', e.target.value)}
                          className='h-8 text-xs' />
                      </EditField>
                    </div>
                    <SwitchRow label='VIP Promotion' checked={dp.is_promotion_vip} onChange={(v) => set('is_promotion_vip', v)} />
                    <Separator />
                    <p className='text-xs font-medium text-muted-foreground'>Flash sale</p>
                    <div className='grid grid-cols-2 gap-3'>
                      <EditField label='Bắt đầu flash sale'>
                        <Input type='datetime-local' value={toDatetimeLocal(dp.date_start_quick_sale)}
                          onChange={(e) => set('date_start_quick_sale', e.target.value)}
                          className='h-8 text-xs' />
                      </EditField>
                      <EditField label='Kết thúc flash sale'>
                        <Input type='datetime-local' value={toDatetimeLocal(dp.date_end_quick_sale)}
                          onChange={(e) => set('date_end_quick_sale', e.target.value)}
                          className='h-8 text-xs' />
                      </EditField>
                    </div>
                  </div>
                ) : (
                  <div className='space-y-2'>
                    {product.promotion_name ? (
                      <div className='flex items-start gap-1.5 text-xs'>
                        <Icons.sparkles className='mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500' />
                        <div>
                          <span className='font-medium'>{product.promotion_name}</span>
                          {product.is_promotion_vip && (
                            <Badge variant='secondary' className='ml-1.5 h-4 text-[10px]'>VIP</Badge>
                          )}
                          {product.promotion_begin_date && !product.promotion_begin_date.startsWith('1999') && (
                            <p className='mt-0.5 text-muted-foreground'>
                              {fmtDate(product.promotion_begin_date)} – {fmtDate(product.promotion_end_date)}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <p className='text-xs text-muted-foreground/60'>Không có khuyến mãi</p>
                    )}
                    {product.date_start_quick_sale && !product.date_start_quick_sale.startsWith('2021-10-21 16:35') && (
                      <p className='text-xs text-muted-foreground'>
                        Flash sale: {fmtDate(product.date_start_quick_sale)} – {fmtDate(product.date_end_quick_sale)}
                      </p>
                    )}
                    {product.promotion_id > 0 && (
                      <p className='font-mono text-[10px] text-muted-foreground'>Promotion ID: {product.promotion_id}</p>
                    )}
                  </div>
                )}
              </div>

              <Separator />

              {/* ── 6. Stock ─────────────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Kho & Phân loại</SectionLabel>
                <div className='grid grid-cols-3 gap-4'>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Số lượng kho</p>
                    {isEditing ? (
                      <Input type='number' value={dp.stock_quantity}
                        onChange={(e) => set('stock_quantity', parseInt(e.target.value) || 0)}
                        className='h-8 text-sm' />
                    ) : (
                      <p className='font-semibold text-sm'>{product.stock_quantity.toLocaleString()}</p>
                    )}
                  </div>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>SL/pack</p>
                    {isEditing ? (
                      <Input type='number' value={dp.quantity_per_pack}
                        onChange={(e) => set('quantity_per_pack', parseInt(e.target.value) || 1)}
                        className='h-8 text-sm' />
                    ) : (
                      <p className='font-semibold text-sm'>{product.quantity_per_pack || '—'}</p>
                    )}
                  </div>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Đã bán</p>
                    <p className='font-semibold text-sm'>{product.sold_quantity.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Membership type</p>
                    {isEditing ? (
                      <Input type='number' value={dp.membership_type_id}
                        onChange={(e) => set('membership_type_id', parseInt(e.target.value) || 0)}
                        className='h-8 text-sm' />
                    ) : (
                      <p className='font-semibold text-sm'>{product.membership_type_id}</p>
                    )}
                  </div>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Digital type</p>
                    {isEditing ? (
                      <Input type='number' value={dp.digital_type_id}
                        onChange={(e) => set('digital_type_id', parseInt(e.target.value) || 0)}
                        className='h-8 text-sm' />
                    ) : (
                      <p className='font-semibold text-sm'>{product.digital_type_id}</p>
                    )}
                  </div>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Label type</p>
                    {isEditing ? (
                      <Input type='number' value={dp.label_type}
                        onChange={(e) => set('label_type', parseInt(e.target.value) || 0)}
                        className='h-8 text-sm' />
                    ) : (
                      <p className='font-semibold text-sm'>{product.label_type}</p>
                    )}
                  </div>
                </div>
                {isEditing && (
                  <div className='space-y-1'>
                    <p className='text-xs text-muted-foreground'>Event UID</p>
                    <Input value={dp.event_uid ?? ''}
                      onChange={(e) => set('event_uid', e.target.value || null)}
                      placeholder='Event UID...'
                      className='h-8 text-xs font-mono' />
                  </div>
                )}
                {!isEditing && product.event_uid && (
                  <FieldRow label='Event UID' value={String(product.event_uid)} mono />
                )}
              </div>

              <Separator />

              {/* ── 7. Status Flags ───────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Trạng thái</SectionLabel>
                {isEditing ? (
                  <div className='space-y-3'>
                    <SwitchRow label='Online' checked={dp.is_online} onChange={(v) => set('is_online', v)} />
                    <SwitchRow label='Đang bán' checked={dp.is_selling} onChange={(v) => set('is_selling', v)} />
                    <SwitchRow label='Chỉ bán online' checked={dp.is_only_online} onChange={(v) => set('is_only_online', v)} />
                    <SwitchRow label='Đang xử lý' checked={dp.is_processing} onChange={(v) => set('is_processing', v)} description='Sản phẩm đang trong quy trình xử lý' />
                    <SwitchRow label='Đã xóa' checked={dp.is_deleted} onChange={(v) => set('is_deleted', v)} description='Đánh dấu xóa (soft delete)' />
                    <SwitchRow label='Sản phẩm tham chiếu' checked={dp.is_reference} onChange={(v) => set('is_reference', v)} />
                    <SwitchRow label='Hết hàng' checked={dp.is_outstock} onChange={(v) => set('is_outstock', v)} />
                  </div>
                ) : (
                  <div className='grid grid-cols-2 gap-x-6 gap-y-2.5'>
                    <FieldRow label='Online'><BoolBadge value={product.is_online} labelOn='Online' labelOff='Offline' /></FieldRow>
                    <FieldRow label='Đang bán'><BoolBadge value={product.is_selling} labelOn='Đang bán' labelOff='Ngừng bán' /></FieldRow>
                    <FieldRow label='Chỉ online'><BoolBadge value={product.is_only_online} labelOn='Chỉ online' labelOff='Tất cả kênh' /></FieldRow>
                    <FieldRow label='Còn hàng'><BoolBadge value={!product.is_outstock} labelOn='Còn hàng' labelOff='Hết hàng' /></FieldRow>
                    <FieldRow label='Đang xử lý'><BoolBadge value={product.is_processing} labelOn='Đang xử lý' /></FieldRow>
                    <FieldRow label='Đã xóa'><BoolBadge value={product.is_deleted} labelOn='Đã xóa' /></FieldRow>
                    <FieldRow label='Tham chiếu'><BoolBadge value={product.is_reference} labelOn='Tham chiếu' /></FieldRow>
                  </div>
                )}
              </div>

              <Separator />

              {/* ── 8. Feature Flags ─────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Tính năng</SectionLabel>
                {isEditing ? (
                  <div className='space-y-3'>
                    <SwitchRow label='Miễn phí vận chuyển' checked={dp.is_free_ship} onChange={(v) => set('is_free_ship', v)} />
                    <SwitchRow label='Giao hàng siêu nhanh' checked={dp.is_super_fast_delivery} onChange={(v) => set('is_super_fast_delivery', v)} />
                    <SwitchRow label='Có quà tặng' checked={dp.is_have_gift} onChange={(v) => set('is_have_gift', v)} />
                    <SwitchRow label='Combo' checked={dp.is_combo} onChange={(v) => set('is_combo', v)} />
                    <SwitchRow label='Livestream' checked={dp.is_livestream} onChange={(v) => set('is_livestream', v)} />
                    <SwitchRow label='Video Shopping' checked={dp.is_video_shopping} onChange={(v) => set('is_video_shopping', v)} />
                  </div>
                ) : (
                  <div className='flex flex-wrap gap-1.5'>
                    {[
                      { active: product.is_free_ship, label: 'Free Ship', icon: <Icons.package className='h-3 w-3' /> },
                      { active: product.is_super_fast_delivery, label: 'Giao siêu nhanh', icon: <Icons.clock className='h-3 w-3' /> },
                      { active: product.is_have_gift, label: 'Quà tặng', icon: <Icons.sparkles className='h-3 w-3' /> },
                      { active: product.is_combo, label: 'Combo', icon: <Icons.product className='h-3 w-3' /> },
                      { active: product.is_livestream, label: 'Livestream', icon: <Icons.video className='h-3 w-3' /> },
                      { active: product.is_video_shopping, label: 'Video Shopping', icon: <Icons.video className='h-3 w-3' /> }
                    ].map(({ active, label, icon }) => (
                      <span key={label}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${
                          active ? 'border-primary/20 bg-primary/5 text-primary' : 'border-transparent bg-muted text-muted-foreground/60'
                        }`}>
                        {icon}{label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <Separator />

              {/* ── 9. Overlay Text ──────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Văn bản Overlay (hình ảnh)</SectionLabel>
                {isEditing ? (
                  <div className='grid grid-cols-2 gap-3'>
                    {(['top_text', 'middle_text', 'bottom_text', 'center_text'] as const).map((field) => (
                      <EditField key={field} label={{ top_text: 'Trên', middle_text: 'Giữa', bottom_text: 'Dưới', center_text: 'Trung tâm' }[field]}>
                        <Input value={dp[field]} onChange={(e) => set(field, e.target.value)}
                          placeholder='Nhập văn bản...' className='h-8 text-xs' />
                      </EditField>
                    ))}
                  </div>
                ) : (
                  <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                    <FieldRow label='Trên' value={product.top_text || '—'} />
                    <FieldRow label='Giữa' value={product.middle_text || '—'} />
                    <FieldRow label='Dưới' value={product.bottom_text || '—'} />
                    <FieldRow label='Trung tâm' value={product.center_text || '—'} />
                  </div>
                )}
              </div>

              <Separator />

              {/* ── 10. Combo ────────────────────────────────────────────── */}
              {(dp.is_combo || isEditing) && (
                <>
                  <div className='px-5 py-4 space-y-3'>
                    <SectionLabel>Combo</SectionLabel>
                    {isEditing ? (
                      <div className='space-y-3'>
                        <EditField label='Tên combo'>
                          <Input value={dp.combo_name} onChange={(e) => set('combo_name', e.target.value)}
                            placeholder='Tên combo...' className='h-8 text-xs' />
                        </EditField>
                        <EditField label='Loại combo'>
                          <Input type='number' value={dp.type_combo}
                            onChange={(e) => set('type_combo', parseInt(e.target.value) || 0)}
                            className='h-8 text-xs' />
                        </EditField>
                      </div>
                    ) : (
                      <div className='space-y-2'>
                        <FieldRow label='Tên combo' value={product.combo_name || '—'} />
                        <FieldRow label='Combo ID' value={product.combo_id || '—'} mono />
                        <FieldRow label='Loại combo' value={product.type_combo} />
                        {product.combo_image_icon_url && (
                          <div>
                            <p className='mb-1 text-xs text-muted-foreground'>Icon combo</p>
                            <img src={product.combo_image_icon_url} alt='combo icon' className='h-8 object-contain' />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <Separator />
                </>
              )}

              {/* ── 11. Image Frame ───────────────────────────────────────── */}
              {(product.image_frame || isEditing) && (
                <>
                  <div className='px-5 py-4 space-y-3'>
                    <SectionLabel>Khung hình</SectionLabel>
                    {isEditing ? (
                      <div className='space-y-3'>
                        <EditField label='URL khung'>
                          <Input value={dp.image_frame} onChange={(e) => set('image_frame', e.target.value)}
                            placeholder='https://...' className='h-8 text-xs' />
                        </EditField>
                        <EditField label='Hết hạn khung'>
                          <Input type='datetime-local' value={toDatetimeLocal(dp.frame_expired)}
                            onChange={(e) => set('frame_expired', e.target.value)}
                            className='h-8 text-xs' />
                        </EditField>
                      </div>
                    ) : (
                      <div className='space-y-2'>
                        <FieldRow label='URL khung' value={product.image_frame || '—'} />
                        <FieldRow label='Hết hạn' value={fmtDateTime(product.frame_expired)} />
                      </div>
                    )}
                  </div>
                  <Separator />
                </>
              )}

              {/* ── 12. Description ───────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <div className='flex items-center justify-between'>
                  <SectionLabel>Mô tả sản phẩm</SectionLabel>
                  {isEditing && (
                    <button type='button' onClick={() => setDescPreview(!descPreview)}
                      className='text-xs text-primary hover:underline -mt-2'>
                      {descPreview ? 'Sửa HTML' : 'Preview'}
                    </button>
                  )}
                </div>
                {isEditing && !descPreview ? (
                  <Textarea value={dp.description || ''} onChange={(e) => set('description', e.target.value)}
                    rows={8} placeholder='<p>Nội dung HTML...</p>' className='resize-y font-mono text-xs' />
                ) : (
                  <div
                    className='prose prose-sm max-w-none text-sm prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-img:rounded-lg prose-headings:text-foreground [&>*]:text-foreground'
                    dangerouslySetInnerHTML={{
                      __html: dp.description || '<p class="text-muted-foreground text-sm">Chưa có mô tả</p>'
                    }}
                  />
                )}

                {/* description_content */}
                {(dp.description_content || isEditing) && (
                  <div className='mt-4 space-y-1.5'>
                    <p className='text-xs text-muted-foreground font-medium'>Nội dung phụ (description_content)</p>
                    {isEditing ? (
                      <Textarea value={dp.description_content || ''}
                        onChange={(e) => set('description_content', e.target.value)}
                        rows={4} placeholder='Nội dung phụ...' className='resize-y text-xs' />
                    ) : (
                      <p className='text-xs text-muted-foreground whitespace-pre-wrap'>{product.description_content || '—'}</p>
                    )}
                  </div>
                )}

                {/* text_online */}
                {(dp.text_online || isEditing) && (
                  <div className='mt-4 space-y-1.5'>
                    <p className='text-xs text-muted-foreground font-medium'>Text online</p>
                    {isEditing ? (
                      <Input value={dp.text_online} onChange={(e) => set('text_online', e.target.value)}
                        placeholder='Text hiển thị online...' className='h-8 text-xs' />
                    ) : (
                      <p className='text-xs'>{product.text_online || '—'}</p>
                    )}
                  </div>
                )}
              </div>

              <Separator />

              {/* ── 13. Keywords ─────────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Keywords</SectionLabel>
                {isEditing ? (
                  <KeywordEditor
                    keywords={dp.keywords ?? []}
                    onChange={(kws) => set('keywords', kws)}
                  />
                ) : (
                  <div className='flex flex-wrap gap-1.5'>
                    {(product.keywords ?? []).length > 0 ? (
                      (product.keywords ?? []).map((kw, i) => (
                        <span key={i} className='inline-flex rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground'>
                          {kw}
                        </span>
                      ))
                    ) : (
                      <span className='text-xs text-muted-foreground/50'>Chưa có keyword</span>
                    )}
                  </div>
                )}
              </div>

              <Separator />

              {/* ── 14. Attributes ───────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Thuộc tính</SectionLabel>
                {isEditing ? (
                  <AttributeEditor
                    attrs={dp.product_attributes ?? []}
                    onChange={(a) => set('product_attributes', a)}
                  />
                ) : (
                  (product.product_attributes ?? []).length > 0 ? (
                    <div className='space-y-3'>
                      {(product.product_attributes ?? []).map((attr, i) => (
                        <div key={i}>
                          <p className='mb-1.5 text-xs text-muted-foreground'>{attr.filter_group_name}</p>
                          <div className='flex flex-wrap gap-1.5'>
                            {attr.filter_group_attribute.map((opt, j) => (
                              <span key={j} className='inline-flex rounded-md bg-muted px-2 py-0.5 text-xs font-medium'>
                                {opt.name_filter}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className='text-xs text-muted-foreground/50'>Chưa có thuộc tính</p>
                  )
                )}
              </div>

              <Separator />

              {/* ── 15. Shipping ─────────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Vận chuyển</SectionLabel>
                {isEditing ? (
                  <ShippingEditor
                    shipping={dp.shipping_object ?? []}
                    onChange={(s) => set('shipping_object', s)}
                  />
                ) : (
                  (product.shipping_object ?? []).length > 0 ? (
                    <div className='space-y-2'>
                      {(product.shipping_object ?? []).filter(s => s.feeship_type_id > 0 || s.label_url).map((s, i) => (
                        <div key={i} className='rounded-lg bg-muted/50 px-3 py-2 text-xs space-y-0.5'>
                          {s.label_url && <p>Label: {s.label_url}</p>}
                          <p>Feeship type: {s.feeship_type_id}</p>
                          <p>Districts: {s.district_ids.filter(d => d > 0).join(', ') || 'All'}</p>
                        </div>
                      ))}
                      {(product.shipping_object ?? []).every(s => s.feeship_type_id === 0 && !s.label_url) && (
                        <p className='text-xs text-muted-foreground/50'>Mặc định</p>
                      )}
                    </div>
                  ) : (
                    <p className='text-xs text-muted-foreground/50'>Không có cấu hình vận chuyển</p>
                  )
                )}
              </div>

              <Separator />

              {/* ── 16. Performance ──────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Hiệu suất & Xếp hạng</SectionLabel>
                <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                  <FieldRow label='Đã bán' value={product.sold_quantity.toLocaleString()} />
                  <FieldRow label='Đánh giá'>
                    <div className='flex items-center gap-1'>
                      <Icons.star className='h-3 w-3 fill-amber-400 text-amber-400' />
                      <span className='text-xs font-semibold'>{product.rating_star.toFixed(1)}</span>
                      <span className='text-xs text-muted-foreground'>/5</span>
                    </div>
                  </FieldRow>
                  <FieldRow label='Popularity' value={product.popularity.toLocaleString()} />
                  <FieldRow label='Product score' value={product.product_score.toLocaleString()} />
                  <FieldRow label='XH bán chạy' value={product.sold_quantity_ranking > 0 ? `#${product.sold_quantity_ranking}` : '—'} />
                  <FieldRow label='XH popularity' value={product.popularity_ranking > 0 ? `#${product.popularity_ranking}` : '—'} />
                  <FieldRow label='XH GP' value={product.gp_ranking > 0 ? `#${product.gp_ranking}` : '—'} />
                  <FieldRow label='XH GM' value={product.gm_ranking > 0 ? `#${product.gm_ranking}` : '—'} />
                  <FieldRow label='XH Promo' value={product.promo_ranking > 0 ? `#${product.promo_ranking}` : '—'} />
                </div>
              </div>

              <Separator />

              {/* ── 17. Sync Status ───────────────────────────────────────── */}
              <div className='px-5 py-4 space-y-3'>
                <SectionLabel>Trạng thái đồng bộ</SectionLabel>
                <div className='space-y-2'>
                  <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                    <FieldRow label='Sync ID' value={product.sync_status_id} mono />
                    <FieldRow label='Sync date' value={fmtDateTime(product.sync_status_date)} />
                  </div>
                  <div className='mt-2 grid grid-cols-2 gap-x-6 gap-y-1.5'>
                    {([
                      ['Public', product.sync_public_state, product.is_syncing_public],
                      ['Internal', product.sync_internal_state, product.is_syncing_internal],
                      ['Semantic', product.sync_semantic_state, product.is_syncing_semantic],
                      ['Image', product.sync_image_state, product.is_syncing_image]
                    ] as [string, number, boolean][]).map(([label, state, syncing]) => (
                      <div key={label} className='flex items-center justify-between gap-2'>
                        <span className='text-xs text-muted-foreground'>{label}</span>
                        <div className='flex items-center gap-1.5'>
                          {syncing && <Icons.spinner className='h-3 w-3 animate-spin text-primary' />}
                          <span className={`text-xs font-medium ${state === 2 ? 'text-emerald-600 dark:text-emerald-400' : state === 3 ? 'text-destructive' : 'text-muted-foreground'}`}>
                            {syncStateName(state)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='mt-2 pt-2 border-t space-y-1.5'>
                    <FieldRow label='Semantic sync' value={fmtDateTime(product.semantic_sync_status_date)} />
                    <FieldRow label='Image emb sync' value={fmtDateTime(product.image_embedding_sync_status_date)} />
                    <FieldRow label='Not-sale status' value={product.sync_not_sale_status_id} />
                    <FieldRow label='Not-sale date' value={fmtDateTime(product.sync_not_sale_status_date)} />
                    {product.embedding_reason_of_failure && (
                      <FieldRow label='Emb failure' value={product.embedding_reason_of_failure} />
                    )}
                  </div>
                </div>
              </div>

              <Separator />

              {/* ── 18. Audit / System IDs ────────────────────────────────── */}
              <div className='px-5 py-4 pb-8 space-y-3'>
                <SectionLabel>Thông tin hệ thống</SectionLabel>
                <div className='space-y-2'>
                  <FieldRow label='Staging ID' value={product.product_search_staging_id} mono />
                  <FieldRow label='P ID' value={product.p_id} mono />
                  <FieldRow label='Ecom ID' value={product.ecom_product_id} mono />
                  <FieldRow label='ERP ID' value={product.erp_product_id} mono />
                  <FieldRow label='ID' value={product.id} mono />
                  <FieldRow label='Tạo lúc' value={fmtDateTime(product.created_date)} />
                  <FieldRow label='Người tạo' value={product.created_user ?? '—'} />
                  <FieldRow label='Cập nhật lúc' value={fmtDateTime(product.updated_date)} />
                  <FieldRow label='Người cập nhật' value={product.updated_user ?? '—'} />
                  <FieldRow label='Unix tạo' value={product.created_unix_time} mono />
                  <FieldRow label='Unix cập nhật' value={product.updated_unix_time} mono />
                  {product.checksum && <FieldRow label='Checksum' value={product.checksum} mono />}
                  {product.tranform_noted && <FieldRow label='Ghi chú transform' value={product.tranform_noted} />}
                  {product.sync_note && <FieldRow label='Sync note' value={product.sync_note} />}
                  {product.deleted_typesense_ids?.some(d => d > 0) && (
                    <FieldRow label='Typesense IDs' value={product.deleted_typesense_ids.join(', ')} mono />
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Edit footer */}
          {isEditing && (
            <div className='flex flex-shrink-0 items-center gap-2 border-t px-5 py-3'>
              <Button variant='outline' className='flex-1' onClick={handleCancelClick}>
                Hủy
              </Button>
              <Button className='flex-1' onClick={handleSaveClick} disabled={updateMutation.isPending}>
                {updateMutation.isPending ? (
                  <><Icons.spinner className='mr-1.5 h-3.5 w-3.5 animate-spin' />Đang lưu...</>
                ) : (
                  'Lưu thay đổi'
                )}
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Image lightbox */}
      {previewImage && (
        <div
          className='fixed inset-0 z-[60] flex items-center justify-center bg-black/80'
          onClick={() => setPreviewImage(null)}
        >
          <button
            className='absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20'
            onClick={() => setPreviewImage(null)}
          >
            <Icons.close className='h-5 w-5' />
          </button>
          <img
            src={previewImage}
            alt=''
            className='max-h-[90vh] max-w-[90vw] rounded-lg object-contain'
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
