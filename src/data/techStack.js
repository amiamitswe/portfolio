import BootstrapIcon from "../assets/icons/BootstrapIcon";
import Css3 from "../assets/icons/Css3";
import ExpressIcon from "../assets/icons/ExpressIcon";
import GitIcon from "../assets/icons/GitIcon";
import GithubIcon from "../assets/icons/Github";
import HTML5 from "../assets/icons/HTML5";
import JavaScript from "../assets/icons/JavaScript";
import MUIIcon from "../assets/icons/MUIIcon";
import MongoDBIcon from "../assets/icons/MongoDBIcon";
import NPMIcon from "../assets/icons/NPMIcon";
import NestJsIcon from "../assets/icons/NestJsIcon";
import NextJSIcon from "../assets/icons/NextJSIcon";
import NodeJsIcon from "../assets/icons/NodeJsIcon";
import PostManIcon from "../assets/icons/PostManIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import ReduxIcon from "../assets/icons/ReduxIcon";
import ScssIcon from "../assets/icons/ScssIcon";
import ShadcnIcon from "../assets/icons/ShadcnIcon";
import TailwindIcon from "../assets/icons/TailwindIcon";
import TypeScriptIcon from "../assets/icons/TypeScriptIcon";
import VSCodeIcon from "../assets/icons/VSCodeIcon";
import WebStormIcon from "../assets/icons/WebStormIcon";

// Tools shown in the "My Tech Stack" grid. `toolsInStack` in ./profile counts
// this list, so adding or removing an entry keeps the stat tiles correct.
export const techStack = [
  { id: 1, item: JavaScript, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: 2, item: TypeScriptIcon, name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { id: 3, item: ReactIcon, name: "React", url: "https://react.dev/" },
  { id: 4, item: NextJSIcon, name: "Next.js", url: "https://nextjs.org/" },
  { id: 5, item: ReduxIcon, name: "Redux", url: "https://redux.js.org/" },
  { id: 6, item: HTML5, name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: 7, item: Css3, name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { id: 8, item: ScssIcon, name: "Sass", url: "https://sass-lang.com/" },
  { id: 9, item: TailwindIcon, name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { id: 10, item: ShadcnIcon, name: "shadcn/ui", url: "https://ui.shadcn.com/" },
  { id: 11, item: BootstrapIcon, name: "Bootstrap", url: "https://getbootstrap.com/" },
  { id: 12, item: MUIIcon, name: "Material UI", url: "https://mui.com/" },
  { id: 13, item: GitIcon, name: "Git", url: "https://git-scm.com/" },
  { id: 14, item: GithubIcon, name: "GitHub", url: "https://github.com/" },
  { id: 15, item: VSCodeIcon, name: "VS Code", url: "https://code.visualstudio.com/" },
  { id: 16, item: WebStormIcon, name: "WebStorm", url: "https://www.jetbrains.com/webstorm/" },
  { id: 17, item: PostManIcon, name: "Postman", url: "https://www.postman.com/" },
  { id: 18, item: NodeJsIcon, name: "Node.js", url: "https://nodejs.org/" },
  { id: 19, item: ExpressIcon, name: "Express", url: "https://expressjs.com/" },
  { id: 20, item: NestJsIcon, name: "NestJS", url: "https://nestjs.com/" },
  { id: 21, item: MongoDBIcon, name: "MongoDB", url: "https://www.mongodb.com/" },
  { id: 22, item: NPMIcon, name: "npm", url: "https://www.npmjs.com/" },
];

export default techStack;
