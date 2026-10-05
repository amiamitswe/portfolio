import SectionTitle from "./common/SectionTitle";

const skills = [
  { title: "React & JavaScript", skillLabel: 90, focus: "Component systems and interactive UI" },
  { title: "Next.js & TypeScript", skillLabel: 70, focus: "Production apps" },
  { title: "HTML & Figma to HTML", skillLabel: 90, focus: "Pixel-ready markup" },
  { title: "Tailwind, Bootstrap & CSS", skillLabel: 90, focus: "Responsive styling" },
  { title: "Node, Express & NestJS", skillLabel: 55, focus: "API foundations" },
  { title: "MongoDB", skillLabel: 45, focus: "Data modeling" },
  { title: "AI Coding & API Integration", skillLabel: 65, focus: "AI-assisted coding and API implementation" },
];

const featuredSkills = ["React.js", "Next.js", "JavaScript", "Redux Toolkit", "Tailwind CSS", "shadcn/ui", "TanStack Table", "React Hook Form"];

const additionalSkills = [
  "Git",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "npm",
  "Yarn",
  "pnpm",
  "Postman",
  "Agile / Scrum",
  "Claude Code",
  "Cursor",
  "Codex",
  "VS Code",
  "WebStorm",
  "macOS",
  "Linux",
  "Team collaboration",
  "Fast learning",
  "Client communication",
  "B2 English",
  "Code reviews",
];

// Self-rated levels (0-100) are grouped into tiers instead of shown as bars.
const tiers = [
  { label: "Expert", min: 85 },
  { label: "Proficient", min: 65 },
  { label: "Familiar", min: 0 },
].map((tier, index, all) => ({
  ...tier,
  skills: skills.filter(
    (skill) =>
      skill.skillLabel >= tier.min &&
      (index === 0 || skill.skillLabel < all[index - 1].min)
  ),
}));

const cardClass =
  "flex flex-col gap-4.5 rounded-[18px] border border-line bg-surface p-6 lg:rounded-[20px] lg:p-8";

function MySkills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-300 scroll-mt-24 px-5 pt-16 sm:px-8 lg:pt-35 xl:px-0"
    >
      <SectionTitle
        index="04"
        eyebrow="Toolkit"
        title="My Skills"
        info="A compact view of the skills I use to build clean, responsive frontend products."
      />

      <div className="section-reveal grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div className={cardClass}>
          <h3 className="font-mono text-xs uppercase text-fg-faint">Core stack</h3>
          <p className="font-display text-2xl font-bold leading-tight text-fg lg:text-[28px]">
            Frontend craft with practical full-stack support.
          </p>
          <p className="max-w-130 text-[15px] leading-relaxed text-fg-muted">
            I focus on component architecture, REST API integration, and
            responsive, cross-browser interfaces, and use AI dev tools like
            Claude Code and Cursor to ship faster.
          </p>
          <ul className="flex flex-wrap gap-2">
            {featuredSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-[10px] bg-accent/15 px-3.5 py-2 text-sm font-medium text-accent-ink"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={cardClass}>
          <h3 className="font-mono text-xs uppercase text-fg-faint">
            Additional skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {additionalSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-[10px] bg-chip px-3.5 py-2 text-sm text-fg"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${cardClass} lg:col-span-2`}>
          <h3 className="font-mono text-xs uppercase text-fg-faint">Proficiency</h3>
          <div className="grid gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
            {tiers.map((tier) => (
              <div key={tier.label} className="flex flex-col gap-4 md:px-8 md:first:pl-0 md:last:pr-0">
                <p className="flex items-center gap-2 text-sm font-semibold text-fg">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      tier.label === "Expert"
                        ? "bg-accent"
                        : tier.label === "Proficient"
                          ? "bg-accent/50"
                          : "bg-line-strong"
                    }`}
                    aria-hidden="true"
                  />
                  {tier.label}
                </p>
                <ul className="flex flex-col gap-3.5">
                  {tier.skills.map((skill) => (
                    <li key={skill.title} className="flex flex-col gap-0.5">
                      <span className="text-[15px] font-medium text-fg">{skill.title}</span>
                      <span className="text-[13px] text-fg-subtle">{skill.focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
