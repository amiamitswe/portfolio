import SectionTitle from "./common/SectionTitle";
import ExperienceItem from "./common/ExperianceItem";

const experiences = [
   {
    role: "Software Engineer",
    company: { name: "TechCare® Inc.", link: "https://techcare.co/" },
    skills: ["React.JS","JavaScript","TypeScript","Next.JS","Zoom SDK Integration","Mental Helth Treatment Appointment Booking System","CSS","SCSS","Tailwind-CSS","Shadcn","Ant Design","Figma to html","Cursor AI", "node.js","express.js","mongodb"],
    jobType: "Full time (Hybrid)",
    location: "Level:08, House:1005,1007, Avenue:11, Road:09 Dhaka 1216",
    duration: { start: "April 2025", end: "Continue" },
  },
  {
    role: "Software Engineer",
    company: { name: "Technext IT LTD", link: "https://technext.it" },
    skills: ["React.JS","Next.JS","JavaScript","TypeScript","CSS","Tailwind-CSS","bootstrap","Falcon-react","Material UI","Maintain js","Figma to html", "node.js","express.js","mongodb"],
    jobType: "Full time",
    location:
      "Shyamoli, Dhaka, Bangladesh-1207",
    duration: { start: "November 2021", end: "April 2025" },
  },
  {
    role: "Front-End Engineer",
    company: { name: "99minds.io (remote)", link: "https://99minds.io" },
    skills: ["React.JS","JavaScript","TypeScript","Tailwind-CSS","bootstrap","Figma to html"],
    jobType: "Part time",
    location:
      "New York, NY 10065, United States",
    duration: { start: "October 2022", end: "April 2023" },
  },
  {
    role: "Front-End Engineer",
    company: { name: "xeniapp (remote)", link: "https://www.xeni.com/" },
    skills: ["React.JS","JavaScript","TypeScript","Redux","bootstrap","falcon react","Figma to html"],
    jobType: "full time",
    location:
      "New York, NY 10023, United States",
    duration: { start: "november 2021", end: "October 2022" },
  },
  {
    role: "Front-End Developer",
    company: { name: "qcoom.com", link: "https://qcoom.com/" },
    skills: ["Next.JS","JavaScript","TypeScript","Redux","tailwind-css","Figma to html"],
    jobType: "full time",
    location:
      "Niketon, Dhaka, Bangladesh-1208",
    duration: { start: "July 2021", end: "October 2021" },
  },
  {
    role: "Front-End Developer",
    company: { name: "Lotus Technology development", link: "#" },
    skills: ["React.JS","JavaScript","Redux","bootstrap","Figma to html"],
    jobType: "full time",
    location:
      "Kobi Faruk Sarani, Dhaka 1229",
    duration: { start: "January 2021", end: "July 2021" },
  },
  {
    role: "Web Developer",
    company: { name: "Omicron IT LTD", link: "#" },
    skills: ["html","css","scss","bootstrap","javascript","Figma to html","psd to html","xd to html","responsive design"],
    jobType: "full time",
    location:
      "Mirpur DOHS, Dhaka 1216",
    duration: { start: "March 2019", end: "August 2020" },
  },
];

function Experience() {
  return (
    <div className="max-w-7xl w-full mx-auto p-6 lg:px-8 lg:mt-[200px] mt-28">
      <SectionTitle title="Experience" info="My Working Experience" />

      <div className="lg:w-10/12 w-full mx-auto">
        {experiences?.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
