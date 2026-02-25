# DevAll Website - Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

### Method 1: One-Click Deploy Button

**Fastest way - Just click the button!**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNLPQuy%2FDevAll&project-name=devall-website&repository-name=DevAll&root-directory=devall-nextjs)

This will:
- ✅ Clone your repository
- ✅ Auto-detect Next.js framework
- ✅ Configure build settings automatically
- ✅ Deploy in ~3 minutes

### Method 2: Using Vercel Dashboard (Manual)

1. **Push code to GitHub** (already done ✅)

2. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with GitHub

3. **Import Project**
   - Click "Add New" → "Project"
   - Select your GitHub repository: `NLPQuy/DevAll`
   - Select `devall-nextjs` folder as root directory

4. **Configure Project**
   ```
   Framework Preset: Next.js
   Root Directory: devall-nextjs
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

5. **Add Environment Variables** (Optional - for email)
   - Click "Environment Variables"
   - Add variables from `.env.example`:
     - `RESEND_API_KEY` (if using Resend)
     - `EMAIL_FROM`
     - `EMAIL_TO`
     - `NEXT_PUBLIC_SITE_URL`

6. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

7. **Get Your URL**
   - Vercel will give you: `https://devall-xxx.vercel.app`
   - You can add custom domain later

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd devall-nextjs

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 📧 Email Integration Setup (Required for Contact Form)

### Option 1: Resend (Recommended)

**Why Resend?**
- ✅ 3,000 free emails/month
- ✅ Modern API
- ✅ Easy setup
- ✅ Good deliverability

**Setup:**

1. **Get API Key**
   - Go to https://resend.com
   - Sign up and verify email
   - Create API key

2. **Install Package** (already installed ✅)
   ```bash
   npm install resend
   ```

3. **Update Contact API**
   - Edit `app/api/contact/route.ts`
   - Uncomment Resend code
   - Add your domain verification on Resend

4. **Add Environment Variables**
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   EMAIL_FROM=noreply@yourdomain.com
   EMAIL_TO=contact@devall.com
   ```

5. **Verify Domain** (for production)
   - Add DNS records on Resend dashboard
   - Verify domain ownership

### Option 2: SendGrid

**Setup:**

1. **Get API Key**
   - Go to https://sendgrid.com
   - Create account (100 free emails/day)
   - Create API key in Settings

2. **Install Package**
   ```bash
   npm install @sendgrid/mail
   ```

3. **Update Contact API**
   ```typescript
   import sgMail from '@sendgrid/mail';
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
   
   await sgMail.send({
     to: process.env.EMAIL_TO!,
     from: process.env.EMAIL_FROM!,
     subject: 'New Contact Form Submission',
     html: `...`
   });
   ```

4. **Add Environment Variables**
   ```bash
   SENDGRID_API_KEY=SG.your_api_key
   EMAIL_FROM=verified@email.com
   EMAIL_TO=contact@devall.com
   ```

### Option 3: Nodemailer (SMTP)

**Setup:**

1. **Install Package**
   ```bash
   npm install nodemailer
   npm install -D @types/nodemailer
   ```

2. **Gmail Setup** (if using Gmail)
   - Enable 2FA on Google Account
   - Create App Password: https://myaccount.google.com/apppasswords

3. **Update Contact API**
   ```typescript
   import nodemailer from 'nodemailer';
   
   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: Number(process.env.SMTP_PORT),
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   });
   
   await transporter.sendMail({
     from: process.env.EMAIL_FROM,
     to: process.env.EMAIL_TO,
     subject: 'New Contact Form',
     html: `...`
   });
   ```

4. **Add Environment Variables**
   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   EMAIL_FROM=your-email@gmail.com
   EMAIL_TO=contact@devall.com
   ```

---

## 🌐 Custom Domain Setup

### On Vercel

1. **Buy Domain** (Namecheap, GoDaddy, etc.)

2. **Add to Vercel**
   - Project Settings → Domains
   - Add your domain: `devall.com`
   - Add `www.devall.com`

