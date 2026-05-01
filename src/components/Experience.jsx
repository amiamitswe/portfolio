import SectionTitle from "./common/SectionTitle";
import ExperienceItem from "./common/ExperianceItem";

const experiences = [
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
    duration: { start: "April 2025", end: "Present" },
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

function Experience() {
  const featuredExperiences = experiences.slice(0, 2);
  const earlierExperiences = experiences.slice(2);

  return (
    <section id="experience" className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle title="Experience" info="6.5+ years across product teams, client delivery, dashboards, web apps, and responsive front-end systems." />

      <div className="section-reveal relative mx-auto w-full lg:w-10/12">
        <div className="absolute bottom-6 left-4 top-6 hidden w-px bg-gradient-to-b from-sky-400 via-teal-300 to-rose-400 md:block" />
        {featuredExperiences?.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
        <div className="relative pl-0 md:pl-10">
          <span className="absolute left-[9px] top-7 hidden h-4 w-4 rounded-full border-4 border-white bg-teal-400 shadow-lg shadow-teal-400/30 dark:border-slate-950 md:block" />
          <div className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 sm:p-6">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-300">
                  Earlier Roles
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                  Front-end foundation across product and client teams
                </h3>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                2019 - 2022
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {earlierExperiences.map((experience) => (
                <div
                  key={`${experience.company.name}-${experience.duration.start}`}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-slate-950 dark:text-white">
                        {experience.role}
                      </p>
                      {experience.company.link && experience.company.link !== "#" ? (
                        <a
                          className="mt-1 block text-sm font-medium text-sky-600 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                          target="_blank"
                          rel="noreferrer"
                          href={experience.company.link}
                        >
                          {experience.company.name}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                          {experience.company.name}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 ring-1 ring-inset ring-slate-200 dark:bg-slate-950 dark:text-slate-400 dark:ring-slate-700">
                      {experience.jobType}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {experience.duration.start} - {experience.duration.end}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
