import { useState } from "react";
import PropTypes from "prop-types";
import { Bars3Icon } from "@heroicons/react/24/outline";
import GithubIcon from "../assets/icons/GithubIcon";
import XIcon from "../assets/icons/XIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import ThemeToggle from "./ThemeToggle";
import NavbarDialog from "./NavbarDialog";
import Logo from "../assets/logo/Logo";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact", isAction: true },
];

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
        <div className="hidden lg:flex items-center lg:gap-x-8">
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
                className="font-dm-sans text-sm font-semibold leading-6 text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
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
                className="inline-flex rounded-md p-1 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:hover:bg-slate-800"
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
        onContactClick={onContactClick}
      />
    </header>
  );
}

Header.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};
