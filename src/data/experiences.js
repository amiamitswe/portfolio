export const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: { name: "99minds", link: "https://www.99minds.io/" },
    skills: ["React.js", "TypeScript", "Redux Toolkit", "Redux Saga", "shadcn/ui", "Tailwind CSS", "API Integration", "POS Integrations", "Claude Code"],
    highlights: [
      "Rejoined 99minds directly after delivering its platform as a client engagement via Technext (2022-23); building the gift-card dashboard, CRM, and main dashboard with React, TypeScript, RTK, and shadcn/ui.",
      "Reduced redundant code by ~30% through code cleanup and refactoring shared logic into reusable components; migrated legacy Redux to Redux Toolkit and HOC data flows to Redux store/saga.",
      "Delivering integration UIs for POS and marketing platforms (Lightspeed R-Series, Heartland, Listrak), including credential setup and custom event mapping.",
    ],
    jobType: "Full time (Remote)",
    location: "Remote (New York, USA)",
    duration: { start: "June 2026", end: "Present" },
  },
  {
    role: "Software Engineer",
    company: { name: "TechCare® Inc.", link: "https://techcare.co/" },
    skills: ["React.js", "Redux Toolkit", "Redux Saga", "Tailwind CSS", "Ant Design", "Zoom SDK", "API Integration", "Performance Optimization", "Cursor"],
    highlights: [
      "Restructured both admin and client-side apps for DiveThru, a mental-health platform, using React.js, Redux Toolkit, Saga, Tailwind CSS, Ant Design, and Zoom SDK.",
      "Improved application performance by ~40% by reducing redundant API calls and establishing best practices for component splitting and reusable architecture.",
      "Managed bug fixes and system upgrades; collaborated directly with the client and backend team on API integration and feature delivery.",
    ],
    jobType: "Full time (Hybrid)",
    location: "Mirpur DOHS, Dhaka",
    duration: { start: "April 2025", end: "May 2026" },
  },
  {
    role: "Software Engineer, L2",
    company: { name: "Technext IT Ltd.", link: "https://technext.it" },
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "Material UI", "HeroUI", "Mantine", "Jotai", "Stripe", "OpenAI API", "Gemini", "Perplexity AI", "Stable Diffusion", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Owned frontend delivery on 14+ projects across in-house products and 4 international client engagements (US, Canada) over a 3.5-year tenure.",
      "Collaborated remotely with distributed teams on design-to-code conversion, API integration, code reviews, and deployment.",
      "Mentored a junior frontend developer through the company's internship program.",
    ],
    projects: [
      {
        name: "Quintix.ai",
        meta: "Montreal, Canada · Oct 2023 - Nov 2024",
        description:
          "Co-led the frontend of Fuelcellsworks, a high-traffic article site (~500K daily visitors) built with Next.js, HeroUI, and Jotai; integrated Stripe via Next.js API routes and migrated onto an existing Stripe account to preserve historical data. Co-led its admin panel with OpenAI (ChatGPT, DALL·E, TTS), Gemini, Stable Diffusion, Perplexity AI, and Unsplash integrations. Also built Epic-rally and Caractere-shop (Shopify), 300young, and 1mcgill.",
      },
      {
        name: "99minds.io",
        meta: "New York, USA · Nov 2022 - Apr 2023",
        description:
          "Built the gift-card dashboard, partner dashboard, and gift-card widget using React, Redux, SCSS, Bootstrap, and Falcon theme. Migrated the Pinstripes React project from Falcon theme to Tailwind CSS.",
      },
      {
        name: "Xeni",
        meta: "New York, USA · Nov 2021 - Oct 2022",
        description:
          "Built and maintained frontend features for XeniApp using React, TypeScript, Redux, and the FalconReact theme.",
      },
      {
        name: "In-house and agency products",
        meta: "USA, India, Portugal, Pakistan, Canada",
        description:
          "Linkedlogi (logistics app with Next.js, HeroUI, Jotai, plus Node.js, Express.js, and MongoDB backend work), Zenith (Next.js admin theme on Material UI), Wise Clone, WeRaise, and Eventgee (Next.js and Mantine).",
      },
    ],
    jobType: "Full time",
    location: "Mirpur Road, Dhaka",
    duration: { start: "November 2021", end: "April 2025" },
  },
  {
    role: "Software Engineer",
    company: { name: "QCoom.com", link: "https://qcoom.com/" },
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Redux", "Tailwind CSS"],
    highlights: ["Developed frontend features using React.js and Next.js."],
    jobType: "Full time",
    location: "Dhaka, Bangladesh",
    duration: { start: "July 2021", end: "October 2021" },
  },
  {
    role: "Frontend Developer",
    company: { name: "Lotus Technology Development", link: "#" },
    skills: ["React.js", "JavaScript", "Redux", "Bootstrap", "Figma to HTML"],
    highlights: ["Built React.js frontend components and interfaces for internal products."],
    jobType: "Full time",
    location: "Dhaka, Bangladesh",
    duration: { start: "January 2021", end: "July 2021" },
  },
  {
    role: "Frontend Developer",
    company: { name: "Omicron IT Ltd.", link: "#" },
    skills: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript", "PSD to HTML", "XD to HTML", "Responsive Design"],
    highlights: [
      "Built and maintained web interfaces for Pruvit using HTML, CSS, and JavaScript.",
      "Converted design files from PSD, XD, and Figma into responsive HTML templates.",
    ],
    jobType: "Full time",
    location: "Mirpur DOHS, Dhaka",
    duration: { start: "March 2019", end: "August 2020" },
  },
];

const MONTHS = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

function parseMonthYear(value) {
  const [month, year] = value.split(" ");
  return new Date(Number(year), MONTHS[month] ?? 0, 1);
}

// Single source of truth for "years of experience". Derived from the earliest
// role above, so it stays correct as time passes and as roles are added.
export const careerStart = experiences.reduce((earliest, experience) => {
  const start = parseMonthYear(experience.duration.start);
  return start < earliest ? start : earliest;
}, parseMonthYear(experiences[0].duration.start));

export const yearsOfExperience = Math.floor(
  (Date.now() - careerStart.getTime()) / MS_PER_YEAR
);

export const yearsOfExperienceLabel = `${yearsOfExperience}+`;

export default experiences;