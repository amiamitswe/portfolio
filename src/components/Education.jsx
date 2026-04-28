import SectionTitle from "./common/SectionTitle";
import EduInstitute from "./common/EduInstitute";

const educationTrack = [
  {
    stage: "ssc",
    institute: "Harta Secondary School",
    location:"Location: Harta, Barisal",
    link: "https://www.facebook.com/HartaSchool/",
    group: "Group: Science",
    passingYear: "Passing Year: 2010 - 2011",
    board: "Board: Barishal",
  },
  {
    stage: "hsc",
    institute: "Shahid smrity degree college",
    location:"Location: Swarupkathi, Barisal",
    link: "https://www.facebook.com/SSDcollege10381/",
    group: "Group: Science",
    passingYear: "Passing Year: 2012 - 2013",
    board: "Board: Barishal",
  },
  {
    stage: "b.sc",
    institute: "Daffodil international university",
    location:"Location: Dhanmonid-32, Dhaka",
    link: "https://daffodilvarsity.edu.bd/",
    group: "DEP: Software Engineering",
    passingYear: "Passing Year: 2018",
    board: "Dhaka",
  },
];

function Education() {
  return (
    <section className="mx-auto my-24 max-w-7xl px-5 sm:px-6 lg:my-32 lg:px-8">
      <SectionTitle title="Education" info="Academic foundation behind my engineering work" />

      <div className="section-reveal mx-auto grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:w-11/12">
        {educationTrack?.map((edu) => (
          <EduInstitute key={edu.stage} edu={edu} />
        ))}
      </div>
    </section>
  );
}

export default Education;
