import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ArrowDownTrayIcon, Bars2Icon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import NavbarDialog from "./NavbarDialog";
import Logo from "../assets/logo/Logo";
import { navigation, socialLinks } from "../data/profile";

const sectionIds = ["home", ...navigation.map((item) => item.href.slice(1))];

export default function Header({ onCvClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
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

      setActiveSection(currentSection);
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
    <header className="sticky top-0 z-30 border-b border-line-soft bg-canvas/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-17 max-w-300 items-center justify-between px-5 sm:px-8 lg:h-22 xl:px-0"
        aria-label="Global"
      >
        <a href="#home" className="text-fg">
          <span className="sr-only">Amit Samadder</span>
          <Logo />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(id)}
                aria-current={isActive ? "page" : undefined}
                className={`text-[15px] transition-colors ${
                  isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button
            type="button"
            onClick={onCvClick}
            className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-line-strong px-4.5 text-sm font-medium text-fg transition-colors hover:bg-surface"
          >
            Resume
            <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-line-strong bg-surface text-fg lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars2Icon className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>

      <NavbarDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
        socialLinks={socialLinks}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onCvClick={onCvClick}
      />
    </header>
  );
}

Header.propTypes = {
  onCvClick: PropTypes.func.isRequired,
};
