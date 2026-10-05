import { techStack } from "./techStack";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import XIcon from "../assets/icons/XIcon";

// Single source of truth for the numbers shown in the stat tiles.

// Derived from ./techStack so the tiles never drift out of sync with the grid.
export const toolsInStack = techStack.length;
export const toolsInStackLabel = `${toolsInStack}`;

// Not derived — update this by hand as more work ships.
export const projectsDelivered = 14;
export const projectsDeliveredLabel = `${projectsDelivered}+`;

export const email = "amiamitswe@gmail.com";

// Shared by the header, mobile menu, and footer.
export const socialLinks = [
  { name: "GitHub", href: "https://github.com/amiamitswe", icon: GithubIcon },
  { name: "X", href: "https://x.com/amiamitswe", icon: XIcon },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amiamitswe",
    icon: LinkedinIcon,
  },
];

export const navigation = [
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];
