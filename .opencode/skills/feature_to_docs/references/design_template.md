# Thiết kế: [Tên Feature]

**Phiên bản:** 1.0
**Ngày tạo:** [Ngày tháng]
**Trạng thái:** Draft

---

## 1. Tài nguyên thiết kế

| Tài nguyên | Link / Path |
|------------|-------------|
| Lo-Fi Wireframe | [`01_lofi_ux.html`](../01_lofi_ux.html) |
| Figma | [Link hoặc N/A] |
| Prototype | [Link hoặc N/A] |

---

## 2. Luồng người dùng (User Flow)

### 2.1 Luồng chính

```
[Entry Point] → [State 1: Default] → [User Action] → [State 2] → [Final State]
```

1. User [action] tại [entry point — button/page/route]
2. [Component A] hiển thị với [default state]
3. User [action]
4. [Visual change visible to user]
5. [Final state + feedback]

### 2.2 Luồng lỗi

1. User [action]
2. API call thất bại → [Error state hiển thị]
3. User có thể [recover action]

---

## 3. Các trạng thái UI (UI States)

### [ComponentA]

#### Loading State
- **Khi nào:** [Trigger condition]
- **Hiển thị:** [Skeleton / Spinner / Disabled state]
- **Duration:** [Cho đến khi API response / Timeout]

#### Empty State
- **Khi nào:** [Condition — VD: "Danh sách trống"]
- **Hiển thị:** [Message / Icon / CTA]
- **Action:** [Cách user thoát khỏi empty state]

#### Error State
- **Khi nào:** [Error type — network / validation / server]
- **Hiển thị:** [Toast / Inline / Banner]
- **Recovery:** [Retry / Close / Fix input]

#### Success State
- **Khi nào:** [Trigger — VD: "API trả về 200"]
- **Hiển thị:** [Toast text + duration / Visual feedback]
- **Transition:** [Modal đóng / Navigate / Form reset]

---

## 4. Component Boundaries

### [ComponentA]

**Trigger:** [Điều gì hiển thị component này]

**Props:**
| Prop | Type | Mô tả |
|------|------|-------|
| `isOpen` | `boolean` | Control visibility |
| `onClose` | `() => void` | Close callback |

**Interactions:**
| User action | Kết quả |
|-------------|---------|
| Click [Button A] | [Behavior] |
| Change [Input] | [State update] |

---

## 5. Responsive & Platform

| Breakpoint | Behavior |
|------------|---------|
| Desktop (≥ 1024px) | [Layout] |
| Mobile (< 768px) | [Mobile behavior hoặc "N/A — desktop only"] |

**Dark Mode:** [Auto (token-based) / Không hỗ trợ / Custom]
**Accessibility:** [Keyboard nav / Focus management / Screen reader notes]

---

## 6. Interaction Patterns đặc biệt

### [Pattern Name — e.g., Auto-sort on toggle]
- **Trigger:** [Condition]
- **Behavior:** [Mô tả chi tiết]
- **Edge case:** [Nếu có]
