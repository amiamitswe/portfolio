import SectionTitle from "./common/SectionTitle";
import Skill from "./common/Skill";

function MySkills() {
  const skills = [
    { title: "React", skillLabel: 90 },
    { title: "JavaScript", skillLabel: 85 },
    { title: "Next-JS & TypeScript", skillLabel: 65 },
    { title: "HTML, figma to html", skillLabel: 90 },
    { title: "CSS, bootstrap, tailwind css", skillLabel: 90 },
    { title: "Node & Express", skillLabel: 50 },
    { title: "Mongodb", skillLabel: 40 },
  ];
  return (
    <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle title="My Skills" info="My expertise in technology" />
      <div className="section-reveal mx-auto grid w-full gap-5 rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:w-10/12 lg:p-8">
        {skills?.map((skill) => (
          <Skill
            key={skill.title}
            title={skill.title}
            skill={skill.skillLabel}
          />
        ))}
      </div>
    </section>
  );
}

export default MySkills;
