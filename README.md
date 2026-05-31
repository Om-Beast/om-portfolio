# Om Kesharwani — Premium Portfolio

Award-level frontend portfolio inspired by **Vercel**, **Linear**, **Framer**, **Stripe**, and **Apple**.

## Stack

- React 19 + Vite 8
- Tailwind CSS v4
- Framer Motion
- tsParticles · react-parallax-tilt · EmailJS
- React Icons + Lucide

## Features

- Premium loading screen
- Aurora + particle backgrounds
- Mouse-follow spotlight hero
- Typing role animation · floating tech badges
- 3D tilt project cards with mock previews
- Animated skill progress bars
- CP achievements (Specialist, AIR 1066, timeline)
- Magnetic CTAs · scroll reveals · parallax
- EmailJS contact (mailto fallback)

## Setup

```bash
npm install
npm run dev
```

### Profile photo

Add your photo at `public/profile.jpg` (recommended 800×800).

### EmailJS

Copy `.env.example` to `.env` and fill:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Template variables: `from_name`, `from_email`, `message`, `to_email`.

### Resume

Resume is served from `public/resume.pdf`.

## Deploy (Vercel)

1. Push to GitHub
2. Import on Vercel — framework: Vite
3. Add EmailJS env vars in project settings
4. Update canonical URLs in `index.html`, `robots.txt`, `sitemap.xml`

## Customize

Edit `src/data/portfolio.js` for copy, stats, projects, and links.
