# Mahindra Vishal D — Unity Gameplay Programmer Portfolio

A production-ready, AAA-grade portfolio website engineered for **Mahindra Vishal D** (Unity Gameplay Programmer). Designed with Apple-level cleanliness, modern dark/light mode aesthetics, glassmorphic UI elements, and Framer Motion micro-interactions.

![Portfolio Banner](https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop)

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: Vercel / Netlify / GitHub Pages ready

---

## ✨ Features & Architecture

- ⚡ **AAA Game Studio Aesthetic**: Clean layout, zero neon clutter, high-contrast typography, and electric orange (`#FF6B00`) highlights.
- 🌓 **Dark / Light Mode Toggle**: Smooth theme switching with custom CSS design tokens.
- 🎮 **Dedicated Gameplay Systems Showcase**: Technical C# architecture inspection modals for Finite State Machines, Third Person Locomotion, Grid Inventory, Enemy AI, Netcode Sync, and Object Pooling.
- 📁 **Filterable Case Studies Gallery**: Interactive project filtering for Multiplayer, Gameplay Systems, Mobile, and Educational apps.
- 🎯 **Interactive Skills Matrix**: Real-time search filter and category selection for C#, Unity, Netcode, Tools, and Soft Skills.
- 📈 **Animated Statistics & Timeline**: Experience milestones, Google Play x Unity program credentials, and published game releases.
- 📱 **100% Fully Responsive**: Pixel-perfect rendering across Desktop, Laptop, Tablet, and Mobile devices with zero layout shift or overflow.

---

## 📁 Directory Structure

```text
portfolio-app/
├── index.html
├── package.json
├── README.md
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── types/
    │   └── index.ts
    ├── data/
    │   └── portfolioData.ts
    └── components/
        ├── layout/
        │   ├── Navbar.tsx
        │   └── Footer.tsx
        ├── ui/
        │   ├── CustomCursor.tsx
        │   ├── ScrollProgress.tsx
        │   └── BackgroundShapes.tsx
        └── sections/
            ├── HeroSection.tsx
            ├── AboutSection.tsx
            ├── SkillsSection.tsx
            ├── GameplaySystemsSection.tsx
            ├── SystemModal.tsx
            ├── ProjectsSection.tsx
            ├── ProjectModal.tsx
            ├── ExperienceSection.tsx
            ├── AchievementsSection.tsx
            ├── ResumeSection.tsx
            ├── TestimonialsSection.tsx
            ├── BlogSection.tsx
            └── ContactSection.tsx
```

---

## 🛠️ Local Development & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ 
- [npm](https://www.npmjs.com/) v9+

### 1. Installation
```bash
cd portfolio-app
npm install
```

### 2. Run Local Dev Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## 🌐 Deployment Instructions

### Deploy on Vercel
```bash
npx vercel
```

### Deploy on Netlify
```bash
npx netlify deploy --build
```

### Deploy on GitHub Pages
1. Update `vite.config.ts` base path to `base: '/<repository-name>/'`
2. Run `npm run build`
3. Deploy the generated `dist/` directory to your `gh-pages` branch.

---

## 📄 License

MIT License © 2026 Mahindra Vishal D. Free for personal and commercial adaptation.
