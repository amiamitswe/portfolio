import SectionTitle from "./common/SectionTitle";
import Skill from "./common/Skill";

function MySkills() {
  const skills = [
    { title: "React", skillLabel: 90, focus: "Component systems" },
    { title: "JavaScript", skillLabel: 85, focus: "Interactive UI" },
    { title: "Next.js & TypeScript", skillLabel: 70, focus: "Production apps" },
    { title: "HTML & Figma to HTML", skillLabel: 90, focus: "Pixel-ready markup" },
    { title: "CSS, Bootstrap & Tailwind", skillLabel: 90, focus: "Responsive styling" },
    { title: "Node & Express", skillLabel: 55, focus: "API foundations" },
    { title: "MongoDB", skillLabel: 45, focus: "Data modeling" },
    { title: "AI Coding & API Integration", skillLabel: 65, focus: "AI-assisted coding and API implementation" },
  ];

  const featuredSkills = ["JavaScript", "React", "Next.js", "Tailwind"];

  return (
    <section
      id="skills"
      className="mx-auto mt-24 max-w-7xl px-5 sm:px-6 lg:mt-32 lg:px-8"
    >
      <SectionTitle
        title="My Skills"
        info="A compact view of the skills I use to build clean, responsive front-end products."
      />
      <div className="section-reveal mx-auto grid w-full gap-6 rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 lg:w-11/12 lg:grid-cols-[0.85fr_1.35fr] lg:p-7">
        <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-sm dark:border-slate-700">
          <div className="absolute -right-12 -top-14 h-36 w-36 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -bottom-16 left-6 h-32 w-32 rounded-full bg-teal-300/20 blur-3xl" />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
            Core Stack
          </p>
          <h3 className="relative mt-4 font-dm-sans text-2xl font-bold leading-tight">
            Front-end craft with practical full-stack support.
          </h3>
          <p className="relative mt-4 text-sm leading-7 text-slate-300">
            I focus on scalable React interfaces, responsive layouts, and
            fast handoff from design to production.
          </p>
          <div className="relative mt-6 flex flex-wrap gap-2">
            {featuredSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {skills?.map((skill, index) => (
            <Skill
              key={skill.title}
              title={skill.title}
              skill={skill.skillLabel}
              focus={skill.focus}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySkills;
