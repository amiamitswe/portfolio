# CLAUDE.md

This file gives Claude Code project-specific context for working in this repository.

## Project Overview

This is Amit Samadder's personal portfolio site. It is a React single-page application built with Vite and styled with Tailwind CSS. The site highlights front-end engineering experience, technical skills, featured projects, education, social links, and a contact form.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS
- Headless UI
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
- `src/index.css`: Tailwind imports, global styles, background effects, and animations
- `src/components/Header.jsx`: Desktop navigation, social links, theme toggle, and mobile menu trigger
- `src/components/NavbarDialog.jsx`: Mobile navigation dialog
- `src/components/HeroSection.jsx`: Main hero content, profile image, CTA buttons, and CV preview trigger
- `src/components/MyTechStack.jsx`: Technology icon grid
- `src/components/MySkills.jsx`: Primary skills section
- `src/components/AdditionalSkills.jsx`: Supporting skill list
- `src/components/Experience.jsx`: Work experience timeline data
- `src/components/MyProjects.jsx`: Featured projects data and rendering
- `src/components/AboutMe.jsx`: Personal and professional summary
- `src/components/Education.jsx`: Education section
- `src/components/Footer.jsx`: Footer CTA, quick links, and social links
- `src/components/common/ContactModal.jsx`: EmailJS contact form
- `src/components/common/CvModal.jsx`: Google Drive PDF preview and download modal

## Development Notes

- Keep components small and consistent with the existing file structure.
- Prefer Tailwind utility classes over new custom CSS unless the style is global, animated, or reused.
- Follow the current visual system: clean cards, subtle borders, responsive spacing, and light/dark mode support.
- Preserve accessibility basics such as `aria-label`, `sr-only`, proper button types, and keyboard-friendly interactions.
- Use the existing custom icon components in `src/assets/icons/` when adding technology or social links.
- Keep portfolio content data close to the component that renders it unless a larger shared data structure becomes necessary.
- Avoid unrelated refactors when making focused content or UI updates.

## Styling Guidelines

- Support both light and dark mode for new UI.
- Use responsive classes for mobile, tablet, and desktop layouts.
- Match the existing rounded-lg card style and subtle shadow/border treatment.
- Keep section spacing consistent with nearby sections.
- Avoid adding new color palettes unless they fit the current sky, teal, rose, slate, and white theme.

## Contact Form Notes

The contact modal currently uses EmailJS values directly in:

```text
src/components/common/ContactModal.jsx
```

If changing contact behavior, consider moving the EmailJS service ID, template ID, and public key into Vite environment variables.

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
