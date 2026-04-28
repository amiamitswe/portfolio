import PropTypes from "prop-types";
import { CalendarIcon, MapPinIcon, WindowIcon } from "@heroicons/react/24/outline";

function ExperienceItem({ experience }) {
  return (
    <div className="card-lift mb-4 rounded-lg border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm last:mb-0 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 sm:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <p className="text-lg font-bold capitalize text-slate-950 dark:text-white sm:text-xl">
          <a
            className="hover:text-sky-600 dark:hover:text-sky-300"
            target="_blank"
            rel="noreferrer"
            href={experience?.company?.link}
          >
            {experience?.company?.name}
          </a>
        </p>
        <span className={`inline-flex w-fit items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset capitalize ${experience?.jobType?.toLowerCase() === "full time" ? "bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/20" : "bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"}`}>
          {experience?.jobType}
        </span>
      </div>
      <div className="my-3 flex flex-wrap gap-2">
        {experience?.skills?.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium capitalize text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-400/20"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-x-8">
          <p className="flex items-center gap-x-2">
            <WindowIcon className="h-5" />
            {experience?.role}
          </p>
          <p className="flex items-center gap-x-2">
            <MapPinIcon className="h-5" /> {experience?.location}
          </p>
        </div>
        <p className="flex items-center gap-x-2 capitalize">
          <CalendarIcon className="h-5" /> {experience?.duration?.start} - {experience?.duration?.end}
        </p>
      </div>
    </div>
  );
}

ExperienceItem.propTypes = {
  experience: PropTypes.object.isRequired,
};


export default ExperienceItem;
