---
name: feature-to-docs
description: >
  Use when updating module-level documentation from change requests.
  Takes a user prompt describing what changed → scans all related CR artifacts + codebase → updates
  00_prd.md, 01_design.md, 02_technical.md, and appends to 03_changelog.md.
  Triggers: "update docs", "cập nhật docs", "sync docs", "viết docs cho feature X", "/feature_to_docs".
---

# Feature → Docs

Đóng vai **Technical Writer**. Nhận 1 prompt từ user → scan toàn bộ artifacts liên quan → cập nhật 4 file docs của module.

**Docs là living documents** — mỗi lần invoke là 1 lần update, không phải tạo mới.

> **Nguyên tắc cốt lõi:**
> 1. Scan hết thông tin liên quan TRƯỚC khi chỉnh sửa bất kỳ file nào.
> 2. Docs phản ánh THỰC TẾ — đọc code nếu cần, không chỉ dựa CR.
> 3. Changelog ghi lại MỌI thay đổi — là audit trail của docs.

---

## ⚠️ Bước bắt buộc trước khi viết bất kỳ dòng nào

> **SKILL.md = overview + workflow. Chi tiết kỹ thuật đầy đủ chỉ có trong resource files.**
> **Đọc resource tương ứng TRƯỚC khi thực hiện từng bước:**

| Bước | Task | Đọc resource này TRƯỚC |
|------|------|------------------------|
| 1 | Update `00_prd.md` | `resources/prd_guide.md` |
| 2 | Update `01_design.md` | `resources/design_guide.md` |
| 3 | Update `02_technical.md` | `resources/technical_guide.md` |
| 4 | Append `03_changelog.md` | `resources/changelog_guide.md` |

---

## Inputs

| Input | Mô tả |
|-------|-------|
| **User prompt** | Mô tả feature / CR cần document (VD: "update docs cho setting modal feature") |
| **Module docs folder** | Path đến folder `00_docs/` của module (VD: `_change_request/08_products/00_docs/`) |

---

## Output Files (fixed per module)

```
_change_request/{module}/00_docs/
  00_prd.md          ← Product requirements (living doc)
  01_design.md       ← UX/Design specification (living doc)
  02_technical.md    ← Technical architecture (living doc)
  03_changelog.md    ← Append-only audit trail
```

---

## Workflow 4 bước bắt buộc

> **Trước bước 1:** Đọc 4 file docs hiện tại + xác định feature folder từ user prompt + scan `00_change_request.md`, `01_lofi_ux.html`, và code thực tế liên quan.

### Bước 1 — Update `00_prd.md`

**Đọc `resources/prd_guide.md` trước khi thực hiện.**

- Thêm / cập nhật User Stories từ feature mới
- Thêm / cập nhật Acceptance Criteria
- Cập nhật Out of Scope nếu thay đổi
- **Không xóa** content cũ — merge và update

### Bước 2 — Update `01_design.md`

**Đọc `resources/design_guide.md` trước khi thực hiện.**

- Thêm / cập nhật User Flows
- Thêm / cập nhật UI States (loading, empty, error, success)
- Thêm / cập nhật Component Boundaries mới
- **Không xóa** content cũ về features khác

### Bước 3 — Update `02_technical.md`

**Đọc `resources/technical_guide.md` trước khi thực hiện.**

- Thêm / cập nhật Data Model (interfaces, types)
- Thêm / cập nhật Component File Map
- Thêm / cập nhật API Specifications
- Thêm / cập nhật State Management patterns
- **Không xóa** content cũ về features khác

### Bước 4 — Append `03_changelog.md`

**Đọc `resources/changelog_guide.md` trước khi thực hiện.**

Append entry mới vào đầu file (newest first):

```markdown
## [Date] — [Feature Name]

### [vX.Y] — [Tóm tắt thay đổi]

**CR Source:** `[path/to/00_change_request.md]`

**Changes:**
- `00_prd.md`: [Mô tả cụ thể — section nào, thêm/sửa gì]
- `01_design.md`: [Mô tả]
- `02_technical.md`: [Mô tả]

**Gaps phát hiện:**
- [Gap nếu có, hoặc "None detected"]
```

---

## Checklist trước khi kết thúc

```
[ ] Đã đọc cả 4 file docs hiện tại TRƯỚC khi sửa
[ ] Đã scan: 00_change_request.md + 01_lofi_ux.html + code files liên quan
[ ] 00_prd.md: thêm/update đúng sections, không xóa content features khác
[ ] 01_design.md: cover đủ 4 UI states cho mọi component mới
[ ] 02_technical.md: file paths verified, types copied từ code
[ ] 03_changelog.md: entry mới append ở đầu file với đúng format
[ ] Không có placeholder "[điền vào]" còn sót lại
[ ] Report cho user: những gì đã update + gap phát hiện
```

---

## Report sau khi hoàn thành

```
### Feature: "[tên feature từ user prompt]"
**CR Source:** [path]

**Updated:**
- `00_prd.md` — [N] user stories, [N] AC added/updated
- `01_design.md` — [N] UI states, [N] components documented
- `02_technical.md` — [N] APIs, [N] components, [N] types added/updated
- `03_changelog.md` — entry appended

**Gaps phát hiện:**
- [Gap hoặc "None"]
```
