import PropTypes from "prop-types";
import Logo from "../assets/logo/Logo";

const quickLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "About", href: "#about" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/amiamitswe" },
  { name: "Twitter", href: "https://twitter.com/amiamitswe" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/amiamitswe" },
];

function Footer({ onContactClick }) {
  return (
    <footer className="mx-auto max-w-7xl px-5 pb-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white/80 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              Front-end engineer building responsive interfaces, dashboards, and
              product experiences with React, Next.js, and Tailwind CSS.
            </p>
            <button
              type="button"
              onClick={onContactClick}
              className="mt-6 inline-flex rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-200"
            >
              Start a Conversation
            </button>
          </div>
          <div>
            <p className="font-dm-sans text-sm font-bold uppercase tracking-[0.2em] text-slate-950 dark:text-white">
              Explore
            </p>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-dm-sans text-sm font-bold uppercase tracking-[0.2em] text-slate-950 dark:text-white">
              Connect
            </p>
            <div className="mt-5 grid gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 px-6 py-5 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:px-8">
          <p>Built by Amit Samadder. Designed for fast, focused portfolio browsing.</p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  onContactClick: PropTypes.func.isRequired,
};

export default Footer;
