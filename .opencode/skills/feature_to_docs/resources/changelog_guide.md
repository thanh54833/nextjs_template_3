# Changelog Guide — 03_changelog.md

Hướng dẫn append entry vào `03_changelog.md`. File này là **append-only audit trail** — không sửa entries cũ.

---

## Nguyên tắc cốt lõi

1. **Append-only** — Không chỉnh sửa entries cũ. Mỗi update = 1 entry mới ở đầu file.
2. **Newest first** — Entry mới nhất luôn ở đầu file.
3. **Granular changes** — Ghi cụ thể section nào, thêm gì, sửa gì (không phải "updated prd.md").
4. **CR traceability** — Mỗi entry phải link tới CR source.

---

## Format entry chuẩn

```markdown
## [YYYY-MM-DD] — [Feature Name]

### v[X.Y] — [Tóm tắt thay đổi 1 dòng]

**CR Source:** `_change_request/[module]/[status]/[feature]/00_change_request.md`

**Changes:**
- `00_prd.md` § [Section name]: [Mô tả cụ thể — thêm N user stories / cập nhật AC / thêm Out of Scope item]
- `01_design.md` § [Section name]: [Mô tả — thêm component X, update UI states loading/error]
- `02_technical.md` § [Section name]: [Mô tả — thêm interface Y, thêm API POST /api/v1/..., update File Map]

**Gaps phát hiện:**
- ⚠️ [Gap mô tả — VD: "CR mô tả X nhưng code chưa implement"]
- ❌ [Không tìm thấy implementation cho Y]
- ✅ None detected

---
```

### Separator `---` bắt buộc

Mỗi entry kết thúc bằng `---` để phân cách với entry tiếp theo.

---

## Version numbering

| Loại thay đổi | Version bump | Ví dụ |
|---------------|-------------|-------|
| Feature mới hoàn toàn | Minor: `1.0 → 1.1` | Thêm Setting Modal feature |
| Update/fix trong feature đã có | Patch: `1.1 → 1.1.1` | Fix typo, clarify AC |
| Breaking change (schema, API) | Major: `1.x → 2.0` | Rename field, change API shape |

Version ở đây là version của **docs**, không phải version của code.

---

## Quy tắc mô tả changes

### Quá vague (không chấp nhận):
```
- `00_prd.md`: updated
- `02_technical.md`: added new section
```

### Đúng level:
```
- `00_prd.md` § User Stories: thêm US-12 đến US-19 (Setting Modal — 8 stories)
- `00_prd.md` § Acceptance Criteria: thêm 13 AC cho CatalogSearchFieldsDialog
- `01_design.md` § UI States: thêm CatalogSearchFieldsModal (4 states)
- `01_design.md` § Component Boundaries: thêm CatalogSearchFieldsDialog + CatalogProductCard
- `02_technical.md` § Data Model: thêm interface CatalogColumnConfig (5 fields)
- `02_technical.md` § File Map: 2 files tạo mới, 4 files sửa
- `02_technical.md` § API: thêm POST /api/v1/catalog/search-settings
```

---

## Cách append vào đầu file

Đọc file hiện tại trước, sau đó prepend entry mới:

```
[Entry mới]

---

[Entry cũ 1]

---

[Entry cũ 2]
```

**Giữ nguyên** tất cả entries cũ. **Không merge** entries.

---

## Template entry đầy đủ

```markdown
## [YYYY-MM-DD] — [Feature Name]

### v[X.Y] — [Summary]

**CR Source:** `_change_request/[module]/[drafting|in_progress]/[feature]/00_change_request.md`
**Status:** [Draft → Ready for implementation / Implemented / Partially implemented]

**Changes:**
- `00_prd.md` § [Section]: [Chi tiết]
- `01_design.md` § [Section]: [Chi tiết]  
- `02_technical.md` § [Section]: [Chi tiết]

**Gaps phát hiện:**
- [Gap hoặc "✅ None detected"]

---
```

---

## Checklist `03_changelog.md`

```
[ ] Entry mới ở đầu file (không append ở cuối)
[ ] Date format: YYYY-MM-DD (dùng ngày thực tế hôm nay)
[ ] Version bump đúng loại (major/minor/patch)
[ ] CR Source path chính xác và tồn tại
[ ] Mỗi file được update có ít nhất 1 dòng changes cụ thể
[ ] Gaps section có nội dung (✅ None hoặc ⚠️/❌ với mô tả)
[ ] Entry kết thúc bằng dấu `---`
[ ] Entries cũ không bị sửa hoặc xóa
```
