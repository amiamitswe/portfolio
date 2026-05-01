# Amit Samadder Portfolio

A responsive developer portfolio built with React, Vite, and Tailwind CSS. The site presents Amit Samadder's front-end engineering experience, technical stack, selected projects, education, and contact flow in a polished single-page layout.

## Overview

This portfolio is designed for fast browsing and clear professional storytelling. It includes a sticky navigation bar, light and dark theme support, animated section reveals, project cards, experience timelines, skill summaries, and an EmailJS-powered contact modal.

## Features

- Responsive single-page portfolio layout
- Light and dark theme toggle with local preference support
- Hero section with profile image, CV preview, and contact CTA
- Technology stack grid with custom SVG/React icons
- Skills and additional skills sections
- Featured project cards with live project links
- About, experience, and education sections
- Contact modal using EmailJS
- Toast notifications for contact form feedback
- Tailwind CSS styling with custom background effects

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS
- Headless UI
- Heroicons
- EmailJS
- React Hot Toast
- React GA4

## Project Structure

```text
.
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── logo/
│   ├── components/
│   │   ├── common/
│   │   ├── AboutMe.jsx
│   │   ├── AdditionalSkills.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MyProjects.jsx
│   │   ├── MySkills.jsx
│   │   ├── MyTechStack.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite will start the local development server and print the local URL in the terminal.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Main Sections

- `Header`: sticky navigation, social links, mobile menu, and theme toggle
- `MyTechStack`: grid of technologies and tools
- `MySkills`: primary front-end skill highlights
- `AdditionalSkills`: supporting tools and capabilities
- `Experience`: current, recent, and earlier roles
- `MyProjects`: featured portfolio projects
- `AboutMe`: personal and professional summary
- `Education`: academic background
- `Footer`: quick links, social links, and final CTA

## Featured Projects

### WeRaise

A dashboard-focused fundraising interface with responsive data views, clean navigation, and reusable React UI patterns.

Live: https://amit-weraise.netlify.app/

### Wise Clone

A payment flow interface inspired by Wise, focused on multi-step UX, currency inputs, and polished responsive layouts.

Live: https://falcon-react-wise-wizard.vercel.app/

### Ingeniero Web

A Spanish-language dashboard website refreshed by converting existing features into cleaner layouts, responsive screens, and Falcon UI patterns.

Live: https://amit-ingeniero-web.netlify.app/

## Contact Form

The contact modal uses EmailJS through `@emailjs/browser`. The service ID, template ID, and public key are currently configured in:

```text
src/components/common/ContactModal.jsx
```

For production maintenance, consider moving these values into Vite environment variables.

## Deployment

This app can be deployed to any static hosting provider that supports Vite builds, such as Netlify, Vercel, GitHub Pages, or Cloudflare Pages.

Typical deployment command:

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

## Author

Amit Samadder

- GitHub: https://github.com/amiamitswe
- LinkedIn: https://www.linkedin.com/in/amiamitswe
- X: https://x.com/amiamitswe
