import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import GithubIcon from "../assets/icons/GithubIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import ThemeToggle from "./ThemeToggle";
import NavbarDialog from "./NavbarDialog";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Tech Stack", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-body-light dark:bg-body-dark shadow-sm  sticky top-0 z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray4"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-dm-sans text-xl font-medium leading-6 text-gray1 dark:text-gray2"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-x-3">
            <ThemeToggle />
            <GithubIcon />
            <TwitterIcon />
            <LinkedinIcon />
          </div>
        </div>
      </nav>

      <NavbarDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
