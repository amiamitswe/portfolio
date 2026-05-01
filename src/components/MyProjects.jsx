import ProjectItem from "./common/ProjectItem";
import SectionTitle from "./common/SectionTitle";
import weraiseImage from "../assets/images/project/weraise.png";
import wiseImage from "../assets/images/project/wise.png";
import ingenieroWebImage from "../assets/images/project/ingeniero-web.png";

function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "WeRaise",
      image: weraiseImage,
      description:
        "A fundraising dashboard interface with responsive data views, clean navigation, and reusable React UI patterns.",
      techs: ["React.js", "Bootstrap", "Falcon React"],
      category: "Dashboard UI",
      impact: "Admin experience",
      year: "2023",
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
      techs: ["React.js", "CSS", "Bootstrap", "Falcon React"],
      category: "Payment Flow",
      impact: "Conversion UI",
      year: "2023",
      type: "Web App",
      github:'',
      live: 'https://falcon-react-wise-wizard.vercel.app/'
    },
    {
      id: 3,
      title: "Ingeniero Web",
      image: ingenieroWebImage,
      description:
        "A Spanish-language dashboard website refreshed by converting existing features into cleaner layouts, responsive screens, and Falcon UI patterns.",
      techs: ["HTML", "CSS", "SCSS", "Falcon UI"],
      category: "Spanish Website",
      impact: "Feature refresh",
      year: "2023",
      type: "Dashboard UI",
      github:'',
      live: 'https://amit-ingeniero-web.netlify.app/'
    },
  ];
  return (
    <section id="projects" className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle title="Featured Projects" info="Selected UI builds with responsive layouts, polished interactions, and production-ready front-end structure." />

      <div className="section-reveal grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projects?.map((project, index) => (
          <ProjectItem key={project.id} item={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
