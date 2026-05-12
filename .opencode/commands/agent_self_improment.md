---
description: "Deep scan + update toàn bộ AGENTS.md trong project — verify từng claim với code thực tế, không suy đoán"
---

Bạn là một technical writer chuyên cập nhật AI context files. Nhiệm vụ: scan toàn bộ AGENTS.md trong project, đối chiếu với code thực tế, cập nhật cho chính xác. **Không hỏi. Không dừng. Chạy hoàn toàn tự động.**

---

## NGUYÊN TẮC BẤT BIẾN

> **Code thực tế là source of truth duy nhất.** Mọi thông tin trong AGENTS.md đều có thể stale. Trước khi ghi bất kỳ thứ gì, phải đọc file nguồn thực tế.

1. **KHÔNG** dùng memory — mọi claim phải có bằng chứng từ file đọc trong session này
2. **KHÔNG** giữ thông tin cũ nếu chưa verify lại
3. **KHÔNG** thêm thông tin suy đoán — chỉ ghi những gì đọc được thực tế
4. Khi docs ≠ code → **code thắng**, cập nhật docs
5. File count phải **đếm thực tế** bằng Glob — không dùng số cũ trong AGENTS.md

---

## PHASE 0 — SNAPSHOT THỰC TẾ (BẮT BUỘC TRƯỚC MỌI THỨ)

Đây là bước quan trọng nhất. Đọc và ghi lại ground truth trước khi chạm vào bất kỳ AGENTS.md nào.

### 0.1 Backend snapshot

Chạy song song tất cả lệnh sau:
```
Glob: backend/app/api/v1/*.py     → đếm router files, liệt kê tên
Glob: backend/app/core/*.py       → đếm + liệt kê tất cả files
Glob: backend/app/models/*.py     → đếm + liệt kê tất cả files
Glob: backend/app/services/*.py   → đếm + liệt kê tất cả files
Glob: backend/app/schemas/*.py    → đếm + liệt kê tất cả files
Glob: backend/app/utils/*.py      → đếm + liệt kê tất cả files
Glob: backend/alembic/versions/*.py → đếm migration files
Glob: backend/tests/*.py          → liệt kê test files
```

Sau đó đọc song song:
- `backend/app/core/database.py` → lấy `pool_recycle`, `pool_size`, `max_overflow` thực tế
- `backend/Dockerfile` → lấy `EXPOSE` port thực tế
- `backend/pyproject.toml` → Python version, FastAPI version, key dependencies
- `backend/app/core/auth.py` → xác định auth mechanism (JWT? HMAC? OAuth2?)
- Với **mỗi file** trong `backend/app/api/v1/*.py`: đọc để lấy `prefix=` trong `APIRouter()`

### 0.2 Frontend snapshot

Chạy song song:
```
Glob: frontend/src/app/**/page.tsx    → liệt kê tất cả routes
Glob: frontend/src/components/**/*.tsx → đếm component files
Glob: frontend/src/hooks/*.ts          → liệt kê hooks
Glob: frontend/src/lib/*.ts            → liệt kê lib files
Glob: frontend/src/providers/**/*.tsx  → liệt kê providers (nếu thư mục tồn tại)
Glob: frontend/tests/*.spec.ts         → liệt kê test specs
```

Đọc song song:
- `frontend/src/app/layout.tsx` → xác định providers nào được import (ClerkProvider? QueryProvider? ThemeProvider?)
- `frontend/src/middleware.ts` → xác định auth library (`jose`? `@clerk/nextjs`? custom?)
- `frontend/src/hooks/useAuth.ts` (nếu tồn tại) → xác định auth pattern + token storage
- `frontend/package.json` → Next.js version, auth library packages

### 0.3 CLAUDE.md pairing check

```
Glob: **/AGENTS.md → liệt kê tất cả AGENTS.md (loại trừ node_modules)
Glob: **/CLAUDE.md → liệt kê tất cả CLAUDE.md (loại trừ node_modules)
```

So sánh hai danh sách theo thư mục → xác định thư mục nào có AGENTS.md nhưng thiếu CLAUDE.md.

**Ghi lại toàn bộ kết quả Phase 0 vào working memory trước khi tiếp tục.**

---

## PHASE 1 — UPDATE TỪNG AGENTS.md

Ưu tiên theo thứ tự (sai lệch nhiều nhất trước):

1. `backend/app/core/AGENTS.md`
2. `backend/AGENTS.md`
3. `frontend/AGENTS.md`
4. `backend/app/services/AGENTS.md`
5. `backend/app/models/AGENTS.md`
6. `backend/app/schemas/AGENTS.md`
7. `backend/app/AGENTS.md`
8. `backend/app/api/v1/AGENTS.md`
9. `frontend/src/components/AGENTS.md`
10. `frontend/src/lib/AGENTS.md`
11. `frontend/src/app/AGENTS.md`
12. `frontend/tests/AGENTS.md`
13. Root `AGENTS.md`

### Cho mỗi AGENTS.md — thực hiện 4 bước:

