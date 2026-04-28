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
        "A dashboard-focused fundraising interface with responsive data views, clean navigation, and reusable React UI patterns.",
      techs: ["reactjs", "bootstrap", "react falcon theme"],
      category: "Dashboard UI",
      impact: "Admin experience",
      year: "2024",
      type: "Dashboard",
      github:'',
      live: 'https://amit-weraise.netlify.app/'
    },
    {
      id: 2,
      title: "Wise Clone",
      image: wiseImage,
      description:
        "A payment flow interface inspired by Wise, focused on multi-step UX, currency inputs, and polished responsive layouts.",
      techs: ["reactjs", "css", "bootstrap", "react falcon theme"],
      category: "Payment Flow",
      impact: "Conversion UI",
      year: "2024",
      type: "Web App",
      github:'',
      live: 'https://falcon-react-wise-wizard.vercel.app/'
    },
  ];
  return (
    <section id="projects" className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle title="Featured Projects" info="Selected UI builds with responsive layouts, polished interactions, and production-ready structure." />

      <div className="section-reveal grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects?.map((project, index) => (
          <ProjectItem key={project.id} item={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
