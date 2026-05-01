import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Bars3Icon } from "@heroicons/react/24/outline";
import GithubIcon from "../assets/icons/GithubIcon";
import XIcon from "../assets/icons/XIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import ThemeToggle from "./ThemeToggle";
import NavbarDialog from "./NavbarDialog";
import Logo from "../assets/logo/Logo";

const navigation = [
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact", isAction: true },
];

const activeSectionMap = {
  skills: "tech-stack",
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/amiamitswe",
    icon: GithubIcon,
  },
  {
    name: "X",
    href: "https://x.com/amiamitswe",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amiamitswe",
    icon: LinkedinIcon,
  },
];

export default function Header({ onContactClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "tech-stack",
      "skills",
      "experience",
      "projects",
      "about",
    ];

    let frameId;

    const updateActiveSection = () => {
      const offsetPosition = window.scrollY + 140;
      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= offsetPosition) {
          currentSection = id;
        }
      });

      setActiveSection(activeSectionMap[currentSection] || currentSection);
    };

    const handleScroll = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/85">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <a href="#home" className="-m-1.5 p-1.5 text-slate-950 dark:text-white">
          <span className="sr-only">Amit Samadder</span>
          <Logo />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-5">
          {navigation.map((item) =>
            item.isAction ? (
              <button
                key={item.name}
                type="button"
                id="contact"
                onClick={onContactClick}
                className="rounded-full bg-slate-950 px-4 py-2 font-dm-sans text-sm font-semibold leading-6 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-200"
              >
                {item.name}
              </button>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.href.replace("#", ""))}
                aria-current={
                  activeSection === item.href.replace("#", "")
                    ? "page"
                    : undefined
                }
                className={`rounded-full px-3 py-2 font-dm-sans text-sm font-semibold leading-6 transition ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-300"
                }`}
              >
                {item.name}
              </a>
            )
          )}
          <div className="flex items-center gap-x-3 border-l border-slate-200 pl-5 dark:border-slate-700">
            <ThemeToggle />
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </nav>

      <NavbarDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
        socialLinks={socialLinks}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onContactClick={onContactClick}
      />
    </header>
  );
}

Header.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};
