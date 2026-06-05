<div align="center">

<br />

# ✦ Pranathi Shree — Portfolio

**Technology · Product Strategy · Leadership**

[![Live Site](https://img.shields.io/badge/Live%20Site-pranathishree.vercel.app-D4BFF9?style=for-the-badge&logo=vercel&logoColor=black)](https://pranathishree.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

<br />

*A premium dark-mode portfolio built with Next.js 16, Framer Motion, and a custom design system.*

</div>

---

## ✨ Features

- **Fully Dynamic** — All content (bio, experience, projects, achievements, education) is driven by a single [`portfolio.json`](./src/data/portfolio.json) file. Update your data without touching any component code.
- **Premium Design System** — Custom Tailwind v4 tokens (mauve, gold, rose palette), glassmorphism cards, `backdrop-filter` blur layers, and dot-pattern backgrounds.
- **Scroll-driven Animations** — Framer Motion `useScroll` + `useTransform` power the Education timeline fill, staggered section entrances, and floating card parallax.
- **Interactive Spotlight** — Cursor-tracking radial glow that follows the mouse across the hero section.
- **Multi-Experience Timeline** — Active / Past role indicators with pulsing live badges, sticky left-panel cards, and milestone cards on a vertical gradient track line.
- **Centered Education Timeline** — Alternating left/right card layout with numbered dot nodes, animated scroll-fill line, and ghost year typography on the opposite side.
- **Contact Form + Email** — EmailJS integration sends real emails to the owner's inbox with a branded HTML email template (dark/mauve/gold themed).
- **Vercel Analytics + Speed Insights** — Production performance and visitor metrics out of the box.
- **Fully Responsive** — Mobile-first layouts with graceful desktop upgrades across all sections.

---

## 🗂️ Sections

| Section | Component |
|---|---|
| Hero | [`Hero.tsx`](./src/components/Hero.tsx) |
| About | [`About.tsx`](./src/components/About.tsx) |
| Experience | [`Experience.tsx`](./src/components/Experience.tsx) |
| Projects | [`Projects.tsx`](./src/components/Projects.tsx) |
| Skills | [`Skills.tsx`](./src/components/Skills.tsx) |
| Education | [`Education.tsx`](./src/components/Education.tsx) |
| In Action (Impact Showcase) | [`InAction.tsx`](./src/components/InAction.tsx) |
| Achievements | [`Achievements.tsx`](./src/components/Achievements.tsx) |
| Currently Learning | [`CurrentlyLearning.tsx`](./src/components/CurrentlyLearning.tsx) |
| Contact | [`Contact.tsx`](./src/components/Contact.tsx) |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | React framework with Turbopack |
| [React 19](https://react.dev) | UI library |
| [TypeScript 5](https://typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling + custom design tokens |
| [Framer Motion](https://www.framer.com/motion/) | Scroll-driven & entrance animations |
| [Lucide React](https://lucide.dev) | Icon library |
| [EmailJS](https://emailjs.com) | Contact form → email delivery |
| [Vercel Analytics](https://vercel.com/analytics) | Visitor analytics |
| [Vercel Speed Insights](https://vercel.com/docs/speed-insights) | Core Web Vitals tracking |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/pranathishree/pranathishree.github.io.git
cd pranathishree.github.io

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Fill in your EmailJS credentials (see below)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root and add:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

Get these values from your [EmailJS Dashboard](https://dashboard.emailjs.com):

| Variable | Where to find it |
|---|---|
| `SERVICE_ID` | Email Services → your Gmail service |
| `TEMPLATE_ID` | Email Templates → your template |
| `PUBLIC_KEY` | Account → General → API Keys |

> **Deploying to Vercel?** Add the same 3 variables in your Vercel project → Settings → Environment Variables.

---

## 📁 Project Structure

```
pranathi-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Design tokens, glass-card, dot-pattern, timeline-line
│   │   ├── layout.tsx         # Root layout with fonts & metadata
│   │   └── page.tsx           # Section composition
│   ├── components/            # One component per section + utilities
│   └── data/
│       └── portfolio.json     # ← All content lives here
├── public/
├── .env.local                 # EmailJS keys (gitignored)
└── package.json
```

---

## 📝 Customising Content

**Everything is in one file:** [`src/data/portfolio.json`](./src/data/portfolio.json)

Update your name, role, experience, projects, skills, education and achievements there — no component changes needed.

```json
{
  "personal": { "name": "Your Name", "role": "Your Role" },
  "experience": { "jobs": [ "..." ] },
  "projects":   { "projectList": [ "..." ] },
  "education":  { "educationList": [ "..." ] }
}
```

---

## 📦 Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🚢 Deployment

This site is deployed on **Vercel**. Every push to `main` triggers an automatic production deployment.

```bash
# Manual deploy via CLI
vercel --prod
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pranathishree/pranathishree.github.io)

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

<div align="center">

Designed & built by **Pranathi Shree** &nbsp;·&nbsp; [pranathishree.vercel.app](https://pranathishree.vercel.app)

</div>
