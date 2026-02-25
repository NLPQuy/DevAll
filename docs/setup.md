# DevAll Website - Setup Guide

## 📋 Table of Contents
1. [System Requirements](#system-requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Development](#development)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)

---

## 🖥️ System Requirements

### Minimum Requirements
- **Operating System**: Windows 10+, macOS 10.14+, Linux
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Text Editor**: Any (VS Code recommended)
- **Internet**: For Google Fonts and FormSubmit

### Recommended Tools
- **VS Code**: https://code.visualstudio.com/
- **Live Server Extension**: For local development
- **Git**: For version control
- **Chrome DevTools**: For debugging

---

## 📥 Installation

### Option 1: Clone from GitHub

```bash
# Clone the repository
git clone https://github.com/NLPQuy/DevAll.git

# Navigate to project folder
cd DevAll

# Open in VS Code
code .
```

### Option 2: Download ZIP

1. Visit: https://github.com/NLPQuy/DevAll
2. Click "Code" → "Download ZIP"
3. Extract to desired location
4. Open folder in text editor

### Option 3: Start from Scratch

```bash
# Create project folder
mkdir DevAll
cd DevAll

# Create structure
mkdir -p src/{css/{components},js/{components,utils},assets/{images,fonts}}
mkdir -p docs/features

# Initialize Git
git init
```

---

## ⚙️ Configuration

### 1. FormSubmit Email Setup

**Step 1: Update Email Address**

Edit `src/index.html` line ~164:
```html
<!-- BEFORE -->
<form action="https://formsubmit.co/your-email@example.com" method="POST">

<!-- AFTER -->
<form action="https://formsubmit.co/contact@devall.vn" method="POST">
```

**Step 2: Activate FormSubmit**

1. Open website in browser
2. Fill out contact form với email thật
3. Submit form
4. Check email inbox
5. Click activation link từ FormSubmit
6. Confirmed! Bây giờ form sẽ gửi email tới bạn

**Step 3: Customize Email (Optional)**

```html
<!-- Custom subject -->
<input type="hidden" name="_subject" value="New Inquiry from DevAll">

<!-- Disable CAPTCHA (already set) -->
<input type="hidden" name="_captcha" value="false">

<!-- Redirect after submit -->
<input type="hidden" name="_next" value="https://yourdomain.com/thanks.html">

<!-- CC to additional email -->
<input type="hidden" name="_cc" value="team@devall.vn">

<!-- Auto-response to submitter -->
<input type="hidden" name="_autoresponse" value="Thank you! We'll contact you soon.">
```

### 2. Update Contact Information

Edit `src/index.html`:

**Contact Section (~250):**
```html
<div class="info-item">
    <svg>...</svg>
    <span>+84 XXX XXX XXX</span> <!-- Update phone -->
</div>
<div class="info-item">
    <svg>...</svg>
    <span>contact@devall.vn</span> <!-- Update email -->
</div>
```

**Footer Section (~400):**
```html
<ul class="contact-list">
    <li>Email: contact@devall.vn</li>        <!-- Update -->
    <li>Phone: +84 XXX XXX XXX</li>          <!-- Update -->
    <li>Địa chỉ: Your Full Address</li>      <!-- Update -->
</ul>
```

### 3. Customize Branding

**Company Name:**
```html
<!-- Line ~68 -->
<h1 class="company-name">YourCompany</h1>
```

**Slogan:**
```html
<!-- Line ~73 -->
<h2 class="slogan">Your custom slogan here...</h2>
```

**Logo:**
Replace SVG trong line ~55-64 với your logo, hoặc:
```html
<div class="logo">
    <img src="assets/images/logo.png" alt="DevAll Logo">
</div>
```

### 4. Update Colors (Optional)

Edit `src/css/main.css`:
```css
:root {
    --primary-red: #c41e3a;      /* Your primary color */
    --primary-blue: #0066cc;     /* Your secondary color */
    --deep-blue: #003366;        /* Dark accent */
}
```

### 5. Update Meta Tags

Edit `src/index.html` trong `<head>`:
```html
<title>Your Company Name - Tagline</title>
<meta name="description" content="Your company description">
<meta name="keywords" content="your, keywords, here">
```

---

## 💻 Development

### Local Development Server

**Option 1: VS Code Live Server**

1. Install "Live Server" extension
2. Right-click `src/index.html`
3. Select "Open with Live Server"
4. Browser opens automatically at `http://localhost:5500`

**Option 2: Python Server**

```bash
# Navigate to src folder
cd src

# Python 3
python -m http.server 8000

# Open browser
# Visit: http://localhost:8000
```

**Option 3: Node.js Server**

```bash
# Install http-server globally
npm install -g http-server

# Navigate to src folder
cd src

# Start server
http-server -p 8000

# Visit: http://localhost:8000
```

### File Structure Explained

```
src/
├── index.html              # Main HTML (start here)
├── css/
│   ├── main.css           # Base styles + variables
│   ├── animations.css     # All animations
│   └── components/
│       ├── header.css     # Hero section styles
│       ├── navigation.css # Navbar styles
│       ├── products.css   # Services section
│       ├── form.css       # Contact form styles
│       └── footer.css     # Footer styles
├── js/
│   ├── main.js            # Global initialization
│   ├── components/
│   │   ├── navigation.js  # Menu logic
│   │   ├── animations.js  # Animation triggers
│   │   └── form-handler.js # Form validation & submit
│   └── utils/
│       └── validators.js  # Validation functions
└── assets/
    ├── images/            # Image files
    └── fonts/             # Custom fonts (if any)
```

### Making Changes

**1. Edit Content:**
- Open `src/index.html`
- Find section bạn muốn thay đổi
- Edit text directly
- Save & refresh browser

**2. Edit Styles:**
- Open appropriate CSS file
- Make changes
- Save & browser auto-refreshes (if using Live Server)

**3. Edit Functionality:**
- Open appropriate JS file
- Make changes
- Save & test in browser
- Check console for errors (F12)

### Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] Mobile menu opens/closes
- [ ] Smooth scroll works
- [ ] Service cards display properly
- [ ] Contact form validates
- [ ] Form submits successfully
- [ ] FormSubmit sends email
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] All links work

