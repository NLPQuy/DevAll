# Setup Email Notifications for DevAll Booking System

## Bước 1: Cài đặt package Resend

Chạy lệnh sau trong terminal tại thư mục `devall-nextjs`:

```bash
npm install resend
```

## Bước 2: Lấy API Key từ Resend

1. Truy cập: https://resend.com
2. Đăng ký tài khoản miễn phí (nếu chưa có)
3. Xác thực email của bạn
4. Vào trang API Keys: https://resend.com/api-keys
5. Click "Create API Key"
6. Đặt tên (ví dụ: "DevAll Booking")
7. Copy API key (chỉ hiển thị 1 lần duy nhất!)

## Bước 3: Cấu hình Environment Variable

1. Mở file `.env.local` trong thư mục `devall-nextjs`
2. Thay thế `your_resend_api_key_here` bằng API key vừa copy:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

3. Lưu file

## Bước 4: Chạy thử nghiệm

```bash
npm run dev
```

Truy cập http://localhost:3000 và test chức năng booking.

## ✅ Tính năng Email đã được tích hợp:

### Email gửi đến bạn (nguyenlamphuquykh@gmail.com):
- ✉️ Thông báo booking mới
- 📋 Đầy đủ thông tin khách hàng
- 🔢 Booking ID
- 📅 Ngày giờ ưu tiên
- 💼 Dịch vụ quan tâm
- 💬 Ghi chú từ khách hàng

### Email gửi cho khách hàng:
- ✅ Xác nhận booking thành công
- 🔢 Booking ID để theo dõi
- 📋 Chi tiết đặt lịch
- 📞 Thông tin liên hệ DevAll

## 🎯 Resend Free Tier:

- ✅ 100 emails/ngày miễn phí
- ✅ 3,000 emails/tháng
- ✅ Không cần credit card
- ✅ Đủ cho startup và test

## ⚠️ Lưu ý quan trọng:

1. **Không commit file .env.local lên Git** (đã được ignore tự động)
2. **Giữ API key bí mật**
3. **Đổi email "from"** nếu bạn verify domain riêng trong Resend
4. Hiện tại dùng email mặc định: `onboarding@resend.dev`

## 🚀 Nâng cấp trong tương lai:

- Verify domain riêng (contact@devall.vn)
- Tích hợp với database để lưu bookings
- Thêm calendar integration (Google Calendar)
- SMS notification cho khách hàng
- Dashboard quản lý bookings

---

**Setup hoàn tất! Giờ mọi booking sẽ tự động gửi email đến nguyenlamphuquykh@gmail.com 🎉**
