# TFS Volunteer Fire Department

## Features

- **Modern Next.js 14** with App Router and TypeScript
- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - Meta tags, sitemap, and semantic HTML
- **WCAG 2.1 Compliant** - Full accessibility support with ARIA labels, keyboard navigation, and screen reader friendly
- **Performance Optimized** - Image optimization, code splitting, and static generation
- **Professional Design** - Clean, authoritative style with red, black, white, and orange/yellow color scheme

## Pages

- **Homepage** - Hero section, real-time alerts, stats, Chief's message, services overview
- **About Us** - Department history, mission, team bios, and core values
- **Services** - Emergency response, wildfire response, fire prevention, community outreach
- **News** - Blog-style news articles with categories and individual article pages
- **Events Calendar** - Interactive calendar with upcoming events
- **Contact** - Contact form with EmailJS integration and contact information
- **Donate** - Donation portal with Stripe/PayPal integration placeholders
- **Volunteer** - Comprehensive volunteer application form
- **Gallery** - Photo gallery with category filtering and lightbox

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Fill in EmailJS credentials (see EmailJS Setup below)
   - Optionally add Stripe keys for donation processing
   - For password protection on Vercel preview deployments, set:
     - `ENABLE_PASSWORD_PROTECTION=true`
     - `SITE_PASSWORD=secure_password`

3. **Run the development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** in browser.

## EmailJS Setup (for Contact Form)

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Get Service ID, Template ID, and Public Key from the dashboard
5. Add them to `.env.local` file:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key
```

## Payment Integration

### Stripe Setup
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get publishable key from the dashboard
3. Add to `.env.local`: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...`
4. Implement payment processing in `/app/donate/page.tsx` (currently placeholder)

### PayPal Setup
- Similar process - integrate PayPal SDK in the donation page

## Customization

### Content
- All content is editable in the page files under `app/`
- Replace placeholder images with actual department photos
- Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`
- Modify stats and data in `app/page.tsx`

### Colors
- Edit `tailwind.config.ts` to change the color scheme
- Current colors: fire-red (#DC2626), fire-orange (#F97316), fire-yellow (#FBBF24), fire-dark (#1F2937)

### Images
- Replace Unsplash placeholder images with actual photos
- Add images to `public/` folder and reference them
- Ensure all images have descriptive alt text for accessibility

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - **EmailJS credentials** (if using contact form)
   - **Password Protection** (for preview deployments):
     - `ENABLE_PASSWORD_PROTECTION=true`
     - `SITE_PASSWORD=secure_password`
4. Deploy!

**Password Protection:** Set `ENABLE_PASSWORD_PROTECTION=true` and `SITE_PASSWORD=password` in  Vercel environment variables. Visitors will be redirected to a login page before accessing the site. Set to `false` or remove these variables to make the site public.

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms
- Works with any platform supporting Next.js (Netlify, AWS Amplify, etc.)
- Ensure environment variables are set in hosting platform

## Project Structure

```
tfs/
├── app/                   # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact form page
│   ├── donate/            # Donation page
│   ├── events/            # Events calendar page
│   ├── gallery/           # Photo gallery page
│   ├── news/              # News/blog pages
│   ├── services/          # Services page
│   ├── volunteer/         # Volunteer application page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts           # Robots.txt
├── components/            # React components
│   ├── Navigation.tsx    # Main navigation
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## API Integration Notes

The website includes placeholders for:
- **Alerts/Weather API** - Replace placeholder alerts in `app/page.tsx` with real API calls
- **News CMS** - Integrate with Contentful, Sanity, or similar CMS for news articles
- **Events API** - Connect events calendar to a calendar API or CMS
- **Donation Processing** - Implement Stripe or PayPal payment processing

## Accessibility Features

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- High contrast mode support
- Alt text on all images

## Performance Optimizations

- Next.js Image component for optimized images
- Static generation for most pages
- Code splitting automatically handled by Next.js
- Minimal JavaScript bundles
- Lazy loading for images

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## License

This project is created for the TFS Volunteer Fire Department. All rights reserved.

## Support

For questions or issues, contact:
- Email: info@tfsfire.org
- Phone: (406) 882-4810