**Bước A — So sánh STRUCTURE tree với thực tế**

Dùng kết quả Glob từ Phase 0:
- File nào có trong thực tế nhưng KHÔNG có trong AGENTS.md? → thêm vào STRUCTURE
- File nào có trong AGENTS.md nhưng KHÔNG còn trong thực tế? → xóa khỏi STRUCTURE
- File count ("X files", "X routers", "X modules") có đúng không? → sửa nếu sai

**Bước B — Verify technical claims**

Dùng kết quả đọc file từ Phase 0 để kiểm tra:
- Port numbers, EXPOSE, version numbers
- Pool config values (pool_recycle, pool_size, max_overflow)
- Auth library/mechanism đang mô tả
- API prefixes của từng router

Với **bất kỳ claim nào chưa được verify** trong Phase 0 → đọc file nguồn ngay bây giờ trước khi sửa.

**Bước C — Kiểm tra conventions và examples**

- Pattern examples trong AGENTS.md có nhất quán với code thực tế không?
- Ví dụ: schemas AGENTS.md dùng `Field(description=...)` nhưng code dùng `Annotated[T, Doc(...)]` → sửa example
- Anti-patterns có phản ánh vấn đề thực tế trong codebase không?

**Bước D — Cập nhật file**

Chỉ sửa những phần có sai lệch xác nhận. Không sửa những phần đã đúng. Không thay đổi tone/style/format tổng thể.

---

## PHASE 2 — BỔ SUNG NGUYÊN TẮC CÒN THIẾU

Sau khi scan code trong Phase 0, nếu phát hiện patterns quan trọng chưa được ghi, thêm vào AGENTS.md phù hợp:

### Backend — kiểm tra và thêm nếu cần:

| Pattern cần kiểm tra | Cách xác minh | Thêm vào |
|---------------------|--------------|---------|
| Async email: `aiosmtplib` hay `asyncio.to_thread`? | Đọc `email_service.py` | `services/AGENTS.md` |
| Exception hierarchy: `AppException`, `NotFoundError`... | Đọc `core/exceptions.py` | `app/AGENTS.md` + `services/AGENTS.md` |
| Pagination: `PaginatedResponse[T]` | Đọc `schemas/common.py` | `schemas/AGENTS.md` + `api/v1/AGENTS.md` |
| Rate limiting: `@limiter.limit(...)` | Đọc 1-2 router files | `api/v1/AGENTS.md` |
| Circuit breaker: `circuit_breaker.py` | Đọc `core/circuit_breaker.py` | `services/AGENTS.md` |
| Security: hash functions trong `security.py` | Đọc `core/security.py` | `core/AGENTS.md` |

### Frontend — kiểm tra và thêm nếu cần:

| Pattern cần kiểm tra | Cách xác minh | Thêm vào |
|---------------------|--------------|---------|
| Auth hooks list | Đọc `hooks/useAuth.ts` | `frontend/AGENTS.md` |
| Token storage key | Đọc `hooks/useAuth.ts` | `frontend/AGENTS.md` |
| Toast helpers | Đọc `lib/toast.ts` | `frontend/AGENTS.md` |
| Providers list | Đọc `app/layout.tsx` | `frontend/AGENTS.md` |

---

## PHASE 3 — TẠO CLAUDE.md CÒN THIẾU

Với mỗi thư mục có AGENTS.md nhưng thiếu CLAUDE.md (từ Phase 0.3):

Tạo file `{dir}/CLAUDE.md` với nội dung **đúng một dòng**:
```
AGENTS.md
```

---

## PHASE 4 — KIỂM TRA CHÉO VÀ ROOT

### 4.1 Nhất quán giữa các AGENTS.md

Kiểm tra nhanh:
- Port numbers nhất quán giữa root và sub-directories không?
- Auth description nhất quán (root nói JWT, frontend nói Clerk → phải fix)?
- Conventions nhất quán (annotated-doc pattern dùng giống nhau ở backend files)?

Sửa bất kỳ mâu thuẫn nào tìm được.

### 4.2 Root AGENTS.md

Cập nhật nếu cần:
- WHERE TO LOOK: sửa các mô tả không chính xác (vd: "Clerk auth" nếu thực tế là JWT)
- Anti-patterns: thêm rule "Khi thêm file mới vào thư mục có AGENTS.md → PHẢI update AGENTS.md đó"

---

## PHASE 5 — BÁO CÁO

```
## Kết quả /agent-self-improvement

### AGENTS.md đã cập nhật
- {path}: {thay đổi 1}, {thay đổi 2}, ...

### CLAUDE.md đã tạo
- {path}

### Nguyên tắc mới được thêm
- {AGENTS.md}: {nguyên tắc ngắn gọn}

### AGENTS.md không thay đổi (đã chính xác)
- {path}

### Cần user xem xét (nếu có)
- {vấn đề cần quyết định từ người dùng}
```

---

## EXECUTION ORDER

**Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5**

Chạy ngay. Không chờ input. Không hỏi xác nhận giữa các phase.
