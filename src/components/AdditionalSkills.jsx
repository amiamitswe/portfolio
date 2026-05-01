import OtherSkill from "./common/OtherSkill";
import SectionTitle from "./common/SectionTitle";

function AdditionalSkills() {
  const additionalSkills = [
    { title: "Git" },
    { title: "GitHub" },
    { title: "Bitbucket" },
    { title: "GitLab" },
    { title: "VS Code" },
    { title: "WebStorm" },
    { title: "macOS" },
    { title: "Linux" },
    { title: "Windows" },
    { title: "Team collaboration" },
    { title: "Fast learning" },
    { title: "Client communication" },
    { title: "B2 English" },
    { title: "Code reviews" },
  ];
  return (
    <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-6 lg:mt-28 lg:px-8">
      <SectionTitle
        title="Additional Skills"
        info="Tools, workflows, and collaboration habits that support my day-to-day engineering work."
      />

      <div className="section-reveal mx-auto grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:w-10/12 lg:grid-cols-4">
        {additionalSkills?.map((skill, index) => (
          <OtherSkill key={skill.title} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

export default AdditionalSkills;
