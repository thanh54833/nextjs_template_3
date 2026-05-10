# Product Feature Analysis & Filter UI Design Recommendation

## 1. Current Data Model Analysis

### 1.1 Real Product Data Structure (from `product_info.json`)

The actual product data contains **70+ fields**. Key filterable fields:

| Field | Type | Description | Filter Type |
|-------|------|-------------|-------------|
| `ecom_product_name` | string | Product display name | Text search |
| `erp_category_name` | string | ERP category (e.g., "Sữa đêm Fruto") | Single/Multi select |
| `com_category_name` | string | Commerce category (e.g., "Sữa nước") | Single/Multi select |
| `com_manufacturer_name` | string | Brand (e.g., "Fruto Nyanya") | Single/Multi select |
| `price` | number | Original price | Range slider |
| `sale_price_vat` | number | Final price after discount | Range slider |
| `discount_percent` | number | Discount percentage | Range |
| `rating_star` | number | 1-5 star rating | Range |
| `sold_quantity` | number | Total sold | Range/Sort |
| `is_combo` | boolean | Is combo product | Boolean |
| `is_have_discount` | boolean | Has active discount | Boolean |
| `is_have_gift` | boolean | Has gift | Boolean |
| `is_promotion_vip` | boolean | VIP promotion | Boolean |
| `is_livestream` | boolean | Livestream enabled | Boolean |
| `is_video_shopping` | boolean | Video shopping | Boolean |
| `is_super_fast_delivery` | boolean | Super fast delivery | Boolean |
| `is_free_ship` | boolean | Free shipping | Boolean |
| `is_online` | boolean | Online status | Boolean |
| `is_selling` | boolean | Is currently selling | Boolean |
| `is_outstock` | boolean | Out of stock | Boolean |
| `product_attributes` | array | Dynamic filter groups (Loại sữa, Phân loại, Size...) | Dynamic multi-select |
| `stock_quantity` | number | Current stock | Range |
| `product_score` | number | Product score | Range |
| `promotion_name` | string | Current promotion name | Text |
| `created_date` | date | Creation date | Date range |
| `updated_date` | date | Last update | Date range |

### 1.2 Product Attributes Structure (Dynamic Filters)

The `product_attributes` field contains filter groups:

```json
{
  "filter_group_name": "Loại sữa",
  "id_filter_group_name": 8,
  "filter_group_attribute": [
    {"name_filter": "Sữa bột pha sẵn", "id_filter_group": 61},
    {"name_filter": "Sữa uống liền", "id_filter_group": 38}
  ]
}
```

This means products have **dynamic filterable attributes** that vary by category.

---

## 2. Current Implementation Analysis

### 2.1 Current Filter UI (`product-filters.tsx`)

The current implementation uses **mock data** that doesn't match the real data model:

```typescript
// ❌ PROBLEM: Mock data doesn't match real product data
const TYPE_OPTIONS = ['Clothing', 'Shoes', 'Bags', 'Accessories', 'Jewelry'];

const BRAND_OPTIONS = [
  { name: 'Gucci', count: 12 },  // Mock brands
  { name: 'Dolce & Gabbana', count: 8 },
  // ...
];
```

**Current filter state (nuqs):**
- `types` - Array of strings (not used in API)
- `brands` - Array of strings (not used in API)
- `colors` - Array of strings (not used in API)
- `priceRange` - Local state (not persisted to URL)

### 2.2 Current API Types (`types.ts`)

```typescript
// ❌ PROBLEM: Filter fields don't match real data
export type ProductFilters = {
  page?: number;
  limit?: number;
  categories?: string;  // Single category only
  search?: string;       // Limited search
  sort?: string;
};
```

**Missing real filters:**
- No manufacturer/brand filter
- No price range filter (min/max)
- No rating filter
- No stock status filter
- No attribute filters
- No boolean feature filters (is_free_ship, is_combo, etc.)

### 2.3 Data Flow Issues

```
product-grid.tsx → ProductFilters (sidebar)
                    ↓
              URL params (types, brands, colors)
                    ↓
              NOT USED BY API ❌  ← Filters don't affect API calls

product-grid.tsx → useSuspenseQuery
                    ↓
              filters object (page, limit, search, categories, sort)
                    ↓
              API call → service.ts → mock data ❌
```

