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
    { title: "Communication skill" },
  ];
  return (
    <section className="mx-auto mt-24 max-w-7xl px-5 sm:px-6 lg:mt-28 lg:px-8">
      <SectionTitle
        title="Additional Skills"
        info="Tools, workflows, and collaboration strengths I use around my main stack."
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
