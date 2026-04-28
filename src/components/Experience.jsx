import SectionTitle from "./common/SectionTitle";
import ExperienceItem from "./common/ExperianceItem";

const experiences = [
   {
    role: "Software Engineer",
    company: { name: "TechCare® Inc.", link: "https://techcare.co/" },
    skills: ["React.JS","JavaScript","TypeScript","Next.JS","Zoom SDK Integration","Mental Helth Treatment Appointment Booking System","CSS","SCSS","Tailwind-CSS","Shadcn","Ant Design","Figma to html","Cursor AI", "node.js","express.js","mongodb"],
    jobType: "Full time (Hybrid)",
    location: "Level:08, House:1005,1007, Avenue:11, Road:09 Dhaka 1216",
    duration: { start: "April 2025", end: "Continue" },
  },
  {
    role: "Software Engineer",
    company: { name: "Technext IT LTD", link: "https://technext.it" },
    skills: ["React.JS","Next.JS","JavaScript","TypeScript","CSS","Tailwind-CSS","bootstrap","Falcon-react","Material UI","Maintain js","Figma to html", "node.js","express.js","mongodb"],
    jobType: "Full time",
    location:
      "Shyamoli, Dhaka, Bangladesh-1207",
    duration: { start: "November 2021", end: "April 2025" },
  },
  {
    role: "Front-End Engineer",
    company: { name: "99minds.io (remote)", link: "https://99minds.io" },
    skills: ["React.JS","JavaScript","TypeScript","Tailwind-CSS","bootstrap","Figma to html"],
    jobType: "Part time",
    location:
      "New York, NY 10065, United States",
    duration: { start: "October 2022", end: "April 2023" },
  },
  {
    role: "Front-End Engineer",
    company: { name: "xeniapp (remote)", link: "https://www.xeni.com/" },
    skills: ["React.JS","JavaScript","TypeScript","Redux","bootstrap","falcon react","Figma to html"],
    jobType: "full time",
    location:
      "New York, NY 10023, United States",
    duration: { start: "november 2021", end: "October 2022" },
  },
  {
    role: "Front-End Developer",
    company: { name: "qcoom.com", link: "https://qcoom.com/" },
    skills: ["Next.JS","JavaScript","TypeScript","Redux","tailwind-css","Figma to html"],
    jobType: "full time",
    location:
      "Niketon, Dhaka, Bangladesh-1208",
    duration: { start: "July 2021", end: "October 2021" },
  },
  {
    role: "Front-End Developer",
    company: { name: "Lotus Technology development", link: "#" },
    skills: ["React.JS","JavaScript","Redux","bootstrap","Figma to html"],
    jobType: "full time",
    location:
      "Kobi Faruk Sarani, Dhaka 1229",
    duration: { start: "January 2021", end: "July 2021" },
  },
  {
    role: "Web Developer",
    company: { name: "Omicron IT LTD", link: "#" },
    skills: ["html","css","scss","bootstrap","javascript","Figma to html","psd to html","xd to html","responsive design"],
    jobType: "full time",
    location:
      "Mirpur DOHS, Dhaka 1216",
    duration: { start: "March 2019", end: "August 2020" },
  },
];

function Experience() {
  const featuredExperiences = experiences.slice(0, 3);
  const earlierExperiences = experiences.slice(3);

  return (
    <section id="experience" className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle title="Experience" info="Recent roles in detail, with earlier front-end work kept compact for easier scanning." />

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
                  Front-end foundation across startups and product teams
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
