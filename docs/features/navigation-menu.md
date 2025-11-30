# Navigation Menu

## Mô tả chức năng
Navigation menu cung cấp khả năng điều hướng giữa các sections của website. Menu có responsive design với hamburger menu cho mobile, smooth scrolling, và auto-hide khi scroll down.

## Công nghệ sử dụng
- **HTML5**: Semantic nav element
- **CSS3**:
  - Flexbox cho layout
  - Position fixed cho sticky navbar
  - Backdrop filter cho glass effect
  - CSS transitions và transforms
- **JavaScript**:
  - Event listeners cho scroll và click
  - Mobile menu toggle
  - Active link highlighting
  - Smooth scroll behavior

## Cấu trúc code

### HTML Structure
```
nav.navbar#navbar
└── .container
    └── .nav-wrapper
        ├── .logo-small
        │   └── .logo-text
        ├── button.mobile-menu-toggle#mobile-menu-toggle
        │   └── span × 3 (hamburger lines)
        └── ul.nav-menu#nav-menu
            └── li × n
                └── a.nav-link
```

### JavaScript Files
- `src/js/components/navigation.js`: Main navigation logic

### CSS Files
- `src/css/components/navigation.css`: Navigation styles

## Tính năng chính

### 1. Fixed Navbar
- Position fixed ở top của page
- Transparent background với backdrop blur
- Box shadow khi scroll (class 'scrolled')
- Z-index 1000 để luôn ở trên cùng

### 2. Active Link Highlighting
- Tự động highlight link based on scroll position
- Underline animation với pseudo-element
- Gradient underline effect
- Smooth transition

### 3. Smooth Scrolling
- JavaScript-powered smooth scroll
- Offset calculation cho fixed navbar
- Scroll to section with animation
- Works với keyboard navigation

### 4. Auto-hide on Scroll
- Navbar ẩn khi scroll down
- Hiện lại khi scroll up
- Threshold: 100px scroll
- Smooth transform transition

### 5. Mobile Hamburger Menu
- 3-line hamburger icon
- Transforms to X when active
- Slide-down menu animation
- Prevents body scroll when open
- Click outside to close

### 6. CTA Button in Nav
- Highlighted CTA trong navigation
- Gradient background
- Distinct từ regular nav links
- Persistent visibility

## Responsive Design

### Desktop (> 768px)
- Horizontal menu layout
- All links visible
- Hover effects active
- No hamburger menu

### Mobile (≤ 768px)
- Hamburger menu button
- Vertical menu layout
- Full-width dropdown
- Touch-friendly hit areas
- Stack navigation vertically

## JavaScript Logic

### Initialize Function
```javascript
function init() {
    - Setup mobile menu toggle
    - Add smooth scroll listeners
    - Handle scroll events
    - Update active links
}
```

### Key Functions
1. **toggleMobileMenu()**: Toggle mobile menu state
2. **closeMobileMenu()**: Close mobile menu
3. **handleScroll()**: Add 'scrolled' class và hide/show navbar
4. **updateActiveNavLink()**: Update active link based on scroll
5. **smoothScroll()**: Smooth scroll to target section

## Scroll Behavior

### Scroll Detection
- RequestAnimationFrame cho performance
- Debounced scroll events
- Track lastScrollTop position

### Active Section Detection
- Loop through all sections
- Compare scroll position
- Update active nav link
- Offset: 100px từ top

## Styling Details

### Colors
- Background: `rgba(255, 255, 255, 0.95)` với blur
- Text: `var(--text-primary)`
- Hover: `var(--primary-red)`
- Active underline: Gradient

### Transitions
- All: `0.3s ease`
- Transform: `0.3s ease`
- Opacity: `0.3s ease`

### Nav Link Underline
```css
.nav-link::after {
    width: 0 → 80% on hover
    height: 2px
    gradient background
    centered positioning
}
```

## Hướng dẫn sử dụng

### 1. Thêm Navigation Link
```html
<li><a href="#your-section" class="nav-link">Your Link</a></li>
```

### 2. Thay đổi Logo
```html
<div class="logo-small">
    <span class="logo-text">YourBrand</span>
</div>
```

### 3. Customize Colors
Update CSS variables trong `main.css`:
```css
--primary-red: #your-color;
--primary-blue: #your-color;
```

### 4. Adjust Scroll Offset
Trong `navigation.js`:
```javascript
const targetPosition = target.offsetTop - navbarHeight;
```

## Performance Optimization
- RequestAnimationFrame cho scroll
- Event delegation
- CSS transforms (GPU-accelerated)
- Minimal DOM queries
- Cached element references

## Browser Support
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Tested on iOS/Android

## Accessibility

### Keyboard Navigation
- Tab through links
- Enter to activate
- Escape to close mobile menu

### ARIA Attributes
```html
<button aria-label="Toggle menu">
```

### Focus States
- Visible focus indicators
- Skip to content link (optional)

## Known Issues & Solutions

### Issue: Backdrop blur không work trên Safari cũ
**Solution**: Fallback background color
```css
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
```

### Issue: Smooth scroll conflicts với anchor links
**Solution**: Prevent default và implement custom scroll

## Cải tiến trong tương lai
1. **Mega Menu**: Multi-column dropdown menus
2. **Search Bar**: Integrated search functionality
3. **Breadcrumbs**: Show current location
4. **Progress Indicator**: Show scroll progress bar
5. **Language Switcher**: Multi-language support
6. **Dark Mode Toggle**: Theme switcher trong navbar
7. **Notification Badge**: Alert icons for updates
8. **Sticky Sidebar**: Desktop sidebar navigation
9. **Voice Navigation**: Voice command support
10. **Gesture Controls**: Swipe gestures for mobile

## Testing Checklist
- ✅ Mobile menu opens/closes correctly
- ✅ Smooth scrolling works on all links
- ✅ Active link updates on scroll
- ✅ Navbar hides/shows on scroll
- ✅ Click outside closes mobile menu
- ✅ Responsive on all screen sizes
- ✅ No JavaScript errors
- ✅ Works without JavaScript (graceful degradation)
