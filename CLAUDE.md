# CLAUDE.md

This file gives Claude Code project-specific context for working in this repository.

## Project Overview

This is Amit Samadder's personal portfolio site. It is a React single-page application built with Vite and styled with Tailwind CSS. The site highlights front-end engineering experience, technical skills, featured projects, education, social links, and a contact form.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 (CSS-first config, no `tailwind.config.js`)
- Headless UI 2
- Heroicons
- EmailJS
- React Hot Toast
- React GA4

## Common Commands

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Important Files

- `src/App.jsx`: Main app composition and global modal state
- `src/main.jsx`: React app entry point
- `src/index.css`: Google Fonts, Tailwind import, colour tokens (CSS variables on `:root` for light and `.dark` for dark, exposed via `@theme inline`), font tokens, the `dark` variant, v3 Preflight compatibility rules, custom `@utility` classes, and global styles
- `eslint.config.js`: ESLint flat config (replaces the old `.eslintrc.cjs`)
- `src/data/profile.js`: Email, social links, navigation, and shared stat labels
- `src/data/experiences.js`: Work history (kept in sync with the résumé) and the derived years-of-experience label
- `src/data/techStack.js`: Tech stack strip entries (icon, name, link)
- `src/components/Header.jsx`: Desktop navigation, theme toggle, Resume button, and mobile menu trigger
- `src/components/NavbarDialog.jsx`: Mobile navigation dialog
- `src/components/HeroSection.jsx`: Hero copy, typed words, CTAs, social links, and the `profile.ts` code card
- `src/components/MyTechStack.jsx`: Tech stack strip under the hero
- `src/components/CaseStudies.jsx`: Featured 99minds case study (with an illustrative dashboard preview) and metric cards
- `src/components/MyProjects.jsx`: Project cards with screenshots and live links
- `src/components/Experience.jsx`: Experience list with a details modal per role
- `src/components/MySkills.jsx`: Core stack, additional skills, and proficiency tiers
- `src/components/AboutMe.jsx`: About text, photo, and highlight numbers
- `src/components/Education.jsx`: Education cards
- `src/components/ContactSection.jsx`: Contact card (email with copy, contact modal, CV)
- `src/components/Footer.jsx`: Footer line and social links
- `src/components/common/ContactModal.jsx`: EmailJS contact form
- `src/components/common/CvModal.jsx`: Google Drive PDF preview and download modal

## Development Notes

- Keep components small and consistent with the existing file structure.
- Prefer Tailwind utility classes over new custom CSS unless the style is global, animated, or reused.
- Tailwind 4 is configured in CSS, not JavaScript. Add design tokens as `@theme` variables and reusable classes as `@utility` blocks in `src/index.css`.
- Do not remove the Preflight compatibility block in `src/index.css`. It restores v3 defaults (border colour, button cursor, placeholder colour) that Tailwind 4 changed.
- Follow the current visual system: clean cards, subtle borders, responsive spacing, and light/dark mode support.
- Preserve accessibility basics such as `aria-label`, `sr-only`, proper button types, and keyboard-friendly interactions.
- Use the existing custom icon components in `src/assets/icons/` when adding technology or social links.
- Keep portfolio content data close to the component that renders it unless a larger shared data structure becomes necessary.
- Avoid unrelated refactors when making focused content or UI updates.

## Styling Guidelines

- Support both light and dark mode for new UI.
- Use responsive classes for mobile, tablet, and desktop layouts.
- Match the existing card style: `bg-surface`, `border-line`, large radii (18-24px), no heavy shadows.
- Keep section spacing consistent with nearby sections.
- Use the colour tokens (`bg-canvas`, `bg-surface`, `border-line`, `text-fg`, `text-fg-muted`, `bg-accent`, `text-accent-ink`, ...) instead of raw Tailwind palette colours, so light and dark both work without `dark:` variants.
- Typography: `font-display` (Bricolage Grotesque) for headings, Geist for body, `font-mono` (Geist Mono) for labels and metadata. `font-dm-sans` is only for the logo wordmark.
- Spell the role "Frontend" (not "Front-end") to match the résumé.

## Contact Form Notes

The contact form lives in:

```text
src/components/common/ContactModal.jsx
```

The EmailJS service ID, template ID, and public key are read from `VITE_EMAILJS_*` env vars (see `.env.example`), falling back to the current production values when unset.

## Deployment Notes

This is a static Vite app. A production deployment should run:

```bash
npm run build
```

The deployable output is generated in `dist/`.

## Before Finishing Changes

When possible, run:

```bash
npm run lint
npm run build
```

For documentation-only changes, a build is usually not required.
