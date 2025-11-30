# Contact Form

## Mô tả chức năng
Contact form cho phép khách hàng gửi yêu cầu tư vấn, đặt hàng, hoặc đặt lịch. Form có validation đầy đủ, gửi email tự động qua FormSubmit service, và responsive design.

## Công nghệ sử dụng
- **HTML5**: 
  - Form elements với proper types
  - Native validation attributes
  - Semantic structure
- **CSS3**:
  - Flexbox layout
  - Form styling
  - Error states
  - Loading animations
- **JavaScript**:
  - Real-time validation
  - Form submission handling
  - Error messaging
  - Phone formatting
- **FormSubmit.co**: Free form submission service

## Cấu trúc code

### HTML Structure
```
section.contact#contact
└── .container
    ├── .section-header
    ├── .contact-wrapper (Grid: 2 columns)
    │   ├── .contact-info
    │   │   ├── h3
    │   │   ├── .info-item × 3
    │   │   │   ├── SVG icon
    │   │   │   └── span
    │   │   └── .cta-boxes
    │   │       └── .cta-box × 3
    │   └── .contact-form-container
    │       └── form#contact-form
    │           ├── input[type="hidden"] × 3 (FormSubmit config)
    │           ├── .form-group × 5
    │           │   ├── label
    │           │   ├── input/select/textarea
    │           │   └── .error-message
    │           └── button.btn-submit
    └── .form-success (dynamically shown)
```

### JavaScript Files
- `src/js/components/form-handler.js`: Form logic và validation
- `src/js/utils/validators.js`: Validation utilities

### CSS Files
- `src/css/components/form.css`: Form styling

## Tính năng chính

### 1. Form Fields

**Required Fields:**
- Họ và tên (name)
- Email
- Số điện thoại (phone)
- Nội dung yêu cầu (message)

**Optional Fields:**
- Dịch vụ quan tâm (service) - dropdown

### 2. Real-time Validation

**Name Validation:**
- Required
- Chỉ chữ cái và spaces
- Hỗ trợ Vietnamese characters
- Min length: 2 characters

**Email Validation:**
- Required
- Valid email format
- Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Phone Validation:**
- Required
- Vietnamese format: 0XXX XXX XXX
- 10 digits starting with 0
- Auto-formatting as user types

**Message Validation:**
- Required
- Min length: 10 characters

### 3. Error Handling
- Error messages below fields
- Red border on invalid fields
- Error class toggle
- Clear errors on input
- Scroll to first error

### 4. Phone Number Formatting
Auto-formats as user types:
- Input: `0901234567`
- Formatted: `0901 234 567`
- Maintains cursor position

### 5. Form Submission

**FormSubmit Integration:**
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
    <input type="hidden" name="_subject" value="Liên hệ mới từ DevAll Website">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="table">
</form>
```

**Submission Flow:**
1. User fills form
2. Click "Gửi yêu cầu"
3. Validation runs
4. Show loading state
5. Submit to FormSubmit
6. FormSubmit sends email
7. Redirect or show success

### 6. Loading State
- Button shows "Đang gửi..."
- Disabled state
- Loading opacity
- Prevents double-submit

### 7. Success Message
- Green success banner
- Auto-hide after 5 seconds
- Form resets
- Fade in animation

## Contact Info Display

### Info Items (Left Column)
- Location: Việt Nam
- Phone: +84 XXX XXX XXX
- Email: contact@devall.vn

### CTA Boxes
- 📦 Đặt hàng
- 💡 Tư vấn
- 📅 Đặt lịch

**Styling:**
- Gradient background
- Backdrop blur
- Hover effects
- Glass morphism

## Validation Logic

### validators.js
```javascript
Validators = {
    email: (value) => emailRegex.test(value),
    phone: (value) => phoneRegex.test(cleaned),
    required: (value) => value.trim().length > 0,
    minLength: (value, min) => value.trim().length >= min,
    name: (value) => nameRegex.test(value)
}
```

### form-handler.js
```javascript
- validateField(fieldName)
- validateForm()
- handleSubmit(e)
- showSuccessMessage()
- formatPhoneNumber(input)
```

## Error Messages
```javascript
messages = {
    required: 'Trường này là bắt buộc',
    email: 'Email không hợp lệ',
    phone: 'Số điện thoại không hợp lệ (VD: 0901234567)',
    name: 'Tên chỉ chứa chữ cái và khoảng trắng',
    minLength: 'Vui lòng nhập ít nhất 10 ký tự'
}
```

## Responsive Design

### Desktop (> 968px)
- 2 column layout
- Contact info left
- Form right
- Side-by-side

### Tablet/Mobile (≤ 968px)
- Single column
- Form on top
- Contact info below
- Full-width fields

## Styling Details

### Form Fields
```css
input, select, textarea {
    padding: 0.875rem 1rem
    border: 2px solid light gray
    border-radius: 8px
    font-size: 1rem
    transition: all 0.2s
}
```

### Focus State
```css
:focus {
    border-color: primary blue
    box-shadow: 0 0 0 3px rgba(blue, 0.1)
}
```

### Error State
```css
.error {
    border-color: primary red
}
```

## FormSubmit Configuration

### Setup Steps
1. Update form action URL:
   ```html
   <form action="https://formsubmit.co/YOUR_EMAIL@example.com">
   ```

2. FormSubmit sends confirmation email
3. Click link to activate
4. Done! Form emails will be sent

### FormSubmit Features Used
- `_subject`: Custom email subject
- `_captcha`: Disabled (false)
- `_template`: Table format
- `_next`: Redirect URL (optional)
- `_cc`: CC emails (optional)

### Advanced Options (Optional)
```html
<input type="hidden" name="_next" value="https://yourdomain.com/thanks.html">
<input type="hidden" name="_cc" value="another@email.com">
<input type="hidden" name="_autoresponse" value="Thank you!">
```

## Hướng dẫn sử dụng

### 1. Activate FormSubmit
```
1. Replace "your-email@example.com" với email thật
2. Submit form test
3. Check email và activate
4. Form ready!
```

### 2. Customize Form Fields
Add new field:
```html
<div class="form-group">
    <label for="company">Công ty</label>
    <input type="text" id="company" name="company">
    <span class="error-message" id="company-error"></span>
