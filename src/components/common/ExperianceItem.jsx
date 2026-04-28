import PropTypes from "prop-types";
import { CalendarIcon, MapPinIcon, WindowIcon } from "@heroicons/react/24/outline";

function ExperienceItem({ experience }) {
  const isCurrent = experience?.duration?.end?.toLowerCase() === "continue";

  return (
    <div className="relative mb-5 pl-0 last:mb-0 md:pl-10">
      <span className="absolute left-[9px] top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-lg shadow-sky-500/30 dark:border-slate-950 md:block" />
      <div className="card-lift rounded-lg border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300 sm:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">
              {experience?.role}
            </p>
            <p className="mt-2 text-xl font-bold capitalize text-slate-950 dark:text-white">
              <a
                className="hover:text-sky-600 dark:hover:text-sky-300"
                target="_blank"
                rel="noreferrer"
                href={experience?.company?.link}
              >
                {experience?.company?.name}
              </a>
            </p>
          </div>
          <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ring-1 ring-inset ${isCurrent ? "bg-sky-50 text-sky-700 ring-sky-600/20 dark:bg-sky-500/10 dark:text-sky-300 dark:ring-sky-500/20" : "bg-slate-100 text-slate-600 ring-slate-600/10 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-500/20"}`}>
            {isCurrent ? "Current" : experience?.jobType}
          </span>
        </div>
        <div className="mt-5 grid gap-3 text-sm text-slate-500 dark:text-slate-400 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="flex items-start gap-x-2">
            <MapPinIcon className="mt-0.5 h-5 flex-none" /> {experience?.location}
          </p>
          <p className="flex items-center gap-x-2 capitalize">
            <CalendarIcon className="h-5 flex-none" /> {experience?.duration?.start} - {experience?.duration?.end}
          </p>
        </div>
        <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-medium text-slate-600 dark:text-slate-300">
          <WindowIcon className="h-5" />
          {experience?.jobType}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {experience?.skills?.slice(0, 10).map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium capitalize text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-400/20"
            >
              {skill}
            </span>
          ))}
          {experience?.skills?.length > 10 ? (
            <span className="inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-700 ring-1 ring-inset ring-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300">
              +{experience.skills.length - 10} more
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

ExperienceItem.propTypes = {
  experience: PropTypes.object.isRequired,
};


export default ExperienceItem;
