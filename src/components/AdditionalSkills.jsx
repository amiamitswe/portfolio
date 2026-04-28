import OtherSkill from "./common/OtherSkill";
import SectionTitle from "./common/SectionTitle";

function AdditionalSkills() {
  const additionalSkills = [
    { title: "Git" },
    { title: "Github" },
    { title: "Bitbucket" },
    { title: "GitLab" },
    { title: "VS code" },
    { title: "Webstorm" },
    { title: "MAC" },
    { title: "Linux" },
    { title: "Windows" },
    { title: "Teamwork" },
    { title: "Quick learning" },
    { title: "Client handling" },
    { title: "B2 english" },
    { title: "Communication skill", lText: true },
  ];
  return (
    <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle
        title="Additional Skills"
        info="Additional technologies and skills"
      />

      <div className="section-reveal mx-auto grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:w-9/12 lg:grid-cols-3">
        {additionalSkills?.map((skill) => (
          <OtherSkill key={skill.title} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default AdditionalSkills;
