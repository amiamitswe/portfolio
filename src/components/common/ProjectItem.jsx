import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
function ProjectItem({ item }) {
  return (
    <article className="card-lift group relative overflow-hidden rounded-lg border border-slate-200 bg-white/90 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-sky-500/10 via-teal-400/10 to-rose-400/10" />
      <div className="relative p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
            {item.category}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            {item.impact}
          </span>
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-lg shadow-slate-950/5 dark:border-slate-800 dark:bg-slate-900">
          <img
            src={item.image}
            alt={item.title}
            className="h-72 w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between px-5 pb-5 sm:px-6 sm:pb-6">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {item?.techs.map((tech) => (
              <span
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="mb-3 text-2xl font-bold text-slate-950 dark:text-white">
            {item.title}
          </h3>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
            {item.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={item.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-x-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-200"
            >
              Live Preview
              <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            {item.github ? (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-x-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
              >
                View Code
                <CodeBracketIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
        </div>
      </div>
    </article>
  );
}

ProjectItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProjectItem;
