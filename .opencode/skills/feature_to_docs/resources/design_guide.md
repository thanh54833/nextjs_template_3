# Design Guide — design.md

Hướng dẫn viết `design.md` từ wireframe + CR. File này dành cho **UI/UX Designer và Frontend Developer** — mô tả layout, states, interactions.

---

## Nguyên tắc cốt lõi

1. **Update, không replace** — `01_design.md` là living doc. Thêm components/flows mới, không xóa phần cũ.
2. **Wireframe là nguồn sự thật** — `01_lofi_ux.html` quyết định layout. `design.md` giải thích và mô tả wireframe đó.
3. **4 states bắt buộc** — Mọi UI đều phải có: Loading, Empty, Error, Success state.
4. **Behavior > Pixel** — Mô tả behavior (khi nào show/hide, animation nào) không phải pixel values hay màu sắc.
5. **Component-centric** — Tổ chức theo component boundaries, không theo page sections.

---

## Nguồn dữ liệu

| Section trong `design.md` | Lấy từ đâu |
|---------------------------|------------|
| Design Assets | Links từ CR hoặc ghi "Xem `01_lofi_ux.html`" |
| User Flow | States trong `01_lofi_ux.html` + CR Section 4 (Modal Layout) |
| UI States | CR Section 5 (Behavior Rules) + `01_lofi_ux.html` |
| Component Boundaries | `data-comp` attributes trong `01_lofi_ux.html` |
| Responsive | CR nếu có, hoặc project-level convention |
| Interaction Patterns | CR Section 5 (Button behaviors, Save/Cancel) |

---

## Template `design.md`

```markdown
# Thiết kế: [Tên Feature]

**Phiên bản:** 1.0
**Ngày tạo:** [Ngày tháng]
**Trạng thái:** Draft / Ready / Implemented

---

## 1. Tài nguyên thiết kế

| Tài nguyên | Link / Path |
|------------|-------------|
| Lo-Fi Wireframe | [`01_lofi_ux.html`](../02_drafting/[feature]/01_lofi_ux.html) |
| Figma / Adobe XD | [Chèn link nếu có, hoặc "N/A"] |
| Prototype | [Chèn link nếu có] |

---

## 2. Luồng người dùng (User Flow)

> Mô tả chuỗi actions user thực hiện từ điểm bắt đầu đến kết thúc.

```
[Trigger] → [State 1] → [Action] → [State 2] → [Final State]
```

### 2.1 Luồng chính (Happy Path)

1. User [action] tại [entry point]
2. [Component A] hiển thị với [trạng thái default]
3. User [action tiếp theo]
4. [Kết quả — visible change]
5. [Final state]

### 2.2 Luồng lỗi

1. User [action]
2. [Component A] gọi API → nhận error
3. Hiển thị [error state] — user có thể [recover action]

---

## 3. Các trạng thái UI (UI States)

> **Bắt buộc:** Mọi component phải cover đủ 4 states. Ghi "N/A" với lý do nếu state nào không áp dụng.

### [ComponentA]

#### Loading State
- **Khi nào:** [Điều kiện trigger loading]
- **Hiển thị:** [Skeleton / Spinner / Disabled button — mô tả behavior, không phải style]
- **Duration:** [Cho đến khi / Timeout sau X ms]

#### Empty State  
- **Khi nào:** [Điều kiện trigger empty — VD: "Danh sách chưa có item nào"]
- **Hiển thị:** [Message / Icon / CTA button]
- **User có thể làm gì:** [Action để thoát khỏi empty state]

#### Error State
- **Khi nào:** [Loại lỗi — network error / validation error / server error]
- **Hiển thị:** [Toast / Inline message / Banner]
- **User có thể làm gì:** [Retry / Close / Fix input]

#### Success State
- **Khi nào:** [Điều kiện — VD: "Sau khi save API trả về 200"]
- **Hiển thị:** [Toast message / Redirect / Visual feedback]
- **Transition:** [Đóng modal / Navigate / Reset form]

---

## 4. Component Boundaries

> Tổ chức theo `data-comp` boundaries trong wireframe.

### [ComponentA]

**Trigger:** [Điều gì render component này — button click / route / parent prop]

**Props:**
| Prop | Type | Mô tả |
|------|------|-------|
| `isOpen` | `boolean` | Control hiển thị |
| `onClose` | `() => void` | Callback khi đóng |
| `[propN]` | `[type]` | [Mô tả] |

**Internal states:**
- `[stateName]`: [Mô tả — khi nào được set, ảnh hưởng UI gì]

**Interactions:**
| User action | Kết quả |
|-------------|---------|
| Click [Button A] | [Behavior rõ ràng] |
| Change [Input] | [State update + UI change] |
| [Keyboard action] | [Nếu có accessibility consideration] |

---

## 5. Responsive & Platform

### Breakpoints

| Breakpoint | Behavior |
|------------|---------|
| Desktop (≥ 1024px) | [Layout description] |
| Tablet (768px – 1023px) | [Differences from desktop] |
| Mobile (< 768px) | [Mobile-specific behavior hoặc "N/A — desktop only"] |

### Platform Notes

- **Dark Mode:** [Hỗ trợ / Không hỗ trợ / Token-based (auto)]
- **Browser support:** [Nếu có special requirements]
- **Accessibility:** [Keyboard navigation / Screen reader / Focus management]

---

## 6. Interaction Patterns

> Document các patterns đặc biệt không hiển nhiên từ wireframe.

### [Pattern 1: e.g., Auto-sort on visible toggle]
- **Trigger:** [Điều kiện]
- **Behavior:** [Mô tả chi tiết]
- **Ngoại lệ:** [Edge cases]

### [Pattern 2: e.g., Optimistic vs confirmed updates]
- **Trigger:** [...]
- **Behavior:** [...]
```