</div>
```

### 3. Add Validation Rule
In `form-handler.js`:
```javascript
formGroups.company = {
    input: document.getElementById('company'),
    error: document.getElementById('company-error'),
    validators: ['required']
}
```

### 4. Change Success Message
```javascript
successDiv.textContent = 'Your custom message';
```

## Security Considerations

### XSS Prevention
- Sanitize function in validators.js
- FormSubmit handles server-side
- No direct HTML injection

### Spam Prevention
- FormSubmit captcha (optional)
- Honeypot field (optional)
- Rate limiting by FormSubmit

### Data Privacy
- HTTPS submission
- No client-side storage
- FormSubmit GDPR compliant

## Performance

### Optimization
- Minimal DOM queries
- Cached element references
- Debounced validation (on blur)
- Async form submission
- No external validation libraries

### Load Time
- Pure JavaScript (no dependencies)
- Small file size
- Fast validation

## Accessibility

### Keyboard Navigation
- Tab through fields
- Enter to submit
- Escape to clear (optional)

### Labels
- Associated with inputs (for/id)
- Required indicator (*)
- Clear error messages

### ARIA
```html
<input aria-required="true" aria-invalid="false">
<span role="alert" class="error-message">
```

### Screen Readers
- Label text read
- Error messages announced
- Success confirmation

## Browser Support
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Touch optimized

## Testing

### Manual Testing
- ✅ All validations work
- ✅ Error messages display
- ✅ Phone formatting works
- ✅ Form submits successfully
- ✅ Success message shows
- ✅ Form resets after submit
- ✅ Email received via FormSubmit

### Test Cases
1. Submit empty form → All errors show
2. Invalid email → Email error
3. Invalid phone → Phone error
4. Short message → Length error
5. Valid form → Success

## Cải tiến trong tương lai

### Immediate
1. **Honeypot Field**: Anti-spam invisible field
2. **File Upload**: Attach documents
3. **CAPTCHA**: Google reCAPTCHA integration
4. **Auto-save Draft**: LocalStorage backup

### Short-term
5. **Multi-step Form**: Wizard-style form
6. **Conditional Fields**: Dynamic field display
7. **Calendar Integration**: Date/time picker
8. **Service Packages**: Pre-filled service info
9. **Budget Range**: Slider for budget

### Long-term
10. **CRM Integration**: Salesforce, HubSpot
11. **Live Chat Fallback**: If form fails
12. **WhatsApp Integration**: Quick contact
13. **Voice Input**: Speech-to-text
14. **AI Chatbot**: Pre-qualify leads
15. **Analytics**: Track form interactions
16. **A/B Testing**: Form variations
17. **Localization**: Multi-language
18. **Payment Integration**: Deposit payment

## Alternative Solutions

### Instead of FormSubmit:
1. **Netlify Forms**: If hosted on Netlify
2. **Custom Backend**: Node.js/PHP endpoint
3. **Firebase**: Firestore database
4. **Google Forms**: Embed Google Form
5. **Typeform**: Interactive forms
6. **Formspree**: Similar to FormSubmit

## Email Template

FormSubmit sends emails như sau:
```
Subject: Liên hệ mới từ DevAll Website

Họ và tên: [name]
Email: [email]
Số điện thoại: [phone]
Dịch vụ quan tâm: [service]
Nội dung yêu cầu: [message]
```

## Analytics Events

Track these with Google Analytics:
```javascript
- form_start
- form_submit_success
- form_submit_error
- field_error (per field)
- service_selected
```
