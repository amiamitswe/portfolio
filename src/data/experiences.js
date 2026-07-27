export const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: { name: "99minds", link: "https://www.99minds.io/" },
    skills: ["React.js", "JavaScript", "TypeScript", "shadcn/ui", "Tailwind CSS", "Redux", "Redux Saga", "Redux Toolkit", "Claude", "API Integration", "Custom Widgets"],
    highlights: [
      "Restructured and rebuilt the 99minds dashboard with React, TypeScript, shadcn/ui, and Tailwind CSS.",
      "Maintained custom widgets and the B2B dashboard, and built the MCP UI.",
      "Delivered system upgrades and ongoing improvements to platform stability and performance.",
    ],
    jobType: "Full time (Remote)",
    location: "750 Lexington Ave, New York, NY 10022",
    duration: { start: "June 2026", end: "Present" },
  },
  {
    role: "Software Engineer",
    company: { name: "TechCare® Inc.", link: "https://techcare.co/" },
    skills: ["React.js", "Redux Toolkit", "Redux Saga", "TypeScript", "Tailwind CSS", "Ant Design", "Zoom SDK", "API Integration", "Performance Optimization", "Cursor AI"],
    highlights: [
      "Restructured both admin and client-side apps for DiveThru, a mental-health platform.",
      "Improved application performance by about 40% by reducing redundant API calls and improving component architecture.",
      "Managed bug fixes, system upgrades, API integration, and feature delivery with client and back-end teams.",
    ],
    jobType: "Full time (Hybrid)",
    location: "Mirpur DOHS, Dhaka",
    duration: { start: "April 2025", end: "May 2026" },
  },
  {
    role: "Software Engineer, L2",
    company: { name: "Technext IT Ltd.", link: "https://technext.it" },
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "HeroUI", "Mantine", "Jotai", "Stripe", "OpenAI API", "DALL-E", "Text-to-Speech", "Claude", "Gemini", "Perplexity AI", "Stable Diffusion", "Node.js", "MongoDB"],
    highlights: [
      "Owned front-end delivery on 14+ projects across in-house products and international client engagements.",
      "Collaborated remotely with US- and Canada-based teams on design-to-code conversion, API integration, code reviews, and deployment.",
      "Mentored a junior front-end developer through the company's internship program.",
    ],
    projects: [
      {
        name: "Quintix.ai",
        meta: "Montreal, Canada · Oct 2023 - Nov 2024",
        description:
          "Delivered client work including the Fuelcellsworks public site and admin panel with Next.js, HeroUI, Jotai, Stripe integration, and AI integrations such as OpenAI, DALL-E, text-to-speech, Claude, Gemini, Perplexity AI, Stable Diffusion, and Unsplash.",
      },
      {
        name: "99minds.io",
        meta: "New York, USA · Nov 2022 - Apr 2023",
        description:
          "Built gift-card dashboard, partner dashboard, and gift-card widget features with React, Redux, SCSS, Bootstrap, and Falcon theme. Also migrated the Pinstripes React project from Falcon theme to Tailwind CSS.",
      },
      {
        name: "Xeni",
        meta: "New York, USA · Nov 2021 - Oct 2022",
        description:
          "Built and maintained front-end features for XeniApp using React, TypeScript, Redux, FalconReact, and Bootstrap.",
      },
      {
        name: "In-house and agency products",
        meta: "USA, India, Portugal, Pakistan, Canada",
        description:
          "Worked on Linkedlogi, Zenith, Wise Clone, WeRaise, and Eventgee using React, Next.js, Bootstrap, Material UI, HeroUI, Mantine, Node.js, Express.js, and MongoDB.",
      },
    ],
    jobType: "Full time",
    location: "Mirpur Road, Dhaka",
    duration: { start: "November 2021", end: "April 2025" },
  },
  {
    role: "Front-end Developer",
    company: { name: "QCoom.com", link: "https://qcoom.com/" },
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Redux", "Tailwind CSS"],
    jobType: "Full time",
    location: "Dhaka, Bangladesh",
    duration: { start: "July 2021", end: "October 2021" },
  },
  {
    role: "Front-end Developer",
    company: { name: "Lotus Technology Development", link: "#" },
    skills: ["React.js", "JavaScript", "Redux", "Bootstrap", "Figma to HTML"],
    jobType: "Full time",
    location: "Dhaka, Bangladesh",
    duration: { start: "January 2021", end: "July 2021" },
  },
  {
    role: "Web Developer",
    company: { name: "Omicron IT Ltd.", link: "#" },
    skills: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript", "PSD to HTML", "XD to HTML", "Responsive Design"],
    highlights: [
      "Built and maintained web interfaces for Pruvit using HTML, CSS, and JavaScript.",
      "Converted PSD, XD, and Figma designs into responsive HTML templates.",
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