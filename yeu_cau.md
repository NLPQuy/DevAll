# Website Tĩnh - Digitalise Solutions

## 📋 Mục Tiêu Cốt Lõi

Phát triển **trang web tĩnh (Static Site)** chứa hình ảnh, thông tin giới thiệu, sản phẩm, tầm nhìn, và các nút chuyển đổi (CTA) để đặt lịch tư vấn/đặt hàng.

---

## 🎯 I. Yêu Cầu Chung

| **Yêu cầu** | **Chi tiết** |
|-------------|--------------|
| **Công nghệ** | **React + Next.js** (Static Site Generation - SSG) |
| **Thiết kế** | - Giao diện phải **sạch sẽ, hiện đại, professional**<br>- **Phong cách Canada (Canadian Style)**:<br>&nbsp;&nbsp;• Màu chủ đạo: Đỏ (#FF0000, #C8102E) và Trắng (#FFFFFF)<br>&nbsp;&nbsp;• Accent color: Đen (#000000) cho text và contrast<br>&nbsp;&nbsp;• Biểu tượng lá phong (Maple Leaf) trong decoration<br>&nbsp;&nbsp;• Typography: Clean, bold, modern (như Montserrat, Poppins)<br>&nbsp;&nbsp;• Minimalist design với white space rộng rãi<br>&nbsp;&nbsp;• Friendly và approachable nhưng vẫn professional<br>- Có animation tinh tế (Logo, Slogan, scroll effects) |
| **Tối ưu** | - **Responsive** (tối ưu trên mọi thiết bị)<br>- Tốc độ tải trang nhanh (Next.js optimization)<br>- SEO-friendly<br>- Accessibility (WCAG 2.1) |

---

## 🏗️ II. Cấu Trúc Trang & Nội Dung Bắt Buộc

Website có thể là một trang đơn hoặc nhiều trang, được chia thành các khu vực (Section) sau:

| **Tên Khu vực (Section)** | **Nội dung Bắt buộc** |
|---------------------------|----------------------|
| **Header/Hero** | - Logo<br>- Slogan/Tầm nhìn: **"Your vision is the start of market leadership..."**<br>- Vài dòng giới thiệu ban đầu<br>- **Nút CTA chính** |
| **Sản phẩm/Dịch vụ** | Giới thiệu các lĩnh vực giải pháp công nghệ:<br>- **Data**<br>- **AI**<br>- **Web Development**<br>- **App Development**<br>- Các dịch vụ toàn diện |
| **Mục lục Lựa chọn** | Menu điều hướng (Navigation Menu) cho phép khách hàng chọn và di chuyển đến các khu vực khác nhau |
| **Footer** | - Thông tin liên hệ đầy đủ<br>- Bản quyền |

---

## ⚙️ III. Yêu Cầu Chức Năng

| **Yêu cầu** | **Chi tiết Kỹ thuật** |
|-------------|----------------------|
| **Nút Chuyển đổi (CTA)** | Các nút nổi bật (Prominently featured) để:<br>- **Đặt hàng (Order)**<br>- **Tư vấn (Consult)**<br>- **Đặt lịch (Booking)** |
| **Form Tư vấn** | Thu thập thông tin cơ bản:<br>- Tên<br>- Email<br>- Điện thoại<br>- Nội dung yêu cầu |
| **Cơ chế Form** | Dữ liệu Form phải được gửi **tự động** về địa chỉ email cố định của DevAll |

---

## 📂 IV. Quy Trình Phát Triển & Commit

### **Repository**
```
https://github.com/NLPQuy/DevAll.git
```

### **Quy tắc Commit**

1. **Commit đầy đủ và thường xuyên**
   - Mỗi khi hoàn thành một chức năng, phải commit ngay lập tức
   - Không được tích lũy nhiều thay đổi rồi commit một lần

2. **Commit theo từng chức năng**
   - Mỗi chức năng làm xong phải commit riêng
   - Commit message phải rõ ràng, mô tả chính xác chức năng đã hoàn thành
   - Format: `[Feature] Tên chức năng - Mô tả ngắn gọn`
   
   **Ví dụ:**
   ```bash
   git commit -m "[Feature] Header/Hero Section - Thêm logo, slogan và animation"
   git commit -m "[Feature] Navigation Menu - Hoàn thành menu điều hướng responsive"
   git commit -m "[Feature] Contact Form - Form tư vấn với validation"
   git commit -m "[Fix] Responsive - Sửa lỗi hiển thị trên mobile"
   ```

3. **Document README cho mỗi chức năng**
   - Mỗi chức năng phải có một file README riêng
   - Đặt trong thư mục `docs/features/`
   - Tên file: `<tên-chức-năng>.md`
   
   **Ví dụ cấu trúc:**
   ```
   docs/
   └── features/
       ├── header-hero.md
       ├── navigation-menu.md
       ├── products-services.md
       ├── contact-form.md
       └── footer.md
   ```

4. **Nội dung README cho mỗi chức năng**
   
   Mỗi file README chức năng cần bao gồm:
   - **Mô tả chức năng**: Giải thích chức năng làm gì
   - **Công nghệ sử dụng**: HTML, CSS, JavaScript, thư viện nào
   - **Cấu trúc code**: Giải thích cấu trúc file/folder liên quan
   - **Hướng dẫn sử dụng**: Cách chức năng hoạt động
   - **Screenshots/Demo**: (nếu có)
   - **Cải tiến trong tương lai**: Những gì có thể nâng cấp

---

## 📁 V. Cấu Trúc Source Code (Next.js + React)

```
DevAll/
├── README.md                          # File này
├── docs/
│   ├── setup.md                       # Hướng dẫn cài đặt
│   ├── design-system.md               # Design system và branding guidelines
│   └── features/                      # README cho từng chức năng
│       ├── header-hero.md
│       ├── navigation-menu.md
│       ├── products-services.md
│       ├── contact-form.md
│       └── footer.md
├── public/
│   ├── images/                        # Static images
│   │   ├── logo/
│   │   ├── maple-leaf.svg             # Biểu tượng lá phong Canada
│   │   ├── products/
│   │   └── icons/
│   ├── fonts/                         # Custom fonts
│   └── favicon.ico
├── src/
│   ├── app/                           # Next.js 14+ App Router
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Home page
│   │   ├── globals.css                # Global styles
│   │   └── api/                       # API routes
│   │       └── contact/
│   │           └── route.ts           # Contact form handler
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/                        # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── AnimatedText.tsx
│   │   └── animations/
│   │       ├── FadeIn.tsx
│   │       ├── SlideIn.tsx
│   │       └── MapleLeafAnimation.tsx
│   ├── lib/
│   │   ├── utils.ts                   # Utility functions
│   │   ├── animations.ts              # Animation configs
│   │   └── email.ts                   # Email service
│   ├── styles/
│   │   ├── theme.ts                   # Theme configuration
│   │   └── canadian-palette.ts        # Canadian color palette
│   ├── types/
│   │   └── index.ts                   # TypeScript types
│   └── hooks/
│       ├── useScrollAnimation.ts
│       └── useInView.ts
├── .env.local                         # Environment variables
├── .env.example                       # Environment variables example
├── .gitignore
├── next.config.js                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json
└── package-lock.json
```

---

## 🛠️ VI. Tech Stack & Advanced Packages

### **A. Core Technologies**

```json
{
  "framework": "Next.js 14+",
  "language": "TypeScript",
  "styling": "Tailwind CSS + CSS-in-JS",
  "deployment": "Vercel / Netlify"
}
```

### **B. Required Packages**

#### **1. Framework & Core**
```bash
npm install next@latest react@latest react-dom@latest typescript
npm install -D @types/react @types/node
```

#### **2. Styling & Design System**
```bash
# Tailwind CSS ecosystem
npm install tailwindcss postcss autoprefixer
npm install @tailwindcss/typography @tailwindcss/forms
npm install tailwindcss-animate

# CSS-in-JS (alternative/complement)
npm install styled-components
npm install @emotion/react @emotion/styled

# Class utilities
npm install clsx tailwind-merge
```

#### **3. Animation Libraries (ADVANCED - Chọn đẹp nhất)**

```bash
# Framer Motion - Animation library tốt nhất cho React
npm install framer-motion

# GSAP - Professional-grade animations
npm install gsap

# React Spring - Physics-based animations
npm install @react-spring/web

# Lottie - JSON animations
npm install lottie-react

# Auto Animate - Automatic animations
npm install @formkit/auto-animate

# Scroll animations
npm install react-intersection-observer
npm install react-scroll-parallax
```

#### **4. UI Component Libraries (PREMIUM)**

```bash
# Shadcn UI - Beautiful, accessible components
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input form

# Radix UI - Unstyled, accessible components
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-toast

# Headless UI - Tailwind's component library
npm install @headlessui/react

# Aceternity UI - Modern, beautiful components
# (Manual installation from aceternity.com)
```

#### **5. Form Handling & Validation**

```bash
# React Hook Form - Best form library
npm install react-hook-form

# Zod - TypeScript schema validation
npm install zod
npm install @hookform/resolvers

# Alternative: Yup validation
npm install yup
```

#### **6. Email Service**

```bash
# Resend - Modern email API
npm install resend

# Alternative: NodeMailer
npm install nodemailer
npm install -D @types/nodemailer

# Alternative: EmailJS
npm install @emailjs/browser
```

#### **7. Icons & Graphics**

```bash
# Lucide React - Beautiful icon set
npm install lucide-react

# React Icons - Comprehensive icon library
npm install react-icons

# Heroicons - Tailwind's icon set
npm install @heroicons/react
```

#### **8. Typography & Fonts**

```bash
# Next.js built-in font optimization
# (Google Fonts automatically optimized)

# Alternative: Fontsource
npm install @fontsource/montserrat
npm install @fontsource/poppins
npm install @fontsource/bebas-neue
```

#### **9. SEO & Analytics**

```bash
# Next SEO
npm install next-seo

# Analytics
npm install @vercel/analytics
npm install @vercel/speed-insights

# Google Analytics
npm install react-ga4
```

#### **10. Performance & Optimization**

```bash
# Image optimization
npm install sharp

# PWA support
npm install next-pwa

# Bundle analyzer
npm install @next/bundle-analyzer
```

#### **11. Development Tools**

```bash
# ESLint & Prettier
npm install -D eslint prettier
npm install -D eslint-config-next
npm install -D eslint-config-prettier
npm install -D prettier-plugin-tailwindcss

# Husky - Git hooks
npm install -D husky lint-staged

# Commit linting
npm install -D @commitlint/cli @commitlint/config-conventional
```

#### **12. Advanced Animation Packages (PREMIUM)**

```bash
# Three.js - 3D animations (cho effects đặc biệt)
npm install three @react-three/fiber @react-three/drei

# Particles.js - Particle effects
npm install react-tsparticles tsparticles

# Typed.js - Typing animation
npm install react-typed

# Tilt.js - Tilt hover effect
npm install react-parallax-tilt

# Hover effects
npm install react-awesome-reveal
```

### **C. Recommended Package Combinations**

#### **Option 1: Maximum Beauty & Polish** ⭐⭐⭐
```bash
- Framer Motion (animations)
- GSAP (advanced animations)
- Shadcn UI (components)
- Lottie (JSON animations)
- Three.js (3D effects - optional)
- Radix UI (headless components)
```

#### **Option 2: Balanced Performance**
```bash
- Framer Motion (animations)
- Headless UI (components)
- Auto Animate (simple animations)
- React Hook Form + Zod (forms)
```

#### **Option 3: Lightweight & Fast**
```bash
- CSS Animations (native)
- Tailwind CSS (styling only)
- React Hook Form (forms)
- Lucide Icons (icons)
```

### **D. Package.json Example**

```json
{
  "name": "devall-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "react-hook-form": "^7.51.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.3.0",
    "resend": "^3.2.0",
    "lucide-react": "^0.378.0",
    "lottie-react": "^2.4.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "next-seo": "^6.5.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "tailwindcss": "^3.4.0",
    "postcss": "^8",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

### **E. Environment Variables (.env.local)**

```bash
# Email Service
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@devall.com
EMAIL_TO=contact@devall.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://devall.com
```

---

## 🚀 VII. Workflow Phát Triển

### **Bước 1: Clone Repository & Setup**
```bash
git clone https://github.com/NLPQuy/DevAll.git
cd DevAll

# Initialize Next.js project
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"

# Install dependencies (chọn một trong các options ở Tech Stack)
npm install framer-motion gsap @radix-ui/react-dialog
npm install react-hook-form zod @hookform/resolvers
npm install resend lucide-react lottie-react
npm install clsx tailwind-merge next-seo

# Setup development tools
npm install -D prettier prettier-plugin-tailwindcss
npm install -D eslint-config-prettier

# Commit initial setup
git add .
git commit -m "[Setup] Initialize Next.js project with TypeScript and Tailwind"
```

### **Bước 2: Tạo Branch cho Feature**
```bash
git checkout -b feature/<tên-chức-năng>
```

### **Bước 3: Phát triển & Commit**
```bash
# Làm việc trên chức năng
# ...

# Add và commit khi hoàn thành
git add .
git commit -m "[Feature] Mô tả chức năng"
```

### **Bước 4: Tạo README cho chức năng**
```bash
# Tạo file README trong docs/features/
# Commit README
git add docs/features/<tên-chức-năng>.md
git commit -m "[Docs] Thêm README cho <tên-chức-năng>"
```

### **Bước 5: Push lên Repository**
```bash
git push origin feature/<tên-chức-năng>
```

### **Bước 6: Merge vào Main**
```bash
git checkout main
git merge feature/<tên-chức-năng>
git push origin main
```

---

## 📝 VIII. Checklist Phát Triển

### **Phase 1: Setup & Structure**
- [ ] Clone repository
- [ ] Initialize Next.js với TypeScript
- [ ] Install core dependencies (Next.js, React, TypeScript)
- [ ] Setup Tailwind CSS
- [ ] Configure ESLint & Prettier
- [ ] Tạo cấu trúc thư mục theo convention
- [ ] Setup environment variables (.env.local)
- [ ] Commit: "[Setup] Initialize Next.js project with TypeScript and Tailwind"

### **Phase 2: Design System & Theme**
- [ ] Tạo Canadian color palette (`src/styles/canadian-palette.ts`)
- [ ] Configure theme (`src/styles/theme.ts`)
- [ ] Setup fonts (Montserrat, Poppins, Bebas Neue)
- [ ] Tạo Maple Leaf SVG component
- [ ] Setup animation utilities
- [ ] Commit: "[Setup] Configure design system and Canadian theme"
- [ ] Tạo README: `docs/design-system.md`

### **Phase 3: Core UI Components**
- [ ] Tạo Button component với Canadian style
- [ ] Tạo Card component
- [ ] Tạo Input component
- [ ] Tạo Modal/Dialog component
- [ ] Tạo animated components (FadeIn, SlideIn)
- [ ] Commit: "[Components] Create core UI components"
- [ ] Tạo README: `docs/features/ui-components.md`

### **Phase 4: Layout Components**
- [ ] Tạo Root Layout (`src/app/layout.tsx`)
- [ ] Tạo Header component với logo và branding
- [ ] Tạo Navigation component (desktop + mobile)
- [ ] Tạo Footer component
- [ ] Implement responsive behavior
- [ ] Commit: "[Layout] Create header, navigation, and footer"
- [ ] Tạo README: `docs/features/layout.md`

### **Phase 5: Hero Section**
- [ ] Tạo HeroSection component
- [ ] Implement logo animation (Framer Motion)
- [ ] Implement slogan animation (typed effect)
- [ ] Add Maple Leaf decorative animations
- [ ] Tạo primary CTA buttons
- [ ] Add scroll indicator
- [ ] Commit: "[Feature] Hero section with animations"
- [ ] Tạo README: `docs/features/header-hero.md`

### **Phase 6: Products/Services Section**
- [ ] Tạo ProductsSection component
- [ ] Create service cards (Data, AI, Web, App)
- [ ] Implement hover effects
- [ ] Add scroll-triggered animations
- [ ] Add Maple Leaf section divider
- [ ] Commit: "[Feature] Products and services section"
- [ ] Tạo README: `docs/features/products-services.md`

### **Phase 7: Contact Form & CTAs**
- [ ] Tạo ContactSection component
- [ ] Setup React Hook Form với Zod validation
- [ ] Implement form UI với error handling
- [ ] Create API route (`/api/contact/route.ts`)
- [ ] Integrate Resend email service
- [ ] Add success/error toast notifications
- [ ] Implement CTA buttons: Order, Consult, Booking
- [ ] Add loading states
- [ ] Commit: "[Feature] Contact form with email integration"
- [ ] Tạo README: `docs/features/contact-form.md`

### **Phase 8: Advanced Animations**
- [ ] Implement GSAP scroll animations
- [ ] Add parallax effects (React Scroll Parallax)
- [ ] Create Maple Leaf floating animation
- [ ] Add page transition effects
- [ ] Implement smooth scroll behavior
- [ ] Optimize animation performance
- [ ] Commit: "[Feature] Advanced animations and interactions"
- [ ] Tạo README: `docs/features/animations.md`

### **Phase 9: SEO & Meta**
- [ ] Configure next-seo
- [ ] Add meta tags (title, description, OG tags)
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Implement JSON-LD structured data
- [ ] Add favicon and app icons
- [ ] Commit: "[SEO] Add meta tags and SEO optimization"

### **Phase 10: Performance Optimization**
- [ ] Optimize images (Next.js Image component)
- [ ] Implement lazy loading
- [ ] Code splitting optimization
- [ ] Add loading skeletons
- [ ] Configure bundle analyzer
- [ ] Lighthouse audit & fixes
- [ ] Commit: "[Optimize] Performance improvements"

### **Phase 11: Responsive & Cross-browser**
- [ ] Test trên mobile (320px - 640px)
- [ ] Test trên tablet (641px - 1024px)
- [ ] Test trên desktop (1025px+)
- [ ] Test trên Chrome, Firefox, Safari, Edge
- [ ] Fix responsive issues
- [ ] Add touch-friendly interactions
- [ ] Commit: "[Responsive] Cross-device compatibility"

### **Phase 12: Accessibility (A11Y)**
- [ ] Add ARIA labels
- [ ] Implement keyboard navigation
- [ ] Add focus indicators
- [ ] Test với screen readers
- [ ] Color contrast checks (WCAG AA)
- [ ] Add skip-to-content link
- [ ] Commit: "[A11Y] Accessibility improvements"

### **Phase 13: Testing & QA**
- [ ] Manual testing toàn bộ features
- [ ] Form submission testing
- [ ] Email delivery testing
- [ ] Animation smoothness check
- [ ] Performance testing
- [ ] Security review
- [ ] Commit: "[Testing] QA and bug fixes"

### **Phase 14: Deployment Preparation**
- [ ] Configure production build
- [ ] Setup environment variables cho production
- [ ] Add analytics (Vercel Analytics/GA4)
- [ ] Configure caching strategies
- [ ] Setup error monitoring (optional: Sentry)
- [ ] Create deployment documentation
- [ ] Commit: "[Deploy] Production configuration"

### **Phase 15: Launch**
- [ ] Deploy to Vercel/Netlify
- [ ] Test production site
- [ ] Setup custom domain (if applicable)
- [ ] Configure SSL
- [ ] Final smoke testing
- [ ] Commit: "[Release] Version 1.0 - Production Launch"
- [ ] Create release notes

---

## 🎨 VIII. Design System - Phong Cách Canada (Canadian Style)

### **A. Color Palette - Bảng Màu Canada**

```typescript
// src/styles/canadian-palette.ts
export const canadianPalette = {
  // Primary Colors - Màu Chủ Đạo
  primary: {
    red: '#FF0000',           // Canada Red - Đỏ cờ Canada
    crimson: '#C8102E',       // Deep Crimson - Đỏ đậm
    white: '#FFFFFF',         // Pure White
  },
  
  // Accent Colors - Màu Nhấn
  accent: {
    black: '#000000',         // Deep Black cho text
    charcoal: '#2C2C2C',      // Charcoal grey
    silver: '#E8E8E8',        // Light grey
  },
  
  // Semantic Colors - Màu Ngữ Nghĩa
  semantic: {
    success: '#28A745',       // Green
    warning: '#FFC107',       // Amber
    error: '#DC3545',         // Red
    info: '#17A2B8',          // Teal
  },
  
  // Gradient - Màu Chuyển Tiếp
  gradient: {
    redToWhite: 'linear-gradient(135deg, #FF0000 0%, #FFFFFF 100%)',
    whiteToRed: 'linear-gradient(135deg, #FFFFFF 0%, #C8102E 100%)',
  }
}
```

### **B. Typography - Phông Chữ**

**Primary Font:** Montserrat (Clean, Modern, Professional)
**Secondary Font:** Poppins (Friendly, Approachable)
**Accent Font:** Bebas Neue (Bold, Impact cho headings)

```css
/* Font Hierarchy */
H1: Bebas Neue, 72px, Bold, Letter-spacing: 2px
H2: Montserrat, 48px, Bold
H3: Montserrat, 36px, Semi-Bold
H4: Poppins, 24px, Medium
Body: Poppins, 16px, Regular
Caption: Poppins, 14px, Light
```

### **C. Canadian Design Elements**

#### **1. Maple Leaf (Lá Phong) - Biểu Tượng Chính**
- Sử dụng như decorative element
- Xuất hiện trong: Logo, dividers, background patterns
- Animation: Rơi nhẹ, xoay tròn khi hover
- Màu: Đỏ gradient hoặc outline trắng trên nền đỏ

#### **2. Design Philosophy - Triết Lý Thiết Kế**
- **Minimalist**: Ít nhưng tinh, tránh lộn xộn
- **Bold & Confident**: Đậm đà, tự tin như đất nước Canada
- **Clean Lines**: Đường nét sắc sảo, rõ ràng
- **Generous White Space**: Khoảng trống rộng rãi (như đồng bằng Canada)
- **Friendly Professional**: Thân thiện nhưng chuyên nghiệp

#### **3. Visual Style**
- **Geometric Shapes**: Hình học đơn giản, cân đối
- **High Contrast**: Tương phản mạnh (đỏ-trắng, đen-trắng)
- **Sharp Corners with Subtle Rounds**: Góc cạnh nhưng bo tròn nhẹ
- **Layered Depth**: Sử dụng shadow và elevation tinh tế

### **D. Animation Guidelines**

**Principles:**
- Smooth & Subtle (Mượt mà, tinh tế)
- Purpose-driven (Có mục đích rõ ràng)
- Performance-optimized (Tối ưu hiệu năng)

**Types:**
- **Fade In**: Nội dung xuất hiện từ từ
- **Slide In**: Di chuyển từ bên (như lá phong rơi)
- **Scale**: Phóng to/thu nhỏ nhẹ nhàng
- **Parallax**: Hiệu ứng chiều sâu khi scroll
- **Hover Effects**: Màu đổi, shadow nâng lên

### **E. Spacing System**

```typescript
// Theo hệ thống 8px base
spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
}
```

### **F. Component Style Examples**

#### **Buttons - Nút Bấm**
```
Primary Button:
- Background: Canada Red (#FF0000)
- Text: White
- Hover: Darker Red (#C8102E) + lift shadow
- Border-radius: 8px
- Padding: 16px 32px
- Font: Montserrat Bold, 16px
- Animation: Smooth color transition 0.3s

Secondary Button:
- Background: White
- Text: Canada Red
- Border: 2px solid Red
- Hover: Red background + White text
```

#### **Cards - Thẻ**
```
- Background: White
- Border: 1px solid #E8E8E8
- Border-radius: 12px
- Shadow: 0 4px 12px rgba(0,0,0,0.08)
- Hover: Shadow nâng lên, slight scale (1.02)
- Padding: 32px
```

### **G. Maple Leaf Decorations**

**Vị trí sử dụng:**
1. **Header Background**: Pattern lá phong mờ, opacity 5%
2. **Section Dividers**: Lá phong nhỏ ở giữa
3. **Corners**: Lá phong trang trí ở góc sections
4. **Loading Animation**: Lá phong xoay tròn
5. **Success States**: Lá phong bay lên khi submit form

**Kích thước:**
- Large: 200px (Background decoration)
- Medium: 64px (Section dividers)
- Small: 32px (Icons, bullets)
- Tiny: 16px (Inline decorations)

### **H. Responsive Breakpoints**

```typescript
breakpoints = {
  mobile: '320px - 640px',
  tablet: '641px - 1024px',
  desktop: '1025px - 1440px',
  wide: '1441px+',
}
```

### **I. Accessibility (A11Y)**

- **Color Contrast**: Minimum 4.5:1 (WCAG AA)
- **Focus States**: Rõ ràng với outline đỏ 3px
- **Alt Text**: Tất cả images
- **Keyboard Navigation**: Đầy đủ
- **Screen Reader**: Semantic HTML

### **J. Brand Personality**

**DevAll phong cách Canada thể hiện:**
- 🍁 **Trustworthy**: Đáng tin cậy như đất nước Canada
- 🎯 **Professional**: Chuyên nghiệp, tinh tế
- 🤝 **Friendly**: Thân thiện, cởi mở
- 🚀 **Innovative**: Đổi mới, hiện đại
- 🌟 **Quality-focused**: Tập trung vào chất lượng

---

## 📧 X. Thông Tin Liên Hệ

**DevAll - Digitalise Solutions**

*Repository:* https://github.com/NLPQuy/DevAll.git

---

## 💡 XI. Best Practices & Code Quality

### **A. Code Organization**
- **Component Structure**: Mỗi component một file, rõ ràng
- **Naming Convention**: PascalCase cho components, camelCase cho functions
- **File Naming**: Component files dùng `.tsx`, utility files dùng `.ts`
- **Barrel Exports**: Sử dụng `index.ts` để export components

### **B. TypeScript**
- **Type Safety**: Luôn định nghĩa types/interfaces
- **No `any`**: Tránh sử dụng `any`, dùng `unknown` nếu cần
- **Generics**: Sử dụng generics cho reusable components
- **Strict Mode**: Enable strict mode trong `tsconfig.json`

### **C. React Best Practices**
- **Functional Components**: Sử dụng functional components với hooks
- **Custom Hooks**: Tách logic ra custom hooks khi có thể
- **Memoization**: Sử dụng `useMemo`, `useCallback` khi cần thiết
- **Error Boundaries**: Implement error boundaries cho production

### **D. Performance**
- **Code Splitting**: Lazy load components không cần thiết ngay
- **Image Optimization**: Luôn dùng Next.js `Image` component
- **Bundle Size**: Kiểm tra bundle size thường xuyên
- **Tree Shaking**: Ensure proper tree shaking

### **E. CSS/Styling**
- **Tailwind First**: Ưu tiên Tailwind utilities
- **Component Styles**: Tách styles phức tạp ra files riêng
- **Mobile First**: Thiết kế mobile-first approach
- **Consistent Spacing**: Sử dụng spacing system

### **F. Git Workflow**
- **Branch Naming**: `feature/`, `fix/`, `refactor/`, `docs/`
- **Commit Messages**: Clear, descriptive, following convention
- **Pull Requests**: Always review before merge
- **No Direct Push**: Không push trực tiếp lên `main`

### **G. Testing (Optional nhưng recommended)**
```bash
# Install testing libraries
npm install -D @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event
npm install -D jest jest-environment-jsdom

# Run tests
npm test
```

### **H. Documentation**
- **Code Comments**: Comment logic phức tạp
- **JSDoc**: Document public APIs
- **README Updates**: Cập nhật README khi thêm features
- **Changelog**: Maintain CHANGELOG.md

---

## 📄 XII. License & Resources

### **License**
© 2024 DevAll - Digitalise Solutions. All rights reserved.

### **Useful Resources**

#### **Documentation**
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion)

#### **Design Inspiration**
- [Dribbble - Canadian Design](https://dribbble.com/search/canadian-design)
- [Awwwards](https://www.awwwards.com)
- [Behance](https://www.behance.net)

#### **Tools**
- [Figma](https://www.figma.com) - Design tool
- [Coolors](https://coolors.co) - Color palette generator
- [SVGRepo](https://www.svgrepo.com) - Free SVG icons
- [LottieFiles](https://lottiefiles.com) - Animation assets

---

## 🚀 Quick Start Guide

```bash
# 1. Clone repository
git clone https://github.com/NLPQuy/DevAll.git
cd DevAll

# 2. Initialize Next.js
npx create-next-app@latest . --typescript --tailwind --app

# 3. Install dependencies
npm install framer-motion gsap @radix-ui/react-dialog
npm install react-hook-form zod @hookform/resolvers
npm install resend lucide-react clsx tailwind-merge

# 4. Setup environment
cp .env.example .env.local
# Edit .env.local với your API keys

# 5. Run development server
npm run dev

# 6. Open browser
# Visit http://localhost:3000
```

---

## 📞 Support

Nếu gặp vấn đề trong quá trình phát triển:
1. Check documentation trong `docs/`
2. Review commit history để hiểu flow
3. Tạo issue trên GitHub
4. Liên hệ team lead

---

**🍁 Let's build something beautiful with Canadian style! 🍁**

---

**Lưu ý quan trọng:**
- ✅ Mỗi commit phải có ý nghĩa rõ ràng
- ✅ Mỗi chức năng phải có document README riêng
- ✅ Code phải được tổ chức có hệ thống, dễ maintain
- ✅ Tuân thủ TypeScript strict mode
- ✅ Ưu tiên performance và accessibility
- ✅ Follow Canadian design system một cách nghiêm ngặt
- ✅ Test thoroughly trước khi commit
- ✅ Keep bundle size minimal