---

## Quy tắc extract UI States từ CR

### Tìm Loading states

Grep CR cho pattern:
```
"Đang lưu...", "pending", "disabled=true", "isSaving", "isLoading"
```
→ Mỗi async action có loading state là 1 entry trong UI States.

### Tìm Error states

Grep CR cho pattern:
```
"toast lỗi", "error", "toast message lỗi", "modal vẫn mở"
```
→ Document loại lỗi (network / validation / server) và recovery action.

### Tìm Empty states

Grep CR cho pattern:
```
"DEFAULT_COLUMNS", "initial state", "chưa có", "empty"
```
→ Document default/empty condition và user CTA.

### Tìm Success states

Grep CR cho pattern:
```
"toast.*thành công", "đóng modal", "refetch", "success"
```
→ Document feedback + transition.

---

## Quy tắc mô tả Component Interactions

| Không | Có |
|-------|-----|
| "Button lưu dữ liệu" | "Khi click Lưu: button text đổi thành 'Đang lưu...', disabled=true → sau API success: đóng modal + toast" |
| "Checkbox kiểm soát visibility" | "Khi uncheck Visible: Searchable và Preview bị disabled+cleared trong cùng state update (atomic)" |
| "Modal có thể đóng" | "Hủy button: đóng modal mà KHÔNG gọi onColumnsChange. Draft bị discard." |

---

## Checklist `design.md`

```
[ ] Section 1: Link đến wireframe file tồn tại thực sự
[ ] Section 2: Happy path flow có đủ steps (entry → exit)
[ ] Section 2: Error flow được document
[ ] Section 3: Đủ 4 states (Loading, Empty, Error, Success) cho mỗi component
[ ] Section 3: Mỗi state có: "khi nào" + "hiển thị gì" + "user có thể làm gì"
[ ] Section 4: Component names match với data-comp trong wireframe VÀ code
[ ] Section 4: Props table đầy đủ (không cần internal props nếu không affect UX)
[ ] Section 5: Responsive coverage — ít nhất mobile/desktop
[ ] Section 6: Các interaction patterns không hiển nhiên được document
[ ] Không có pixel values, màu sắc cụ thể (thuộc wireframe/Figma)
[ ] Không có implementation details (hooks, state management, API calls)
```
