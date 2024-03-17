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
    <div className="max-w-7xl w-full mx-auto p-6 lg:px-8 lg:mt-[200px] mt-28">
      <SectionTitle title="My Skills" info="My expertise in technology" />
      <div className="lg:w-10/12 w-full mx-auto ">
        {skills?.map((skill) => (
          <Skill
            key={skill.title}
            title={skill.title}
            skill={skill.skillLabel}
          />
        ))}
      </div>
    </div>
  );
}

export default MySkills;