3. **Configure DNS**
   - Add CNAME record:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Add A record (or use Vercel nameservers):
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```

4. **Wait for DNS Propagation** (1-48 hours)

5. **SSL Certificate** (Automatic by Vercel)

---

## ✅ Pre-Deployment Checklist

### Code Quality
- [x] No TypeScript errors
- [x] No console errors
- [x] All components working
- [x] Responsive design tested
- [x] Animations smooth

### Configuration
- [ ] Update `NEXT_PUBLIC_SITE_URL` in .env
- [ ] Configure email service (Resend/SendGrid/Nodemailer)
- [ ] Test contact form locally
- [ ] Remove debug console.logs (if any)

### Content
- [x] All text in English
- [x] Correct company information
- [x] Contact details accurate
- [x] Maple leaf SVG correct

### Performance
- [ ] Run `npm run build` successfully
- [ ] Check bundle size
- [ ] Test production build locally (`npm start`)
- [ ] Run Lighthouse audit

### SEO
- [x] Meta tags configured
- [x] Proper heading hierarchy
- [ ] Add sitemap.xml (optional)
- [ ] Add robots.txt (optional)

---

## 🧪 Testing After Deployment

1. **Functional Testing**
   - [ ] All navigation links work
   - [ ] Scroll to sections works
   - [ ] Mobile menu opens/closes
   - [ ] Contact form submits
   - [ ] Email received
   - [ ] Form validation works
   - [ ] CTAs clickable

2. **Performance Testing**
   - Run Lighthouse on deployed URL
   - Target scores:
     - Performance: 90+
     - Accessibility: 95+
     - Best Practices: 95+
     - SEO: 95+

3. **Cross-Browser Testing**
   - Chrome ✓
   - Firefox ✓
   - Safari ✓
   - Edge ✓
   - Mobile Safari ✓
   - Chrome Mobile ✓

4. **Responsive Testing**
   - Mobile (375px) ✓
   - Tablet (768px) ✓
   - Desktop (1024px+) ✓

---

## 🔍 Troubleshooting

### Build Fails on Vercel

**Error: Module not found**
```bash
# Solution: Check package.json dependencies
npm install
npm run build
```

**Error: TypeScript errors**
```bash
# Solution: Fix TypeScript errors locally first
npm run build
# Fix all errors, then push
```

### Contact Form Not Sending Emails

**Check:**
1. Environment variables set correctly on Vercel
2. Email service API key valid
3. Domain verified (for Resend)
4. Check Vercel Function logs

**Debug:**
```typescript
// Add to contact route.ts
console.log('Environment variables:', {
  hasApiKey: !!process.env.RESEND_API_KEY,
  emailFrom: process.env.EMAIL_FROM,
  emailTo: process.env.EMAIL_TO,
});
```

### Slow Performance

**Solutions:**
1. Enable Image Optimization (Next.js automatic)
2. Check Vercel Analytics for bottlenecks
3. Lazy load heavy components
4. Optimize animations

---

## 📊 Monitoring

### Vercel Analytics (Free)

Automatically enabled on Vercel. View:
- Page views
- Visitors
- Performance metrics
- Error rates

### Google Analytics (Optional)

1. **Create GA4 Property**
   - Go to https://analytics.google.com
   - Create new property

2. **Add Tracking Code**
   ```bash
   # Add to .env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Add to layout.tsx**
   ```typescript
   import Script from 'next/script';
   
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   ```

---

## 🔄 Continuous Deployment

### Automatic Deployments

Once connected to Vercel:
- ✅ Push to `main` branch → Auto-deploy to production
- ✅ Push to other branches → Auto-deploy to preview URLs
- ✅ Pull requests → Preview deployments

### Manual Deployments

```bash
# Deploy specific branch
vercel --prod

# Deploy with specific build command
vercel --prod --build-env KEY=value
```

---

## 📝 Post-Deployment Tasks

1. **Update Repository**
   - Add deployment URL to README
   - Update documentation

2. **Setup Monitoring**
   - Enable Vercel Analytics
   - Setup error tracking (optional: Sentry)

3. **Marketing**
   - Submit to Google Search Console
   - Create sitemap.xml
   - Setup Google My Business

4. **Backup**
   - Regular git commits
   - Database backups (if added later)

---

## 🎉 Success!

Your DevAll website is now live! 

**Next Steps:**
1. Share the URL with stakeholders
2. Monitor analytics
3. Collect user feedback
4. Plan future improvements

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/NLPQuy/DevAll/issues
