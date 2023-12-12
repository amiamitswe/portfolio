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
    <div className="max-w-7xl w-full mx-auto p-6 lg:px-8 lg:mt-[200px] mt-28">
      <SectionTitle
        title="Additional Skills"
        info="Additional technologies and skills"
      />

      <div className="lg:w-9/12 w-full mx-auto grid md:grid-cols-3 grid-cols-2 gap-4">
        {additionalSkills?.map((skill) => (
          <OtherSkill key={skill.title} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default AdditionalSkills;