The current filters in `ProductFilters` component are **NOT connected to the API query**. They only update URL params but the actual API call doesn't use them.

---

## 3. Recommended Filter UI Design

### 3.1 Filter Categories

Based on the real data model, recommend these filter groups:

#### A. **Text Search**
- Product name search with debounce
- Promotion name search

#### B. **Category Filters**
- ERP Category (hierarchical if possible)
- Commerce Category
- Product Attributes (dynamic based on selected category)

#### C. **Brand/Manufacturer Filter**
- Single/Multi-select manufacturer
- Show product count per brand
- Search within brands

#### D. **Price Filters**
- Price range slider (min/max)
- Has discount toggle
- Discount percentage range

#### E. **Status Filters (Boolean Toggles)**
- Is Selling (Active/Non-Active)
- In Stock / Out of Stock
- Free Shipping
- Has Discount
- Is Combo
- Super Fast Delivery

#### F. **Rating Filter**
- Star rating range (1-5)

#### G. **Sort Options**
- Newest/Oldest (created_date)
- Best Selling (sold_quantity)
- Price Low-High / High-Low
- Highest Rated (rating_star)
- Most Stocked (stock_quantity)

### 3.2 Recommended Filter UI Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Filter Panel (Sidebar)          │  Product Grid              │
│  ─────────────────              │  ────────────────────────── │
│                                 │                            │
│  🔍 Search                      │  [All] [Active] [Non-Act]   │
│  ┌─────────────────────────┐   │  ┌────────────────────┐    │
│  │ Search product...        │   │  │ 🔍 Search...  [F] │    │
│  └─────────────────────────┘   │  └────────────────────┘    │
│                                 │                            │
│  📁 Category                    │  ┌────┐ ┌────┐ ┌────┐     │
│  ├ ☑ Sữa nước                   │  │    │ │    │ │    │     │
│  ├ ☐ Vitamin & Sức khỏe          │  │    │ │    │ │    │     │
│  └ ☐ Quần Áo Trẻ Em              │  │    │ │    │ │    │     │
│                                 │  └────┘ └────┘ └────┘     │
│  🏷️ Brand                        │                            │
│  ├ ☑ Fruto Nyanya (12)          │  Showing 1-8 of 1,247      │
│  ├ ☐ Gumazing (8)               │                            │
│  └ ☐ Animo (5)                   │  [<] [1] [2] [3] [...] [>]│
│                                 │                            │
│  💰 Price                        │                            │
│  ┌─────────────────────────┐   │                            │
│  │ From: ₫0    To: ₫500,000 │   │                            │
│  │ [═══════●──────────]    │   │                            │
│  └─────────────────────────┘   │                            │
│  ☑ Has discount               │                            │
│                                 │                            │
│  ⭐ Rating                      │                            │
│  [☆][☆][☆][☆][☆] to [★★★★★]   │                            │
│                                 │                            │
│  🚚 Shipping                   │                            │
│  ☑ Free Shipping              │                            │
│  ☑ Super Fast Delivery        │                            │
│                                 │                            │
│  📦 Stock                       │                            │
│  ○ All  ○ In Stock  ○ Out      │                            │
│                                 │                            │
│  [Clear All]                   │                            │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Mobile Filter Sheet

For mobile, a bottom sheet with collapsible sections:

```
┌─────────────────────────────────┐
│  Filters              [Clear] ✕ │
├─────────────────────────────────┤
│  ▼ Category (3 selected)        │
│  ▼ Brand (2 selected)           │
│  ▼ Price Range                  │
│  ▼ Rating                       │
│  ▼ Shipping                    │
│  ▼ Stock Status                 │
├─────────────────────────────────┤
│        [Apply Filters]           │
│         (247 results)           │
└─────────────────────────────────┘
```

---

## 4. Technical Implementation Recommendation

### 4.1 Updated ProductFilters Type

