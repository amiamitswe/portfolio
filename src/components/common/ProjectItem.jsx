import {
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

function ProjectItem({ item, index }) {
  return (
    <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white/90 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-sky-500/10 via-teal-400/10 to-rose-400/10 opacity-80" />
      <div className="relative p-3 sm:p-4">
        <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-950/25 dark:border-slate-800 dark:bg-slate-900">
          <a
            href={item.live}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-none absolute right-4 top-4 z-10 inline-flex translate-y-2 items-center gap-x-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-950 opacity-0 shadow-lg shadow-slate-950/20 transition duration-300 hover:bg-sky-50 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          >
            Live Preview
            <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <img
            src={item.image}
            alt={item.title}
            className="h-40 w-full object-cover object-top brightness-75 saturate-75 transition duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100 sm:h-44"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/10 shadow-inner shadow-slate-950/70 transition duration-500 group-hover:from-slate-950/20 group-hover:via-transparent group-hover:to-transparent group-hover:shadow-none" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-950 shadow-sm backdrop-blur dark:bg-slate-950/80 dark:text-white">
              {item.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                Project 0{index + 1}
              </p>
              <h3 className="mt-1 text-2xl font-bold leading-tight">
                {item.title}
              </h3>
            </div>
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold backdrop-blur">
              {item.year}
            </span>
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col justify-between px-5 pb-5 sm:px-6 sm:pb-6">
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
              <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {item.impact}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {item.type}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            {item.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {item?.techs.map((tech) => (
              <span
                className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-400/10"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}

ProjectItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
};

ProjectItem.defaultProps = {
  index: 0,
};

export default ProjectItem;
