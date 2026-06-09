# Trishulhub — Official Site

Premium animated company portfolio and service showcase website for Trishulhub.

## ✨ Features
- Custom cursor with blend mode
- Lenis smooth scroll
- Animated mesh gradient backgrounds
- Glassmorphism cards with 3D tilt
- Split-text reveal animations
- Magnetic button effects
- Animated gradient borders
- Counter animations
- Noise/grain texture overlay
- Scroll-triggered section reveals
- Gradient text shimmer effects

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Animations:** Framer Motion + GSAP
- **Smooth Scroll:** Lenis
- **Database:** Turso (LibSQL)
- **Deployment:** Vercel

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local

# Run development server
bun run dev
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── providers/          # Smooth scroll provider
│   ├── ui/                 # shadcn/ui components
│   ├── custom-cursor.tsx   # Dot + ring cursor
│   ├── navbar.tsx          # Glass navbar
│   ├── hero.tsx            # Animated hero section
│   ├── about.tsx           # Stats with counters
│   ├── services.tsx        # 3D tilt cards
│   ├── team.tsx            # Team members
│   ├── contact.tsx         # Glassmorphic form
│   ├── footer.tsx          # Premium footer
│   ├── magnetic-button.tsx # Magnetic CTA
│   ├── tilt-card.tsx       # 3D hover cards
│   └── ...
└── lib/
    └── utils.ts
```

---

Built with ❤️ by [Trishulhub](https://github.com/trishulhub-svg)
