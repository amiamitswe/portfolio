import BootstrapIcon from "../assets/icons/BootstrapIcon";
import Css3 from "../assets/icons/Css3";
import GitIcon from "../assets/icons/GitIcon";
import GithubIcon from "../assets/icons/Github";
import HTML5 from "../assets/icons/HTML5";
import JavaScript from "../assets/icons/JavaScript";
import MUIIcon from "../assets/icons/MUIIcon";
import MongoDBIcon from "../assets/icons/MongoDBIcon";
import NPMIcon from "../assets/icons/NPMIcon";
import NextJSIcon from "../assets/icons/NextJSIcon";
import NodeJsIcon from "../assets/icons/NodeJsIcon";
import PostManIcon from "../assets/icons/PostManIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import ReduxIcon from "../assets/icons/ReduxIcon";
import ScssIcon from "../assets/icons/ScssIcon";
import TailwindIcon from "../assets/icons/TailwindIcon";
import VSCodeIcon from "../assets/icons/VSCodeIcon";
import WebStormIcon from "../assets/icons/WebStormIcon";
import SectionTitle from "./common/SectionTitle";
import TechItem from "./common/TechItem";

function MyTechStack() {
  const techItem = [
    {
      id: 1,
      item: HTML5,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      item: Css3,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      item: JavaScript,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { id: 4, item: ReactIcon, url: "https://reactjs.org/" },
    { id: 5, item: NextJSIcon, url: "https://nextjs.org/" },
    { id: 6, item: ReduxIcon, url: "https://redux.js.org/" },
    { id: 7, item: ScssIcon, url: "https://sass-lang.com/" },
    { id: 8, item: TailwindIcon, url: "https://tailwindcss.com/" },
    { id: 9, item: BootstrapIcon, url: "https://getbootstrap.com/" },
    { id: 10, item: MUIIcon, url: "https://mui.com/" },
    { id: 11, item: GitIcon, url: "https://git-scm.com/" },
    { id: 12, item: GithubIcon, url: "https://github.com/" },
    { id: 13, item: VSCodeIcon, url: "https://code.visualstudio.com/" },
    { id: 14, item: WebStormIcon, url: "https://www.jetbrains.com/webstorm/" },
    { id: 15, item: PostManIcon, url: "https://www.postman.com/" },
    { id: 16, item: NodeJsIcon, url: "https://nodejs.org/" },
    { id: 17, item: MongoDBIcon, url: "https://www.mongodb.com/" },
    { id: 18, item: NPMIcon, url: "https://www.npmjs.com/" },
  ];

  return (
    <div className="max-w-7xl w-full mx-auto p-6 lg:px-8 lg:mt-[200px] mt-28">
      <SectionTitle
        title="My Tech Stack"
        info="Technologies I’ve been working with recently"
      />

      <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-8 place-items-center">
        {techItem?.map((item) => (
          <TechItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MyTechStack;
