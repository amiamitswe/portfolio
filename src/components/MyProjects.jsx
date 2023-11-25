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
    <div className="max-w-7xl w-full mx-auto p-6 lg:px-8 lg:mt-[200px] mt-28">
      <SectionTitle title="Projects" info="Things I’ve built so far" />

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects?.map((project) => (
          <ProjectItem key={project.id} item={project} />
        ))}
        {/* <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem /> */}
      </div>
    </div>
  );
}

export default MyProjects;
