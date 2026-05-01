import { AtSymbolIcon, CloudArrowDownIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";
import headerProfileImage from "../assets/images/header-profile.png";

function HeroSection({ onContactClick, onCvClick }) {
  return (
    <section
      id="home"
      className="section-reveal relative mx-auto max-w-7xl scroll-mt-24 px-5 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-200">
            Front-end Engineer in Dhaka
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            I build polished, responsive web products with{" "}
            <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-rose-500 bg-clip-text text-transparent">
              React
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            I am Amit Samadder, a front-end developer focused on clean UI,
            scalable component systems, and fast product experiences.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-x-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-200"
            >
              Get in Touch
              <AtSymbolIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onCvClick}
              className="inline-flex items-center justify-center gap-x-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-800"
            >
              View CV
              <CloudArrowDownIcon
                className="-mr-0.5 h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute inset-x-8 bottom-0 top-10 rounded-lg border border-slate-200 bg-white/70 shadow-2xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900/70" />
          <div className="relative rounded-lg border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
              <div className="mx-auto aspect-square max-w-[360px] rounded-full bg-gradient-to-b from-sky-400 via-teal-300 to-rose-400 p-1">
                <img
                  className="h-full w-full rounded-full border-8 border-white object-cover dark:border-slate-900"
                  src={headerProfileImage}
                  alt="Amit Samadder"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 text-center">
              <div>
                <p className="text-lg font-bold text-slate-950 dark:text-white">
                  React
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">UI</p>
              </div>
              <div>
                <p className="text-lg font-bold text-slate-950 dark:text-white">
                  Next.js
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Apps</p>
              </div>
              <div>
                <p className="text-lg font-bold text-slate-950 dark:text-white">
                  Tailwind
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  onContactClick: PropTypes.func.isRequired,
  onCvClick: PropTypes.func.isRequired,
};

export default HeroSection;
