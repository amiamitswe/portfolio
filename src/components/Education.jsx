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
    passingYear: "Duration: 2014 - 2018",
    board: "Dhaka",
  },
];

function Education() {
  return (
    <section id="education" className="mx-auto max-w-300 scroll-mt-24 px-5 pt-16 sm:px-8 lg:pt-35 xl:px-0">
      <SectionTitle index="06" eyebrow="Education" title="Education" info="Academic foundation behind my software engineering work." />

      <div className="section-reveal grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {educationTrack?.map((edu) => (
          <EduInstitute key={edu.stage} edu={edu} />
        ))}
      </div>
    </section>
  );
}

export default Education;
