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
    <div className="max-w-7xl w-full mx-auto p-6 lg:px-8 lg:mt-[200px] mt-28">
      <SectionTitle title="Education" info="My Education Background" />

      <div className="lg:w-11/12 w-full mx-auto grid md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-3 gap-5">
        {educationTrack?.map((edu) => (
          <EduInstitute key={edu.stage} edu={edu} />
        ))}
      </div>
    </div>
  );
}

export default Education;
