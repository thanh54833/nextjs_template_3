# PRD Guide — prd.md

Hướng dẫn viết `prd.md` từ feature artifacts. File này dành cho **PM/BA** đọc — không chứa code, không chứa UI pixel details.

---

## Nguyên tắc cốt lõi

1. **Update, không replace** — `00_prd.md` là living doc. Thêm content mới, không xóa features cũ.
2. **Business value trước** — Tại sao feature này tồn tại? Giải quyết vấn đề gì cho business?
3. **User-centric language** — Viết từ góc nhìn người dùng, không từ góc nhìn developer.
4. **Verifiable acceptance criteria** — Mỗi criterion phải test được bằng manual QA, không cần đọc code.
5. **No implementation details** — Không đề cập component names, file paths, SQL, API endpoints.

---

## Nguồn dữ liệu

| Section trong `prd.md` | Lấy từ đâu |
|------------------------|------------|
| Overview / Business Goals | CR Section 1 |
| Target Audience | CR Section 1 (Mục tiêu) + domain knowledge |
| User Stories | Derived từ CR Acceptance Criteria (Section 10) |
| Acceptance Criteria | CR Section 10 — viết lại bằng ngôn ngữ user-facing |
| Out of Scope | CR Section 11 |

---

## Template `prd.md`

```markdown
# Yêu cầu Sản phẩm: [Tên Feature]

**Phiên bản:** 1.0
**Ngày tạo:** [Ngày tháng]
**Trạng thái:** Draft / Ready / Implemented

---

## 1. Tổng quan

### 1.1 Mô tả
[1-2 câu: Feature này cho phép người dùng làm gì?]

### 1.2 Mục tiêu Business
- **[Mục tiêu 1]:** [Giải thích business value cụ thể]
- **[Mục tiêu 2]:** [...]

### 1.3 Chỉ số thành công (KPIs)
- [KPI 1] — VD: "Giảm thời gian cấu hình từ X phút xuống Y phút"
- [KPI 2] — VD: "Tăng tỷ lệ dùng feature search lên X%"

> Nếu chưa có KPIs, ghi: "Chưa xác định. Cần PM điền."

---

## 2. Người dùng mục tiêu

| Nhóm người dùng | Mô tả | Tần suất dùng feature |
|-----------------|-------|----------------------|
| [Nhóm 1] | [Mô tả vai trò] | [Hàng ngày / Hàng tuần / ...] |
| [Nhóm 2] | [...] | [...] |

---

## 3. User Stories

> Định dạng: *Là một [Loại người dùng], tôi muốn [Hành động], để tôi có thể [Mục đích/Lợi ích].*

### Luồng chính

**US-01:** Là một [nhóm người dùng], tôi muốn [hành động chính], để tôi có thể [lợi ích cụ thể].

**US-02:** Là một [nhóm người dùng], tôi muốn [hành động phụ], để tôi có thể [lợi ích cụ thể].

### Luồng ngoại lệ

**US-0X:** Là một [nhóm người dùng], khi [điều kiện lỗi/edge case], tôi muốn [hành động], để tôi có thể [recover/hiểu tình huống].

---

## 4. Acceptance Criteria

> Điều kiện bắt buộc để feature được coi là "Hoàn thành". Mỗi criterion phải verify được bằng manual test — không cần đọc code.

### Luồng chính (Happy Path)
- [ ] [Criterion 1 — dùng ngôn ngữ user-facing, VD: "Khi nhấn Lưu, cài đặt được áp dụng ngay lập tức"]
- [ ] [Criterion 2]

### Trạng thái hệ thống
- [ ] [Loading state criterion — VD: "Khi đang lưu, nút Lưu hiển thị 'Đang lưu...' và không thể click"]
- [ ] [Error state criterion — VD: "Khi có lỗi mạng, hiển thị thông báo lỗi rõ ràng"]
- [ ] [Success state criterion]

### Luồng ngoại lệ (Edge Cases)
- [ ] [Edge case 1 — VD: "Khi nhấn Hủy, mọi thay đổi chưa lưu bị discard"]
- [ ] [Edge case 2]

---

## 5. Ngoài phạm vi (Out of Scope)

Những gì KHÔNG thuộc feature này:

- **[Feature X]:** [Lý do không làm — VD: "Defer sang Phase 2", "Ngoài yêu cầu ban đầu"]
- **[Feature Y]:** [...]

---

## 6. Phụ thuộc & Rủi ro

### Phụ thuộc
- **[Dependency 1]:** [Feature/System/Team mà feature này phụ thuộc vào]

### Rủi ro
- **[Rủi ro 1]:** [Mô tả rủi ro] — Mitigation: [Cách giảm thiểu]
```

---

## Quy tắc viết User Stories

### Level of specificity đúng

**Quá vague (không chấp nhận):**
```
US-01: Là user, tôi muốn cấu hình display settings.
```

**Quá technical (không chấp nhận):**
```
US-01: Là user, tôi muốn component CatalogSearchFieldsModal render 43 rows với checkbox visible/searchable/preview.
```

**Đúng level:**
```
US-01: Là một nhân viên quản lý catalog, tôi muốn chọn những thông tin nào hiển thị trên card sản phẩm,
       để tôi có thể tập trung vào các field quan trọng với công việc của mình.
```

### Pattern phát hiện User Stories từ CR Acceptance Criteria

Mỗi group trong CR Acceptance Criteria → 1 User Story:

```
CR: "Modal mở khi click Settings button"
→   US: "Tôi muốn mở settings từ trang danh sách sản phẩm"

CR: "Khi Visible=false: Searchable và Preview tự động disabled"
→   US (edge): "Tôi muốn tránh cấu hình sai khi field không được hiển thị"
```

---

## Quy tắc viết Acceptance Criteria

| Không | Có |
|-------|-----|
| "Hiển thị đúng" | "Người dùng thấy [số lượng / tên cụ thể] khi [điều kiện]" |
| "Validate form" | "Nếu [điều kiện lỗi], hiển thị thông báo '[text cụ thể]'" |
| "Handle error" | "Khi [lỗi cụ thể], user thấy [thông báo] và có thể [hành động recover]" |
| "Update state" | "Sau khi lưu thành công, [thay đổi visible ngay lập tức] mà không cần refresh trang" |

---

## Quy tắc update (không phải tạo mới)

| Tình huống | Cách xử lý |
|------------|------------|
| User Stories mới | Append US-[N+1], US-[N+2] — không overwrite US cũ |
| Acceptance Criteria mới | Thêm vào đúng subsection — tạo subsection mới nếu cần |
| Out of Scope thay đổi | Cập nhật item cũ hoặc thêm item mới |
| Feature cũ cần fix | Update inline + ghi note `(Updated [date]: ...)` |
| User story trở nên out of scope | Di chuyển sang Section 5, ghi note lý do |

---

## Checklist `prd.md`

```
[ ] Section 1: Có mô tả 1-2 câu rõ ràng
[ ] Section 1: Business goals cụ thể (không phải "improve UX")
[ ] Section 2: Liệt kê đủ nhóm người dùng với vai trò rõ ràng
[ ] Section 3: Ít nhất 1 happy path story + 1 edge case story
[ ] Section 3: User stories dùng ngôn ngữ business, không phải technical
[ ] Section 4: Mỗi criterion verify được bằng manual test
[ ] Section 4: Cover đủ: happy path + loading/error/success states + edge cases
[ ] Section 5: Out of scope có lý do rõ ràng
[ ] Không có component names, file paths, SQL, API endpoints
[ ] Không có section trống — ghi "N/A với lý do" nếu không áp dụng
```
