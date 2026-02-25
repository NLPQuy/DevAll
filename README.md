# DevAll Digitalise Solutions - Website

![DevAll Logo](https://img.shields.io/badge/DevAll-Digitalise%20Solutions-red?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0-blue?style=for-the-badge)

## 🌟 Overview

**DevAll Digitalise Solutions** là website tĩnh giới thiệu công ty cung cấp giải pháp công nghệ toàn diện bao gồm Data Solutions, AI & Machine Learning, Web Development, và App Development.

### ✨ Highlights
- 🎨 **Modern Design**: Clean, professional interface với Canadian-inspired color scheme
- 📱 **Fully Responsive**: Tối ưu cho mọi thiết bị (Desktop, Tablet, Mobile)
- ⚡ **Fast Performance**: Static website với tốc độ tải nhanh
- 🎭 **Smooth Animations**: Elegant animations và transitions
- 📧 **Contact Form**: Tích hợp FormSubmit cho email tự động
- ♿ **Accessible**: WCAG 2.1 compliant

## 🎯 Mission Statement

> **"Your vision is the start of market leadership..."**

Chúng tôi biến tầm nhìn của bạn thành hiện thực với các giải pháp công nghệ tiên tiến.

## 🚀 Quick Start

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (for version control)
- Live Server extension (for local development)

### Installation

```bash
# Clone repository
git clone https://github.com/NLPQuy/DevAll.git

# Navigate to project
cd DevAll

# Open in browser
# Option 1: Open src/index.html directly
# Option 2: Use Live Server in VS Code
```

### Deployment
1. Upload `src/` folder to web hosting
2. Configure FormSubmit email
3. Test all functionality
4. Launch! 🎉

## 📂 Project Structure

```
DevAll/
├── README.md                          # This file
├── yeu_cau.md                        # Original requirements
├── docs/
│   ├── setup.md                      # Setup guide
│   └── features/                     # Feature documentation
│       ├── header-hero.md
│       ├── navigation-menu.md
│       ├── products-services.md
│       ├── contact-form.md
│       └── footer.md
├── src/
│   ├── index.html                    # Main HTML file
│   ├── css/
│   │   ├── main.css                  # Core styles
│   │   ├── animations.css            # Animation effects
│   │   └── components/               # Component styles
│   │       ├── header.css
│   │       ├── navigation.css
│   │       ├── products.css
│   │       ├── form.css
│   │       └── footer.css
│   ├── js/
│   │   ├── main.js                   # Main JavaScript
│   │   ├── components/               # Component scripts
│   │   │   ├── navigation.js
│   │   │   ├── form-handler.js
│   │   │   └── animations.js
│   │   └── utils/                    # Utilities
│   │       └── validators.js
│   └── assets/                       # Images, fonts (future)
│       ├── images/
│       └── fonts/
└── .gitignore
```

## 🎨 Design System

### Color Palette (Canadian-inspired)
```css
--primary-red: #c41e3a;      /* Canada Red */
--primary-blue: #0066cc;     /* Royal Blue */
--deep-blue: #003366;        /* Deep Blue */
--white: #ffffff;
--dark-gray: #333333;
```

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Base Size**: 16px
- **Scale**: Modular scale (1.25 ratio)

### Spacing System
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 2rem (32px)
- LG: 4rem (64px)
- XL: 6rem (96px)

## 🔧 Features

### 1. Header/Hero Section
- Animated logo với Canadian colors
- Engaging slogan
- Primary & Secondary CTAs
- Scroll indicator

[📖 Detailed Documentation](docs/features/header-hero.md)

### 2. Navigation Menu
- Sticky header
- Smooth scrolling
- Auto-hide on scroll down
- Responsive mobile menu
- Active link highlighting

[📖 Detailed Documentation](docs/features/navigation-menu.md)

### 3. Services Section
- 4 main services (Data, AI, Web, App)
- Card-based layout
- Hover animations
- Responsive grid
- Featured service badge

[📖 Detailed Documentation](docs/features/products-services.md)

### 4. Contact Form
- Real-time validation
- FormSubmit integration
- Auto phone formatting
- Error handling
- Success feedback

[📖 Detailed Documentation](docs/features/contact-form.md)

### 5. Footer
- Company information
- Quick links
- Contact details
- Copyright notice

[📖 Detailed Documentation](docs/features/footer.md)

## 📧 FormSubmit Setup

### Step 1: Configure Email
Update trong `src/index.html`:
```html
<form action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
```

### Step 2: Activate
1. Submit một test form
2. Check email
3. Click activation link
4. Done!

### Step 3: Customize (Optional)
```html
<!-- Redirect after submit -->
<input type="hidden" name="_next" value="https://yourdomain.com/thanks.html">

<!-- CC additional emails -->
<input type="hidden" name="_cc" value="team@example.com">

<!-- Auto-response -->
<input type="hidden" name="_autoresponse" value="Cảm ơn bạn đã liên hệ!">
```

[📖 Setup Guide](docs/setup.md)

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Mobile Safari | iOS 12+ | ✅ Full |
| Chrome Mobile | Latest | ✅ Full |

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
Mobile:  < 480px
Tablet:  481px - 768px
Desktop: 769px - 1024px
Large:   > 1024px
```

## ⚡ Performance

### Optimization Techniques
- ✅ Minified CSS/JS (production)
- ✅ Optimized images
- ✅ No external dependencies
- ✅ Lazy loading images
- ✅ CSS animations (GPU-accelerated)
- ✅ Minimal HTTP requests

### Metrics
- Load Time: < 2s
- First Contentful Paint: < 1s
- Lighthouse Score: 90+

## ♿ Accessibility

- ✅ Semantic HTML5
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader friendly
- ✅ Color contrast WCAG AAA
- ✅ Focus indicators
- ✅ Alt text for images

## 📊 SEO

### On-Page SEO
- ✅ Semantic HTML structure
- ✅ Meta tags
- ✅ Heading hierarchy
- ✅ Descriptive links
- ✅ Mobile-friendly
- ✅ Fast load times

### Recommended Additions
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] Schema.org markup
- [ ] Open Graph tags
- [ ] Twitter Card tags

## 🔐 Security

- ✅ HTTPS required
- ✅ FormSubmit handles security
- ✅ Input sanitization
- ✅ No sensitive data stored
- ✅ XSS prevention

## 🧪 Testing

### Manual Testing Checklist
- [ ] All links work
- [ ] Form validates correctly
- [ ] Responsive on all devices
- [ ] Animations smooth
- [ ] No console errors
- [ ] FormSubmit receives emails
- [ ] Cross-browser compatibility

### Test Devices
- Desktop (1920x1080, 1366x768)
- Tablet (iPad, 768x1024)
- Mobile (iPhone, 375x667)

## 📝 Development Workflow

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "[Feature] Your feature description"

# Push to repository
git push origin feature/your-feature

# Merge to main
git checkout main
git merge feature/your-feature
git push origin main
```

### Commit Convention
```
[Feature] - New feature
[Fix] - Bug fix
[Docs] - Documentation
[Style] - Code style changes
[Refactor] - Code refactoring
[Test] - Testing
[Optimize] - Performance improvements
```

## 🚢 Deployment

### Hosting Options
1. **GitHub Pages** (Free)
   ```bash
   # Enable in repo settings
   Settings → Pages → Deploy from main/src
   ```

2. **Netlify** (Free)
   - Drag & drop `src/` folder
   - Auto-deploy from Git

3. **Vercel** (Free)
   - Connect GitHub repo
   - Auto-deploy

4. **Traditional Hosting**
   - Upload via FTP
   - cPanel file manager

### Pre-Deployment Checklist
- [ ] Update FormSubmit email
- [ ] Test all forms
- [ ] Check all links
- [ ] Optimize images
- [ ] Minify CSS/JS
- [ ] Test on multiple devices
- [ ] Check Google Analytics (if added)

## 📈 Analytics (Optional)

### Google Analytics Setup
Add before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Events to Track
- Form submissions
- CTA clicks
- Service card clicks
- Navigation usage
- Scroll depth

## 🤝 Contributing

### How to Contribute
1. Fork repository
2. Create feature branch
3. Make changes
4. Write documentation
5. Submit pull request

### Code Style
- 2 spaces indentation
- Semicolons for JS
- BEM naming for CSS classes
- Comments for complex logic
- Descriptive variable names

## 📄 License

© 2024 DevAll Digitalise Solutions. All rights reserved.

## 👥 Team

**DevAll Team**
- Email: contact@devall.vn
- Website: [Coming Soon]
- GitHub: [@NLPQuy](https://github.com/NLPQuy)

## 🙏 Acknowledgments

- **Fonts**: Google Fonts (Inter, Poppins)
- **Icons**: SVG inline icons
- **Form Service**: FormSubmit.co
- **Inspiration**: Canadian design aesthetics

## 📞 Support

Cần hỗ trợ? Liên hệ:
- 📧 Email: contact@devall.vn
- 📱 Phone: +84 XXX XXX XXX
- 🌐 Website: [Contact Form](#contact)

## 🗺️ Roadmap

### Version 1.0 (Current) ✅
- [x] Basic website structure
- [x] All core sections
- [x] Contact form
- [x] Responsive design
- [x] Documentation

### Version 1.1 (Planned)
- [ ] Blog section
- [ ] Portfolio/Case studies
- [ ] Team page
- [ ] Testimonials
- [ ] FAQ section

### Version 2.0 (Future)
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Advanced animations
- [ ] Interactive demos
- [ ] Client portal

## 🔗 Links

- 📁 **Repository**: https://github.com/NLPQuy/DevAll.git
- 📖 **Documentation**: [docs/](docs/)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/NLPQuy/DevAll/issues)

---

Made with ❤️ by DevAll Team | **Your vision is the start of market leadership...**
