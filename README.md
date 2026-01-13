# Électricien Bruxelles Pro - Website

A complete, fully functional electrician services website for Brussels with French language, mobile-first design, and conversion focus. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## 🚀 Features

### Core Features
- **Mobile-First Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **5 Switchable Color Palettes** - Dark Purple (default), Modern Blue, Electric Green, Warm Copper, Cool Gray
- **Theme Persistence** - Color palette preference saved in localStorage
- **French Language** - All content in French for Brussels market
- **Dark Theme** - Modern dark interface with vibrant accent colors

### Sections
1. **Navigation** - Fixed header with mobile hamburger menu and theme switcher
2. **Hero Section** - Large hero with 2-step quote generator and CTA buttons
3. **Recent Work Banner** - Horizontal scrollable before/after carousel
4. **Services Section** - 6 services with alternating image/text layout
5. **How It Works** - Visual timeline showing 4-step process
6. **Service Areas** - Creative circular layout showing Brussels communes
7. **Portfolio** - Before/after slider with thumbnail gallery
8. **Testimonials** - Carousel with 6 customer reviews
9. **Footer** - Contact info, quick links, CTA, and legal links

### Conversion Features
- **2-Step Quote Tool** - Captures home type and work type, generates WhatsApp message
- **Multiple CTAs** - WhatsApp, Phone, and Email buttons throughout
- **Trust Badges** - 24/7 availability, experience, client count, compliance
- **Social Proof** - Customer testimonials with 5-star ratings
- **Portfolio Gallery** - Before/after transformations

### SEO & Performance
- **Full SEO Optimization** - Meta tags, Open Graph, Twitter Cards
- **Structured Data** - Schema.org LocalBusiness markup
- **Sitemap.xml** - Auto-generated sitemap
- **Robots.txt** - Search engine directives
- **PWA Manifest** - Progressive Web App support
- **Optimized Images** - Using Unsplash for high-quality images
- **Fast Loading** - Code splitting and lazy loading

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.1
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4 (with CSS variables)
- **Fonts**: Geist Sans & Geist Mono (via next/font)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Color Palettes

### 1. Dark Purple (Default)
- Primary: `#7C3AED`
- Secondary: `#A78BFA`
- Background: `#0F172A`, `#1E293B`, `#334155`

### 2. Modern Blue
- Primary: `#06B6D4`
- Secondary: `#22D3EE`
- Background: `#0C1E2E`, `#1A2F3E`, `#2A4556`

### 3. Electric Green
- Primary: `#84CC16`
- Secondary: `#A3E635`
- Background: `#18181B`, `#27272A`, `#3F3F46`

### 4. Warm Copper
- Primary: `#EA580C`
- Secondary: `#F97316`
- Background: `#1C1107`, `#2C1A0F`, `#432818`

### 5. Cool Gray
- Primary: `#64748B`
- Secondary: `#94A3B8`
- Background: `#0F172A`, `#1E293B`, `#334155`

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata and ThemeProvider
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles and CSS variables
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt configuration
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── Navigation.tsx      # Header with theme switcher and mobile menu
│   ├── Hero.tsx            # Hero section with quote tool
│   ├── RecentWorkBanner.tsx # Before/after carousel
│   ├── Services.tsx        # Services section
│   ├── HowItWorks.tsx      # Process timeline
│   ├── ServiceAreas.tsx    # Coverage area display
│   ├── Portfolio.tsx       # Before/after slider with gallery
│   ├── Testimonials.tsx    # Customer reviews carousel
│   ├── Footer.tsx          # Footer with contact info
│   └── ThemeProvider.tsx   # Theme context provider
├── lib/
│   ├── config.ts           # Business config and color palettes
│   ├── content.ts          # All content (services, testimonials, etc.)
│   └── utils.ts            # Utility functions
└── public/
    └── favicon.ico         # Site favicon
```

## 🎯 Key Components

### ThemeProvider
Manages theme state and persists to localStorage. Provides `useTheme()` hook.

### Navigation
Fixed header with:
- Logo and brand name
- Desktop navigation menu
- Theme switcher dropdown (desktop) / grid (mobile)
- Mobile hamburger menu
- CTA buttons

### Hero
Features:
- Large headline with gradient text
- Response time badge
- 2-step quote generator (home type → work type)
- Generates pre-filled WhatsApp message
- 3 CTA buttons (WhatsApp, Phone, Email)
- Trust badges (24/7, experience, clients, compliance)

### Quote Tool
1. Dropdown to select home/building type
2. Dropdown to select work type
3. Optional text field for "Autre" (Other)
4. Generates WhatsApp message: "Bonjour, j'aimerais un devis pour: [HOME] - [WORK]. Merci!"

### Services
Alternating layout (no cards):
- Image left / Text right
- Text left / Image right
- Each service has title, description, and 3 benefits

### How It Works
Visual timeline:
- Horizontal flow on desktop
- Vertical flow on mobile
- 4 steps with icons, titles, descriptions, and timelines

### Service Areas
Creative circular layout:
- Central Brussels hub
- 6 regions with communes
- Hover effects
- Additional coverage note

### Portfolio
Interactive before/after slider:
- Draggable slider divider
- 5 before/after pairs
- Thumbnail gallery below
- Touch-friendly controls

### Testimonials
Carousel layout:
- 3-card view on desktop (center focused)
- Single card on mobile
- 6 testimonials with ratings
- Swipe/navigation controls

## 🔧 Configuration

### Business Contact Info
Edit `lib/config.ts`:
```typescript
export const businessConfig = {
  name: "Électricien Bruxelles Pro",
  phone: "+32 470 12 34 56",
  email: "contact@electricien-bruxelles.be",
  whatsapp: "+32470123456",
  // ...
};
```

### Services
Edit `lib/content.ts` to modify services, testimonials, portfolio items, etc.

### Theme Colors
Edit `lib/config.ts` to adjust color palettes or add new ones.

## 📱 Mobile Features

- Touch-friendly navigation
- Swipeable carousels
- Proper touch targets (min 44px)
- Optimized for slow 3G networks
- Hamburger menu with theme grid
- Click-to-call phone numbers
- WhatsApp deep linking

## 🌐 SEO Features

### Meta Tags
- Title: "Électricien Bruxelles Pro | Installation, Rénovation & Dépannage 24/7"
- Description optimized for search
- Keywords for Brussels electrician services
- French language (fr_BE locale)

### Structured Data
Schema.org LocalBusiness with:
- Business name and contact
- Service areas (Brussels communes)
- Opening hours (24/7)
- Aggregate rating (5 stars)
- Geographic coordinates

### Open Graph & Twitter Cards
Optimized for social media sharing with images and descriptions.

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build static files:
```bash
npm run build
```

Deploy the `.next` folder to any Node.js hosting platform.

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari 12+
- Android Chrome

## 🔐 Environment Variables

No environment variables required. All configuration is in `lib/config.ts`.

For production, you may want to add:
- Google Analytics ID
- Contact form API endpoint
- Other third-party integrations

## 📄 License

This project is proprietary software for Électricien Bruxelles Pro.

## 🤝 Support

For questions or support, contact: contact@electricien-bruxelles.be

## 📝 Notes

- Images are from Unsplash (replace with actual project photos)
- Phone numbers and emails are placeholders (update in config)
- WhatsApp numbers should not include + or spaces in the link format
- Theme preference persists across sessions via localStorage
- All components are responsive and tested on multiple devices