```typescript
// src/features/products/api/types.ts

export type ProductFilters = {
  page?: number;
  limit?: number;

  // Text search
  search?: string;
  promotionSearch?: string;

  // Category filters
  erpCategories?: string;      // Comma-separated ERP category IDs
  comCategories?: string;      // Comma-separated commerce category IDs

  // Brand filter
  manufacturers?: string;      // Comma-separated manufacturer IDs

  // Price filters
  priceMin?: number;
  priceMax?: number;
  hasDiscount?: boolean;
  discountMin?: number;
  discountMax?: number;

  // Rating filter
  ratingMin?: number;
  ratingMax?: number;

  // Boolean feature filters
  isFreeShip?: boolean;
  isSuperFastDelivery?: boolean;
  isCombo?: boolean;
  isLivestream?: boolean;
  isVideoShopping?: boolean;

  // Stock filter
  stockStatus?: 'all' | 'in_stock' | 'out_stock';

  // Selling status
  isSelling?: boolean;

  // Attribute filters (dynamic)
  attributes?: Record<string, string[]>; // { "Loại sữa": ["61", "38"] }

  // Sort
  sortBy?: 'created_date' | 'sold_quantity' | 'price' | 'rating_star' | 'stock_quantity';
  sortOrder?: 'asc' | 'desc';
};
```

### 4.2 Filter UI Component Structure

```
ProductFilters/
├── index.tsx              # Main filter panel
├── FilterSection.tsx       # Collapsible section wrapper
├── SearchFilter.tsx        # Text search input
├── CategoryFilter.tsx      # Category tree select
├── BrandFilter.tsx         # Brand multi-select with search
├── PriceRangeFilter.tsx    # Min/Max price inputs + slider
├── RatingFilter.tsx        # Star rating range
├── BooleanFilter.tsx      # Toggle filters (free ship, etc.)
├── StockStatusFilter.tsx   # Radio: All/In Stock/Out
├── AttributeFilter.tsx    # Dynamic attribute filters
└── SortFilter.tsx         # Sort dropdown
```

### 4.3 Active Filters Chip Bar

Show active filters as dismissible chips above the product grid:

```
┌─────────────────────────────────────────────────────────────┐
│  Active Filters:                                           │
│  ┌──────────┐ ┌──────────────┐ ┌─────────────┐              │
│  │ Sữa nước ✕│ │ Fruto Nyanya ✕│ │ ₫10k-50k ✕ │  [Clear all]│
│  └──────────┘ └──────────────┘ └─────────────┘              │
└─────────────────────────────────────────────────────────────┘
```

### 4.4 URL State Schema

Using nuqs for deep-linking:

```
/dashboard/product?page=1&perPage=12&search=sữa&comCategories=842&manufacturers=954&priceMin=10000&priceMax=50000&hasDiscount=true&isFreeShip=true&sortBy=sold_quantity&sortOrder=desc
```

---

## 5. Implementation Priority

### Phase 1: Core Filters (MVP)
1. Text search
2. Category filter (com_category_name)
3. Price range filter
4. Has discount toggle
5. Sort options

### Phase 2: Advanced Filters
1. Brand/manufacturer filter
2. Rating filter
3. Stock status filter
4. Is selling filter

### Phase 3: Feature Toggles
1. Free shipping filter
2. Super fast delivery filter
3. Combo filter
4. Livestream filter

### Phase 4: Dynamic Attributes
1. Parse product_attributes from data
2. Build dynamic filter groups based on selected category
3. Attribute-based filtering

---

## 6. Summary

| Aspect | Current State | Recommended State |
|--------|---------------|-------------------|
| Filter Data | Mock data (Clothing, Shoes) | Real product categories, brands, attributes |
| Price Filter | Hardcoded $0-500 | Dynamic ₫ range based on actual product prices |
| Category Filter | Not implemented | erp_category + com_category + dynamic attributes |
| Brand Filter | Not implemented | com_manufacturer_name with counts |
| Boolean Filters | Not implemented | is_free_ship, is_combo, is_selling, etc. |
| URL State | Partial (page, name, sort) | Full filter state in URL for shareability |
| Active Filter Display | Badge count only | Dismissible chips showing active filters |
| Mobile UX | Sheet (basic) | Bottom sheet with apply button + result count |

---

## 7. Next Steps

1. **Update `types.ts`** - Add all filter types matching real data model
2. **Update `service.ts`** - Implement real filtering logic with actual product data
3. **Redesign `product-filters.tsx`** - Use real filter components
4. **Add filter chip bar** - Show active filters above grid
5. **Update `product-options.ts`** - Add real category/brand options
6. **Implement attribute filters** - Dynamic filter groups from product_attributes
