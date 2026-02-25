# Header/Hero Section

## Mô tả chức năng
Header/Hero section là phần đầu tiên người dùng nhìn thấy khi truy cập website. Phần này bao gồm logo với animation, tên công ty, slogan, mô tả ngắn và các nút CTA chính để thu hút người dùng.

## Công nghệ sử dụng
- **HTML5**: Cấu trúc semantic
- **CSS3**: 
  - CSS Variables cho màu sắc (Canadian-inspired)
  - Flexbox cho layout
  - CSS Grid
  - Gradients và backdrop filters
  - SVG cho logo
- **JavaScript**: Animation triggers (tích hợp trong animations.js)

## Cấu trúc code

### HTML Structure
```
.hero
├── .hero-background (background với gradient và pattern)
│   └── .hero-overlay
├── .container
│   └── .hero-content
│       ├── .logo-container
│       │   ├── .logo (SVG logo với gradient)
│       │   ├── .company-name
│       │   └── .company-subtitle
│       ├── .slogan-container
│       │   ├── .slogan
│       │   └── .slogan-description
│       └── .cta-buttons (Call-to-action buttons)
└── .scroll-indicator
```

### CSS Files
- `src/css/components/header.css`: Styles cho toàn bộ hero section
- `src/css/animations.css`: Animation effects

## Tính năng chính

### 1. Logo Animation
- Logo SVG với gradient màu Canadian (red to blue)
- Pulse animation nhẹ nhàng
- Shadow effect để tạo chiều sâu

### 2. Background Effects
- Gradient nền từ dark blue tones
- Radial gradients tạo hiệu ứng ánh sáng
- SVG grid pattern overlay
- Responsive và tối ưu hiệu năng

### 3. Typography Hierarchy
- Company name: 4rem, gradient text
- Slogan: 2rem, white với text shadow
- Description: 1.125rem, semi-transparent white
- Letter spacing và line-height được tối ưu

### 4. Call-to-Action Buttons
- Primary button: Gradient background
- Secondary button: Transparent với border
- Hover effects: Transform và shadow
- Responsive sizing

### 5. Scroll Indicator
- Animated indicator ở bottom
- Keyframe animation "scroll"
- Guides user để scroll down

## Responsive Design

### Desktop (> 768px)
- Logo: 150px x 150px
- Company name: 4rem
- Full-width layout với centered content

### Tablet (≤ 768px)
- Logo: 120px x 120px
- Company name: 3rem
- CTA buttons stack vertically
- Reduced spacing

### Mobile (≤ 480px)
- Logo: 100px x 100px
- Company name: 2.5rem
- Compact padding
- Single column layout

## Animation Effects

### Fade In Up
```css
@keyframes heroFadeIn {
    from: opacity 0, translateY(20px)
    to: opacity 1, translateY(0)
}
```

### Stagger Delays
- Logo container: 0.2s
- Slogan container: 0.4s
- CTA buttons: 0.6s

## Color Scheme (Canadian-inspired)
- Primary Red: `#c41e3a` (Canada red)
- Primary Blue: `#0066cc`
- Background: Dark gradients `#0a0e27` to `#1a1f3a`
- Text: White với varying opacity

## Hướng dẫn sử dụng

### 1. Thay đổi Logo
Chỉnh sửa SVG trong file `index.html`:
```html
<svg viewBox="0 0 200 200" class="logo-svg">
    <!-- Update SVG content here -->
</svg>
```

### 2. Cập nhật Slogan
Thay đổi text trong `.slogan` class:
```html
<h2 class="slogan">Your new slogan here...</h2>
```

### 3. Thay đổi CTA Buttons
Cập nhật link và text trong `.cta-buttons`:
```html
<a href="#your-section" class="btn btn-primary">Your Text</a>
```

## Performance Optimization
- SVG logo nhẹ hơn image files
- CSS gradients thay vì images
- Backdrop filters với fallbacks
- Lazy load cho background images (nếu có)

## Browser Support
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (với vendor prefixes)
- IE11: ⚠️ Limited (no backdrop-filter)

## Cải tiến trong tương lai
1. **Video Background**: Thêm video background cho hero section
2. **Particles Effect**: Three.js hoặc particles.js cho interactive background
3. **Typewriter Effect**: Animate slogan text như typing
4. **Mouse Parallax**: Background moves với mouse movement
5. **Dark/Light Mode**: Toggle giữa light và dark theme
6. **Multilingual**: Hỗ trợ nhiều ngôn ngữ (EN/VI)
7. **A/B Testing**: Test different CTAs và messages
8. **WebGL Effects**: Advanced 3D effects với WebGL

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, p)
- High contrast text cho readability
- Focus states cho buttons
- ARIA labels nếu cần
- Keyboard navigation support

## Screenshots
[Thêm screenshots tại đây khi deploy]
- Desktop view
- Tablet view
- Mobile view
- Animation states
