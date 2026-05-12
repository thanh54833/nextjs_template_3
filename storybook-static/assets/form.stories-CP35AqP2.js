import{j as e}from"./jsx-runtime-u17CrQMm.js";import{w as B,u as N}from"./index-B8KB3hxO.js";import{u as A,c as H,a as $,Q as L,b as X}from"./mutations-Bogam5hB.js";import{o as P,s as i,c as I,n as V,l as Z,_ as Y,u as g,b as S,e as M}from"./tanstack-form-CJKk980Y.js";import{B as C}from"./button-BQzN1lMO.js";import{I as W}from"./next-image-B_ObWQ8f.js";import{F as d,a as c,b as p,c as _,d as J}from"./frame-D9bzNsq6.js";import{I as s}from"./icons-BdTSAv6R.js";import{u as j}from"./index-B2wVv7rK.js";import"./index-DYby6Z_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./with-selector-Dn_EPY37.js";import"./index-VlTWTt8y.js";import"./field-HTWoZM-x.js";import"./index-koxbFvze.js";import"./utils-Czy_q_oT.js";import"./label-CBeO_B6j.js";import"./index-CraXK6NT.js";import"./index-B_GMK2QL.js";import"./index-BbSX8NXS.js";import"./index-DOER7VuF.js";import"./separator-IRAzr_sg.js";import"./input-group-DE8iN8n0.js";import"./input-Dz4TUfxo.js";import"./textarea-cNT01uKG.js";import"./spinner-C8LyUNDi.js";import"./select-B12i0HQj.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-C4JN59vf.js";import"./index-BKV5D6oG.js";import"./index-ofxjSrhS.js";import"./index-D3yKPjIL.js";import"./index-ByLlCQqU.js";import"./index-CZLUcR6N.js";import"./index-C1lvhlBT.js";import"./index-D1sqivKo.js";import"./index-DQn26SIZ.js";import"./floating-ui.react-dom-DZ6WtPqY.js";import"./index-Doocx2sM.js";import"./index-Hpgzpgrs.js";import"./index-BmEHjAU8.js";import"./index-t4OVC0Wb.js";import"./index-D5FZlcEA.js";import"./checkbox-Cl4zh2m2.js";import"./index-CcuSeV1x.js";import"./switch-C4S7R9io.js";import"./radio-group-B5s5vgz5.js";import"./index-BXQs120s.js";import"./slider-cwZHwJ5b.js";import"./index-BhKcopM4.js";import"./progress-Bk9cwEgH.js";import"./scroll-area-CD1fzsEB.js";import"./calendar-VxVs87-c.js";import"./popover-DBMmlqna.js";import"./index-DGP6o15j.js";const w=[{value:"842",label:"Sữa nước"},{value:"865",label:"Quà tặng"},{value:"725",label:"Vitamin và Sức khỏe"},{value:"998",label:"Chăm sóc da & Vệ sinh"},{value:"1021",label:"Quần Áo Trẻ Em"}],K=[{value:"954",label:"Fruto Nyanya"},{value:"1443",label:"Gumazing"},{value:"945",label:"Animo"},{value:"692",label:"Fysoline"},{value:"708",label:"Quà tặng không bán"}],ee=[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"unisex",label:"Unisex"}],re=[{value:"published",label:"Published"},{value:"schedule",label:"Schedule"},{value:"hidden",label:"Hidden"}],ne=5e6,ae=["image/jpeg","image/jpg","image/png","image/webp"],O=P({image:I().refine(r=>r?.length==1,"Image is required.").refine(r=>r?.[0]?.size<=ne,"Max file size is 5MB.").refine(r=>ae.includes(r?.[0]?.type),".jpg, .jpeg, .png and .webp files are accepted."),name:i().min(2,"Product name must be at least 2 characters."),category:i().min(1,"Please select a category"),price:V({message:"Price is required"}),description:i().min(10,"Description must be at least 10 characters.")}),te=5e6,ie=["image/jpeg","image/jpg","image/png","image/webp"],se=P({brand:i().min(1,"Please select a brand"),category:i().min(1,"Please select a category"),gender:i().default("unisex"),price:V({message:"Price is required"}),name:i().min(2,"Product name must be at least 2 characters."),description:i().min(10,"Description must be at least 10 characters."),pageTitle:i().optional(),metaDescription:i().optional(),visibility:Y(["published","schedule","hidden"]).default("published"),publishDate:i().optional(),parentCategory:i().optional(),images:I().optional().refine(r=>!r||r.length>=1,"At least one image is required.").refine(r=>!r||r.every(n=>n.size<=te),"Max file size is 5MB.").refine(r=>!r||r.every(n=>ie.includes(n.type)),".jpg, .jpeg, .png and .webp files are accepted."),linkVideo:i().url("Enter a valid URL").optional().or(Z(""))});function E({initialData:r,pageTitle:n}){const a=!!r,u=A({...H,onSuccess:()=>{j.success("Product created successfully")},onError:()=>{j.error("Failed to create product")}}),m=A({...$,onSuccess:()=>{j.success("Product updated successfully")},onError:()=>{j.error("Failed to update product")}}),o=g({defaultValues:{brand:r?.com_manufacturer_id?.toString()??"",category:r?.com_category_name??"",gender:"unisex",price:r?.sale_price_vat,name:r?.ecom_product_name??"",description:r?.description??"",pageTitle:"",metaDescription:"",visibility:"published",publishDate:"",parentCategory:"",linkVideo:r?.link_video??"",images:void 0},validators:{onSubmit:se},onSubmit:({value:t})=>{const T={name:t.name,category:t.category,price:t.price,description:t.description,pageTitle:t.pageTitle,metaDescription:t.metaDescription,visibility:t.visibility,publishDate:t.publishDate,parentCategory:t.parentCategory,linkVideo:t.linkVideo};a?m.mutate({id:Number(r.id),values:T}):u.mutate(T)}}),{FormTextField:l,FormSelectField:q,FormTextareaField:D,FormRadioGroupField:Q,FormDatePickerField:R,FormFileUploadField:G}=S();return e.jsx(o.AppForm,{children:e.jsxs(o.Form,{id:"product-form-large",className:"flex flex-1 flex-col gap-4 px-2 pt-1 pb-2 md:px-3 md:pt-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:n}),e.jsxs("p",{className:"text-muted-foreground text-sm",children:["Products / ",a?"Edit Product":"Add Product"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[a&&e.jsx(C,{variant:"outline",size:"sm",onClick:()=>{o.reset()},children:"Create New"}),e.jsx(C,{size:"sm",type:"submit",form:"product-form-large",isLoading:u.isPending||m.isPending,children:a?"Update":"Save"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 lg:grid-cols-3",children:[e.jsxs("div",{className:"space-y-3 lg:col-span-2",children:[e.jsx(d,{children:e.jsxs(c,{children:[e.jsx(p,{className:"px-2 pb-2 pt-3",children:e.jsx(_,{className:"text-base",children:"Basic Information"})}),e.jsxs("div",{className:"space-y-4 px-2 pb-2",children:[e.jsx(q,{name:"brand",label:"Brand Name",required:!0,options:K,placeholder:"Select brand"}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[e.jsx(q,{name:"category",label:"Category",required:!0,options:w,placeholder:"Select category"}),e.jsx(q,{name:"gender",label:"Gender",options:ee,placeholder:"Select gender"}),e.jsx(l,{name:"price",label:"Price",required:!0,type:"number",min:0,step:.01,placeholder:"$0.00"})]}),e.jsx(l,{name:"name",label:"Product Name",required:!0,placeholder:"Enter product name"}),e.jsxs("div",{className:"group/field flex w-full flex-col gap-3",children:[e.jsxs("label",{className:"text-sm font-medium leading-snug",children:["Description ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsxs("div",{className:"overflow-hidden rounded-lg border",children:[e.jsx("div",{className:"flex flex-wrap items-center gap-0.5 border-b bg-muted/50 px-2 py-1.5",children:oe.map(t=>t.icon==="separator"?e.jsx("div",{className:"mx-1 h-4 w-px bg-border"},t.icon):e.jsx(le,{node:t.node,label:t.label},t.icon))}),e.jsx(o.AppField,{name:"description",children:t=>e.jsx(t.TextareaField,{label:"",required:!0,placeholder:"Enter product description...",rows:6,className:"border-0 shadow-none focus-visible:ring-0"})})]})]})]})]})}),e.jsx(d,{children:e.jsxs(c,{children:[e.jsxs(p,{className:"px-2 pb-2 pt-3",children:[e.jsx(_,{className:"text-base",children:"SEO"}),e.jsx(J,{children:"Optimize how your product appears in search results."})]}),e.jsxs("div",{className:"space-y-4 px-2 pb-2",children:[e.jsx(l,{name:"pageTitle",label:"Page Title",placeholder:"Get free delivery, or pick up available items at an Apple Store"}),e.jsx(D,{name:"metaDescription",label:"Meta Description",placeholder:"Enter meta description for search engines...",rows:3,maxLength:160})]})]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(d,{children:e.jsxs(c,{children:[e.jsx(p,{className:"px-2 pb-2 pt-3",children:e.jsx(_,{className:"text-base",children:"Visibility"})}),e.jsxs("div",{className:"space-y-4 px-2 pb-2",children:[e.jsx(Q,{name:"visibility",label:"",options:re}),e.jsx(R,{name:"publishDate",label:"Publish Date",placeholder:"Select date",description:"The product will not be visible until the specified date."})]})]})}),e.jsx(d,{children:e.jsxs(c,{children:[e.jsx(p,{className:"px-2 pb-2 pt-3",children:e.jsx(_,{className:"text-base",children:"Parent Category"})}),e.jsx("div",{className:"px-2 pb-2",children:e.jsx(q,{name:"parentCategory",label:"",options:w,placeholder:"Select parent category",description:"Select a category that will be the parent of the current one."})})]})}),e.jsx(d,{children:e.jsxs(c,{children:[e.jsx(p,{className:"px-2 pb-2 pt-3",children:e.jsx(_,{className:"text-base",children:"Product Image"})}),e.jsxs("div",{className:"px-2 pb-2",children:[a&&r?.product_image_cover&&e.jsxs("div",{className:"mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4",children:[e.jsx(F,{src:r.product_image_cover,alt:r.ecom_product_name}),r.product_image_trans&&r.product_image_trans!==r.product_image_cover&&e.jsx(F,{src:r.product_image_trans,alt:`${r.ecom_product_name} - trans`}),r.com_manufacturer_image_square_url&&e.jsx(F,{src:r.com_manufacturer_image_square_url,alt:"Brand logo"}),r.com_manufacturer_image_logo_url&&e.jsx(F,{src:r.com_manufacturer_image_logo_url,alt:"Brand logo"})]}),e.jsx(G,{name:"images",label:"",description:"Upload product images (up to 4 files, 5MB each)",maxSize:5*1024*1024,maxFiles:4})]})]})}),e.jsx(d,{children:e.jsxs(c,{children:[e.jsx(p,{className:"px-2 pb-2 pt-3",children:e.jsx(_,{className:"text-base",children:"Product Video"})}),e.jsxs("div",{className:"px-2 pb-2",children:[a&&r?.link_video&&e.jsx("div",{className:"mb-3 aspect-video overflow-hidden rounded-lg border bg-muted",children:e.jsx("video",{src:r.link_video,controls:!0,"aria-label":`${r.ecom_product_name} product video`,className:"h-full w-full object-contain",preload:"metadata"})}),e.jsx(l,{name:"linkVideo",label:"",placeholder:"Paste video URL (YouTube, Vimeo, or direct link)"})]})]})})]})]})]})})}const oe=[{icon:"bold",label:"Bold",node:s.bold},{icon:"italic",label:"Italic",node:s.italic},{icon:"underline",label:"Underline",node:s.underline},{icon:"strikethrough",label:"Strikethrough",node:s.strikethrough},{icon:"separator"},{icon:"quote",label:"Quote",node:s.quote},{icon:"link",label:"Link",node:s.link},{icon:"code",label:"Code",node:s.code},{icon:"separator"},{icon:"h1",label:"Heading 1",node:e.jsx("span",{className:"text-xs font-bold",children:"H1"})},{icon:"h2",label:"Heading 2",node:e.jsx("span",{className:"text-xs font-bold",children:"H2"})},{icon:"separator"},{icon:"list",label:"Bullet list",node:s.list},{icon:"listOrdered",label:"Numbered list",node:s.listOrdered},{icon:"alignLeft",label:"Align left",node:s.alignLeft},{icon:"alignCenter",label:"Align center",node:s.alignCenter},{icon:"alignRight",label:"Align right",node:s.alignRight},{icon:"separator"},{icon:"text",label:"Text style",node:s.text},{icon:"font",label:"Font family",node:s.font},{icon:"palette",label:"Text color",node:s.palette}];function le({node:r,label:n}){return e.jsx("div",{role:"presentation","aria-hidden":"true",className:"flex h-7 w-7 items-center justify-center rounded text-muted-foreground",children:r})}function F({src:r,alt:n}){return e.jsx("div",{className:"group relative aspect-square overflow-hidden rounded-lg border bg-muted",children:e.jsx(W,{src:r,alt:n,fill:!0,className:"object-cover transition-transform group-hover:scale-105",sizes:"(max-width: 640px) 50vw, 25vw"})})}E.__docgenInfo={description:"",methods:[],displayName:"ProductFormLarge",props:{initialData:{required:!0,tsType:{name:"union",raw:"Product | null",elements:[{name:"signature",type:"object",raw:`{
  product_search_staging_id: number;
  p_id: number;
  ecom_product_id: number;
  ecom_product_name: string;
  ecom_product_name_unaccent: string;
  erp_product_id: string;
  erp_product_name: string;
  erp_category_name: string;
  erp_category_id: number;
  com_category_id: number;
  com_category_name: string;
  com_category_name_unaccent: string;
  erp_manufacturer_id: number;
  erp_manufacturer_name: string;
  com_manufacturer_id: number;
  com_manufacturer_name: string;
  com_manufacturer_name_unaccent: string;
  com_manufacturer_image_square_url: string;
  com_manufacturer_image_logo_url: string;
  full_link: string;
  product_attributes: ProductAttribute[] | null;
  sold_quantity: number;
  product_image_cover: string;
  product_image_trans: string;
  rating_star: number;
  price: number;
  discount_amount: number;
  discount_percent: number;
  sale_price_vat: number;
  is_combo: boolean;
  is_have_discount: boolean;
  is_have_gift: boolean;
  is_order_discount: boolean;
  order_discount_from: number;
  is_livestream: boolean;
  is_video_shopping: boolean;
  is_super_fast_delivery: boolean;
  is_free_ship: boolean;
  is_deleted: boolean;
  created_date: string;
  updated_date: string;
  sync_status_id: number;
  is_processing: boolean;
  stock_quantity: number;
  is_outstock: boolean;
  is_online: boolean;
  is_selling: boolean;
  popularity: number;
  is_reference: boolean;
  keywords: string[] | null;
  promotion_name: string;
  promotion_begin_date: string;
  promotion_end_date: string;
  id: string;
  description: string;
  // Text overlays on product image
  top_text: string;
  middle_text: string;
  bottom_text: string;
  center_text: string;
  // Combo
  combo_id: string;
  combo_name: string;
  combo_image_icon_url: string;
  combo_image_large_url: string;
  type_combo: number;
  // Promotion extended
  is_promotion_vip: boolean;
  promotion_id: number;
  // Gifts
  gift_list: null | unknown[];
  // Shipping
  shipping_object: ShippingObject[];
  // Audit
  created_user: number | null;
  updated_user: number | null;
  sync_status_date: string;
  checksum: string;
  created_unix_time: number;
  updated_unix_time: number;
  sync_note: string | null;
  tranform_noted: string;
  embedding_reason_of_failure: string;
  // Image embedding sync
  image_embedding_sync_status_id: number;
  image_embedding_sync_status_date: string;
  // Image frame / label
  image_frame: string;
  frame_expired: string;
  label_type: number;
  // Classification
  membership_type_id: number;
  quantity_per_pack: number;
  digital_type_id: number;
  event_uid: string | null;
  // Content
  link_video: string;
  text_online: string;
  description_content: string;
  // Quick sale
  date_start_quick_sale: string;
  date_end_quick_sale: string;
  // Extra status
  is_only_online: boolean;
  // Sync states
  sync_not_sale_status_id: number;
  sync_not_sale_status_date: string;
  semantic_sync_status_id: number;
  semantic_sync_status_date: string;
  sync_public_state: number;
  sync_internal_state: number;
  sync_semantic_state: number;
  sync_image_state: number;
  is_syncing_public: boolean;
  is_syncing_internal: boolean;
  is_syncing_semantic: boolean;
  is_syncing_image: boolean;
  // Rankings & scores
  sold_quantity_ranking: number;
  product_score: number;
  gp_ranking: number;
  popularity_ranking: number;
  promo_ranking: number;
  gm_ranking: number;
  // Typesense
  deleted_typesense_ids: number[];
  sync_stock_typesense_ids: number[];
}`,signature:{properties:[{key:"product_search_staging_id",value:{name:"number",required:!0}},{key:"p_id",value:{name:"number",required:!0}},{key:"ecom_product_id",value:{name:"number",required:!0}},{key:"ecom_product_name",value:{name:"string",required:!0}},{key:"ecom_product_name_unaccent",value:{name:"string",required:!0}},{key:"erp_product_id",value:{name:"string",required:!0}},{key:"erp_product_name",value:{name:"string",required:!0}},{key:"erp_category_name",value:{name:"string",required:!0}},{key:"erp_category_id",value:{name:"number",required:!0}},{key:"com_category_id",value:{name:"number",required:!0}},{key:"com_category_name",value:{name:"string",required:!0}},{key:"com_category_name_unaccent",value:{name:"string",required:!0}},{key:"erp_manufacturer_id",value:{name:"number",required:!0}},{key:"erp_manufacturer_name",value:{name:"string",required:!0}},{key:"com_manufacturer_id",value:{name:"number",required:!0}},{key:"com_manufacturer_name",value:{name:"string",required:!0}},{key:"com_manufacturer_name_unaccent",value:{name:"string",required:!0}},{key:"com_manufacturer_image_square_url",value:{name:"string",required:!0}},{key:"com_manufacturer_image_logo_url",value:{name:"string",required:!0}},{key:"full_link",value:{name:"string",required:!0}},{key:"product_attributes",value:{name:"union",raw:"ProductAttribute[] | null",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  filter_group_name: string;
  id_filter_group_name: number;
  filter_group_attribute: {
    name_filter: string;
    id_filter_group: number;
  }[];
}`,signature:{properties:[{key:"filter_group_name",value:{name:"string",required:!0}},{key:"id_filter_group_name",value:{name:"number",required:!0}},{key:"filter_group_attribute",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name_filter: string;
  id_filter_group: number;
}`,signature:{properties:[{key:"name_filter",value:{name:"string",required:!0}},{key:"id_filter_group",value:{name:"number",required:!0}}]}}],raw:`{
  name_filter: string;
  id_filter_group: number;
}[]`,required:!0}}]}}],raw:"ProductAttribute[]"},{name:"null"}],required:!0}},{key:"sold_quantity",value:{name:"number",required:!0}},{key:"product_image_cover",value:{name:"string",required:!0}},{key:"product_image_trans",value:{name:"string",required:!0}},{key:"rating_star",value:{name:"number",required:!0}},{key:"price",value:{name:"number",required:!0}},{key:"discount_amount",value:{name:"number",required:!0}},{key:"discount_percent",value:{name:"number",required:!0}},{key:"sale_price_vat",value:{name:"number",required:!0}},{key:"is_combo",value:{name:"boolean",required:!0}},{key:"is_have_discount",value:{name:"boolean",required:!0}},{key:"is_have_gift",value:{name:"boolean",required:!0}},{key:"is_order_discount",value:{name:"boolean",required:!0}},{key:"order_discount_from",value:{name:"number",required:!0}},{key:"is_livestream",value:{name:"boolean",required:!0}},{key:"is_video_shopping",value:{name:"boolean",required:!0}},{key:"is_super_fast_delivery",value:{name:"boolean",required:!0}},{key:"is_free_ship",value:{name:"boolean",required:!0}},{key:"is_deleted",value:{name:"boolean",required:!0}},{key:"created_date",value:{name:"string",required:!0}},{key:"updated_date",value:{name:"string",required:!0}},{key:"sync_status_id",value:{name:"number",required:!0}},{key:"is_processing",value:{name:"boolean",required:!0}},{key:"stock_quantity",value:{name:"number",required:!0}},{key:"is_outstock",value:{name:"boolean",required:!0}},{key:"is_online",value:{name:"boolean",required:!0}},{key:"is_selling",value:{name:"boolean",required:!0}},{key:"popularity",value:{name:"number",required:!0}},{key:"is_reference",value:{name:"boolean",required:!0}},{key:"keywords",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!0}},{key:"promotion_name",value:{name:"string",required:!0}},{key:"promotion_begin_date",value:{name:"string",required:!0}},{key:"promotion_end_date",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"top_text",value:{name:"string",required:!0}},{key:"middle_text",value:{name:"string",required:!0}},{key:"bottom_text",value:{name:"string",required:!0}},{key:"center_text",value:{name:"string",required:!0}},{key:"combo_id",value:{name:"string",required:!0}},{key:"combo_name",value:{name:"string",required:!0}},{key:"combo_image_icon_url",value:{name:"string",required:!0}},{key:"combo_image_large_url",value:{name:"string",required:!0}},{key:"type_combo",value:{name:"number",required:!0}},{key:"is_promotion_vip",value:{name:"boolean",required:!0}},{key:"promotion_id",value:{name:"number",required:!0}},{key:"gift_list",value:{name:"union",raw:"null | unknown[]",elements:[{name:"null"},{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"}],required:!0}},{key:"shipping_object",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label_url: string;
  district_ids: number[];
  feeship_type_id: number;
}`,signature:{properties:[{key:"label_url",value:{name:"string",required:!0}},{key:"district_ids",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"feeship_type_id",value:{name:"number",required:!0}}]}}],raw:"ShippingObject[]",required:!0}},{key:"created_user",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"updated_user",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"sync_status_date",value:{name:"string",required:!0}},{key:"checksum",value:{name:"string",required:!0}},{key:"created_unix_time",value:{name:"number",required:!0}},{key:"updated_unix_time",value:{name:"number",required:!0}},{key:"sync_note",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"tranform_noted",value:{name:"string",required:!0}},{key:"embedding_reason_of_failure",value:{name:"string",required:!0}},{key:"image_embedding_sync_status_id",value:{name:"number",required:!0}},{key:"image_embedding_sync_status_date",value:{name:"string",required:!0}},{key:"image_frame",value:{name:"string",required:!0}},{key:"frame_expired",value:{name:"string",required:!0}},{key:"label_type",value:{name:"number",required:!0}},{key:"membership_type_id",value:{name:"number",required:!0}},{key:"quantity_per_pack",value:{name:"number",required:!0}},{key:"digital_type_id",value:{name:"number",required:!0}},{key:"event_uid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"link_video",value:{name:"string",required:!0}},{key:"text_online",value:{name:"string",required:!0}},{key:"description_content",value:{name:"string",required:!0}},{key:"date_start_quick_sale",value:{name:"string",required:!0}},{key:"date_end_quick_sale",value:{name:"string",required:!0}},{key:"is_only_online",value:{name:"boolean",required:!0}},{key:"sync_not_sale_status_id",value:{name:"number",required:!0}},{key:"sync_not_sale_status_date",value:{name:"string",required:!0}},{key:"semantic_sync_status_id",value:{name:"number",required:!0}},{key:"semantic_sync_status_date",value:{name:"string",required:!0}},{key:"sync_public_state",value:{name:"number",required:!0}},{key:"sync_internal_state",value:{name:"number",required:!0}},{key:"sync_semantic_state",value:{name:"number",required:!0}},{key:"sync_image_state",value:{name:"number",required:!0}},{key:"is_syncing_public",value:{name:"boolean",required:!0}},{key:"is_syncing_internal",value:{name:"boolean",required:!0}},{key:"is_syncing_semantic",value:{name:"boolean",required:!0}},{key:"is_syncing_image",value:{name:"boolean",required:!0}},{key:"sold_quantity_ranking",value:{name:"number",required:!0}},{key:"product_score",value:{name:"number",required:!0}},{key:"gp_ranking",value:{name:"number",required:!0}},{key:"popularity_ranking",value:{name:"number",required:!0}},{key:"promo_ranking",value:{name:"number",required:!0}},{key:"gm_ranking",value:{name:"number",required:!0}},{key:"deleted_typesense_ids",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"sync_stock_typesense_ids",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}}]}},{name:"null"}]},description:""},pageTitle:{required:!0,tsType:{name:"string"},description:""}}};const vr={title:"UI/Form",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Project-standard form system using TanStack Form with Zod validation. Use useAppForm for all forms — not react-hook-form directly."}}}},U=P({email:M("Enter a valid email"),password:i().min(8,"Password must be at least 8 characters")});function ue(){const r=g({defaultValues:{email:"",password:""},validators:{onChange:U},onSubmit:async({value:n})=>{await new Promise(a=>setTimeout(a,800)),console.info("Submitted:",n)}});return e.jsx("div",{className:"max-w-sm",children:e.jsx(r.AppForm,{children:e.jsxs(r.Form,{children:[e.jsx(r.AppField,{name:"email",children:n=>e.jsx(n.TextField,{label:"Email",type:"email",placeholder:"you@socialdash.io"})}),e.jsx(r.AppField,{name:"password",children:n=>e.jsx(n.TextField,{label:"Password",type:"password",placeholder:"Min 8 characters"})}),e.jsx(r.SubmitButton,{children:"Sign in"})]})})})}const y={render:()=>e.jsx(ue,{}),play:async({canvasElement:r})=>{const a=B(r).getByRole("button",{name:/sign in/i});await N.click(a)}},me=P({name:i().min(2,"Name must be at least 2 characters"),email:M("Enter a valid email"),bio:i().max(160,"Bio max 160 characters").optional()});function de(){const r=g({defaultValues:{name:"Alex Johnson",email:"alex@socialdash.io",bio:"Social media manager, 5 years experience with B2C brands."},validators:{onChange:me},onSubmit:async({value:n})=>{await new Promise(a=>setTimeout(a,800)),console.info("Saved:",n)}});return e.jsx("div",{className:"max-w-sm",children:e.jsx(r.AppForm,{children:e.jsxs(r.Form,{children:[e.jsx(r.AppField,{name:"name",children:n=>e.jsx(n.TextField,{label:"Display name"})}),e.jsx(r.AppField,{name:"email",children:n=>e.jsx(n.TextField,{label:"Email",type:"email"})}),e.jsx(r.AppField,{name:"bio",children:n=>e.jsx(n.TextField,{label:"Bio",description:"Max 160 characters"})}),e.jsx(r.SubmitButton,{children:"Save changes"})]})})})}const b={render:()=>e.jsx(de,{})};function ce(){const r=g({defaultValues:{email:"not-an-email",password:"123"},validators:{onChange:U},onSubmit:async({value:n})=>{console.info("Submitted:",n)}});return e.jsxs("div",{className:"max-w-sm space-y-4",children:[e.jsx(r.AppForm,{children:e.jsxs(r.Form,{children:[e.jsx(r.AppField,{name:"email",children:n=>e.jsx(n.TextField,{label:"Email",type:"email"})}),e.jsx(r.AppField,{name:"password",children:n=>e.jsx(n.TextField,{label:"Password",type:"password"})}),e.jsx(r.SubmitButton,{children:"Submit"})]})}),e.jsx("p",{className:"text-xs text-muted-foreground px-2",children:"Form pre-seeded with invalid values. Type in either field to trigger validation."})]})}const x={render:()=>e.jsx(ce,{}),play:async({canvasElement:r})=>{const a=B(r).getByLabelText(/email/i);await N.clear(a),await N.type(a,"still-invalid")}};function pe(){const r=g({defaultValues:{image:void 0,name:"",category:"",price:void 0,description:""},validators:{onSubmit:O},onSubmit:async({value:o})=>{await new Promise(l=>setTimeout(l,800)),console.info("Product submitted:",o)}}),{FormTextField:n,FormSelectField:a,FormTextareaField:u,FormFileUploadField:m}=S();return e.jsx("div",{className:"flex flex-1 space-y-4 px-2 pt-1 pb-2 md:px-3 md:pt-2",children:e.jsx(r.AppForm,{children:e.jsxs(r.Form,{className:"mx-auto w-full max-w-none flex-col gap-0 p-0",children:[e.jsxs("div",{className:"space-y-8 px-5 py-4",children:[e.jsx(m,{name:"image",label:"Product Image",description:"Upload a product image",maxSize:5*1024*1024,maxFiles:4}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsx(n,{name:"name",label:"Product Name",required:!0,placeholder:"Enter product name"}),e.jsx(a,{name:"category",label:"Category",required:!0,options:w,placeholder:"Select category"}),e.jsx(n,{name:"price",label:"Price",required:!0,type:"number",min:0,step:.01,placeholder:"Enter price"})]}),e.jsx(u,{name:"description",label:"Description",required:!0,placeholder:"Enter product description",maxLength:500,rows:4})]}),e.jsx("div",{className:"flex justify-end gap-2 pt-4 border-t",children:e.jsx(r.SubmitButton,{children:"Add Product"})})]})})})}const v={render:()=>e.jsx(pe,{})},_e={image:void 0,name:"Sữa đêm ngũ cốc Fruto Nyanya (200ml)",category:"842",price:36e3,description:"Tên sản phẩm: Combo 2 Sữa đêm ngũ cốc Fruto Nyanya (200ml). Thương hiệu: Fruto Nyanya. Xuất xứ thương hiệu: Nga. Dung tích: 200ml. Nhà sản xuất: AO Progess. Độ tuổi phù hợp: Trẻ từ 6 tháng tuổi."};function ge(){const r=g({defaultValues:_e,validators:{onSubmit:O},onSubmit:async({value:o})=>{await new Promise(l=>setTimeout(l,800)),console.info("Product submitted:",o)}}),{FormTextField:n,FormSelectField:a,FormTextareaField:u,FormFileUploadField:m}=S();return e.jsx("div",{className:"flex flex-1 space-y-4 px-2 pt-1 pb-2 md:px-3 md:pt-2",children:e.jsx(r.AppForm,{children:e.jsxs(r.Form,{className:"mx-auto w-full max-w-none flex-col gap-0 p-0",children:[e.jsxs("div",{className:"space-y-8 px-5 py-4",children:[e.jsx(m,{name:"image",label:"Product Image",description:"Upload a product image",maxSize:5*1024*1024,maxFiles:4}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsx(n,{name:"name",label:"Product Name",required:!0,placeholder:"Enter product name"}),e.jsx(a,{name:"category",label:"Category",required:!0,options:w,placeholder:"Select category"}),e.jsx(n,{name:"price",label:"Price",required:!0,type:"number",min:0,step:.01,placeholder:"Enter price"})]}),e.jsx(u,{name:"description",label:"Description",required:!0,placeholder:"Enter product description",maxLength:500,rows:4})]}),e.jsx("div",{className:"flex justify-end gap-2 pt-4 border-t",children:e.jsx(r.SubmitButton,{children:"Add Product"})})]})})})}const h={render:()=>e.jsx(ge,{})},z=new X({defaultOptions:{queries:{staleTime:60*1e3},mutations:{retry:!1}}}),f={render:()=>e.jsx(L,{client:z,children:e.jsx(E,{initialData:null,pageTitle:"Add Product"})})},ye={product_search_staging_id:26477,p_id:102658,ecom_product_id:52563,ecom_product_name:"Sữa đêm ngũ cốc Fruto Nyanya (200ml)",ecom_product_name_unaccent:"Sua dem ngu coc Fruto Nyanya (200ml)",erp_product_id:"4404000000001",erp_product_name:"Sữa đêm ngũ cốc Fruto Nyanya (200ml)",erp_category_name:"Sữa đêm Fruto",erp_category_id:4404,com_category_id:842,com_category_name:"Sữa nước",com_category_name_unaccent:"Sua nuoc",erp_manufacturer_id:0,erp_manufacturer_name:"",com_manufacturer_id:954,com_manufacturer_name:"Fruto Nyanya",com_manufacturer_name_unaccent:"Fruto Nyanya",com_manufacturer_image_square_url:"https://cdn1.concung.com/img/m/2022/09/954_logo_vuong1662634505.png",com_manufacturer_image_logo_url:"https://cdn1.concung.com/img/954_logo-1642490615.png",full_link:"/sua-tuoi-cac-loai/sua-dem-ngu-coc-fruto-nyanya-200ml-52563.html",product_attributes:null,sold_quantity:134878,product_image_cover:"https://cdn1.concung.com/2021/10/52563-76453-large_mobile/sua-dem-ngu-coc-fruto-nyanya-200ml.jpg",product_image_trans:"https://cdn1.concung.com/2021/10/52563-76453-large_mobile/sua-dem-ngu-coc-fruto-nyanya-200ml.png",rating_star:5,top_text:"",middle_text:"",bottom_text:"",center_text:"",price:36e3,discount_amount:0,discount_percent:0,sale_price_vat:36e3,is_combo:!1,is_have_discount:!1,is_have_gift:!1,is_order_discount:!1,order_discount_from:0,is_livestream:!1,is_video_shopping:!1,is_super_fast_delivery:!1,is_free_ship:!1,is_deleted:!1,created_date:"2021-10-01",updated_date:"2024-01-15",sync_status_id:1,is_processing:!1,stock_quantity:1e3,is_outstock:!1,is_online:!0,is_selling:!0,popularity:95,is_reference:!1,keywords:["sữa đêm","Fruto Nyanya","ngũ cốc"],promotion_name:"",promotion_begin_date:"1999-01-01 00:00:00.000000",promotion_end_date:"1999-01-01 00:00:00.000000",id:"52563",description:"Tên sản phẩm: Combo 2 Sữa đêm ngũ cốc Fruto Nyanya (200ml). Thương hiệu: Fruto Nyanya. Xuất xứ thương hiệu: Nga. Dung tích: 200ml. Nhà sản xuất: AO Progess. Độ tuổi phù hợp: Trẻ từ 6 tháng tuổi.",combo_id:"",combo_name:"",combo_image_icon_url:"",combo_image_large_url:"",type_combo:0,is_promotion_vip:!1,promotion_id:0,gift_list:null,shipping_object:[],created_user:null,updated_user:null,sync_status_date:"",checksum:"",created_unix_time:0,updated_unix_time:0,sync_note:null,tranform_noted:"",embedding_reason_of_failure:"",image_embedding_sync_status_id:0,image_embedding_sync_status_date:"",image_frame:"",frame_expired:"",label_type:0,membership_type_id:0,quantity_per_pack:0,digital_type_id:0,event_uid:null,link_video:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",text_online:"",description_content:"",date_start_quick_sale:"",date_end_quick_sale:"",is_only_online:!1,sync_not_sale_status_id:0,sync_not_sale_status_date:"",semantic_sync_status_id:0,semantic_sync_status_date:"",sync_public_state:0,sync_internal_state:0,sync_semantic_state:0,sync_image_state:0,is_syncing_public:!1,is_syncing_internal:!1,is_syncing_semantic:!1,is_syncing_image:!1,sold_quantity_ranking:0,product_score:0,gp_ranking:0,popularity_ranking:0,promo_ranking:0,gm_ranking:0,deleted_typesense_ids:[],sync_stock_typesense_ids:[]},k={render:()=>e.jsx(L,{client:z,children:e.jsx(E,{initialData:ye,pageTitle:"Edit Product"})})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <LoginFormExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole('button', {
      name: /sign in/i
    });
    await userEvent.click(submitBtn);
  }
}`,...y.parameters?.docs?.source},description:{story:"Basic form with Zod validation — submit with empty fields to see errors.",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ProfileFormExample />
}`,...b.parameters?.docs?.source},description:{story:"Profile edit form pre-populated with data.",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ValidationExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText(/email/i);
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'still-invalid');
  }
}`,...x.parameters?.docs?.source},description:{story:"Form with invalid pre-seeded values. Type in a field to trigger inline validation errors.",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ProductFormExample />
}`,...v.parameters?.docs?.source},description:{story:"Product creation form — file upload, name, category, price, description.",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ProductFormFilledExample />
}`,...h.parameters?.docs?.source},description:{story:"Product creation form pre-filled with all data — brand, category, price, description, images.",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <QueryClientProvider client={queryClient}>
      <ProductFormLarge initialData={null} pageTitle="Add Product" />
    </QueryClientProvider>
}`,...f.parameters?.docs?.source},description:{story:"Product creation form with two-column layout — brand, category, gender, price, rich text description, SEO, visibility, and image upload. All fields empty.",...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <QueryClientProvider client={queryClient}>
      <ProductFormLarge initialData={sampleProduct} pageTitle="Edit Product" />
    </QueryClientProvider>
}`,...k.parameters?.docs?.source},description:{story:"Product creation form with two-column layout pre-filled with data.",...k.parameters?.docs?.description}}};const hr=["Default","WithPrefilledData","ValidationErrors","ProductForm","ProductFormFilled","ProductFormLargeLayout","ProductFormLargeLayoutFilled"];export{y as Default,v as ProductForm,h as ProductFormFilled,f as ProductFormLargeLayout,k as ProductFormLargeLayoutFilled,x as ValidationErrors,b as WithPrefilledData,hr as __namedExportsOrder,vr as default};
