import ProjectItem from "./common/ProjectItem";
import SectionTitle from "./common/SectionTitle";
import weraiseImage from "../assets/images/project/weraise.png";
import wiseImage from "../assets/images/project/wise.png";

function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "WeRaise",
      image: weraiseImage,
      description:
        "WeRaise, worked on front-end, dashboard using reactjs, bootstrap, and react falcon theme",
      techs: ["reactjs", "bootstrap", "react falcon theme"],
      github:'',
      live: 'https://amit-weraise.netlify.app/'
    },
    {
      id: 2,
      title: "Wise Clone",
      image: wiseImage,
      description:
        "Wise clone, worked on front-end, clone the wise site (payment system ui) using reactjs, bootstrap, react falcon theme",
      techs: ["reactjs", "css", "bootstrap", "react falcon theme"],
      github:'',
      live: 'https://falcon-react-wise-wizard.vercel.app/'
    },
  ];
  return (
    <section id="projects" className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle title="Featured Projects" info="Selected product interfaces and front-end builds" />

      <div className="section-reveal grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects?.map((project) => (
          <ProjectItem key={project.id} item={project} />
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
