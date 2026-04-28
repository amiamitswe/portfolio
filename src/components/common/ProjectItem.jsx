import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
function ProjectItem({ item }) {
  return (
    <article className="card-lift group relative flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={item.image}
          alt={item.title}
          className="h-64 w-full object-cover object-center transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {item?.techs.map((tech) => (
              <span
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300"
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
              className="inline-flex items-center gap-x-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-200"
            >
              Live Preview
              <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            {item.github ? (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-x-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
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