---

## 🚀 Deployment

### Hosting on GitHub Pages

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/NLPQuy/DevAll.git
git push -u origin main
```

**Step 2: Enable GitHub Pages**
1. Go to repository settings
2. Navigate to "Pages"
3. Source: Deploy from branch
4. Branch: `main` / `src` folder
5. Save
6. Wait 2-5 minutes
7. Visit: `https://nlpquy.github.io/DevAll/`

### Hosting on Netlify

**Step 1: Connect Repository**
1. Visit https://netlify.com
2. Click "Add new site"
3. Connect GitHub account
4. Select DevAll repository

**Step 2: Configure Build**
- Build command: (leave empty)
- Publish directory: `src`
- Deploy!

**Step 3: Custom Domain (Optional)**
- Add custom domain in Netlify settings
- Update DNS records
- SSL automatically enabled

### Hosting on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd DevAll

# Deploy
vercel

# Follow prompts
# Choose "src" as root directory
```

### Traditional Web Hosting (cPanel/FTP)

**Step 1: Prepare Files**
1. Ensure all paths are relative
2. Test locally one more time
3. Zip the `src` folder

**Step 2: Upload**
- Via FTP: Upload entire `src` folder contents to `public_html`
- Via cPanel: Use File Manager to upload

**Step 3: Test**
- Visit your domain
- Test all functionality
- Check FormSubmit

### Pre-Deployment Checklist

- [ ] FormSubmit email configured
- [ ] All contact info updated
- [ ] All links tested
- [ ] Images optimized
- [ ] Meta tags updated
- [ ] Favicon added
- [ ] Console errors fixed
- [ ] Mobile responsive verified
- [ ] Cross-browser tested
- [ ] Google Analytics added (optional)
- [ ] Privacy policy linked (if needed)

---

## 🐛 Troubleshooting

### Issue: Form doesn't submit

**Solution:**
1. Check FormSubmit email is activated
2. Verify form action URL is correct
3. Check browser console for errors
4. Ensure all required fields filled
5. Disable browser extensions (ad blockers)

### Issue: Smooth scroll not working

**Solution:**
1. Check JavaScript loaded (no 404s in console)
2. Verify section IDs match href values
3. Check for JavaScript errors
4. Try hard refresh (Ctrl+F5)

### Issue: Mobile menu won't open

**Solution:**
1. Check `navigation.js` loaded correctly
2. Inspect console for errors
3. Verify HTML IDs match JavaScript selectors
4. Clear browser cache

### Issue: Animations not showing

**Solution:**
1. Check `animations.css` is loaded
2. Verify IntersectionObserver support (modern browsers)
3. Check for JavaScript errors
4. Test in different browser

### Issue: CSS not applying

**Solution:**
1. Check CSS file paths in `<link>` tags
2. Hard refresh browser (Ctrl+Shift+R)
3. Check browser DevTools for 404 errors
4. Verify CSS file saved properly

### Issue: Live Server not working

**Solution:**
1. Install "Live Server" extension in VS Code
2. Right-click HTML file (not folder)
3. Select "Open with Live Server"
4. Check if port 5500 is available
5. Try alternative port in settings

### Issue: FormSubmit emails not arriving

**Solution:**
1. Check spam folder
2. Verify email activation clicked
3. Wait 5-10 minutes
4. Check form action URL typos
5. Ensure `name` attributes on inputs
6. Test with different email

### Issue: Images not loading after deployment

**Solution:**
1. Use relative paths: `./assets/images/logo.png`
2. Not absolute: `/assets/images/logo.png`
3. Check file names (case-sensitive on Linux servers)
4. Verify files uploaded correctly

### Getting Help

1. **Check Documentation**
   - README.md
   - Feature docs in `docs/features/`
   
2. **Browser Console**
   - Press F12
   - Check Console tab for errors
   - Check Network tab for failed requests

3. **GitHub Issues**
   - Visit: https://github.com/NLPQuy/DevAll/issues
   - Search existing issues
   - Create new issue if needed

4. **Contact Support**
   - Email: contact@devall.vn
   - Provide detailed description
   - Include error messages
   - Share browser/OS info

---

## 📝 Additional Configuration

### Add Google Analytics

In `src/index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Favicon

1. Create favicon.ico (16x16, 32x32)
2. Place in `src/` folder
3. Add to `<head>`:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Add robots.txt

Create `src/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### Add sitemap.xml

Create `src/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-11-30</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## ✅ Success Checklist

### Setup Complete When:
- ✅ Website loads locally
- ✅ All sections visible
- ✅ Navigation works
- ✅ Form validates properly
- ✅ FormSubmit configured & tested
- ✅ Responsive on mobile
- ✅ No console errors
- ✅ All content updated
- ✅ Ready to deploy

### Production Ready When:
- ✅ Deployed to hosting
- ✅ Custom domain configured (if applicable)
- ✅ SSL certificate active
- ✅ FormSubmit emails arriving
- ✅ Analytics tracking (if added)
- ✅ Tested on multiple devices
- ✅ Tested in multiple browsers
- ✅ Performance optimized

---

**Need more help?** Check the [main README](../README.md) or [feature documentation](features/).

Made with ❤️ by DevAll Team
