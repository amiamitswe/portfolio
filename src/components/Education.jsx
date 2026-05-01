import SectionTitle from "./common/SectionTitle";
import EduInstitute from "./common/EduInstitute";

const educationTrack = [
  {
    stage: "SSC",
    institute: "Harta Secondary School",
    location:"Location: Harta, Barishal",
    link: "https://www.facebook.com/HartaSchool/",
    group: "Group: Science",
    passingYear: "Passing Year: 2011",
    board: "Board: Barishal",
  },
  {
    stage: "HSC",
    institute: "Shahid Smriti Degree College",
    location:"Location: Swarupkathi, Barishal",
    link: "https://www.facebook.com/SSDcollege10381/",
    group: "Group: Science",
    passingYear: "Passing Year: 2013",
    board: "Board: Barishal",
  },
  {
    stage: "B.Sc.",
    institute: "Daffodil International University",
    location:"Location: Dhanmondi 32, Dhaka",
    link: "https://daffodilvarsity.edu.bd/",
    group: "Department: Software Engineering",
    passingYear: "Passing Year: 2018",
    board: "Dhaka",
  },
];

function Education() {
  return (
    <section id="education" className="mx-auto my-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:my-32 lg:px-8">
      <SectionTitle title="Education" info="Academic foundation behind my software engineering work." />

      <div className="section-reveal mx-auto grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:w-11/12">
        {educationTrack?.map((edu) => (
          <EduInstitute key={edu.stage} edu={edu} />
        ))}
      </div>
    </section>
  );
}

export default Education;
