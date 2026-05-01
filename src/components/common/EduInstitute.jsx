import PropTypes from "prop-types";
import {
  AcademicCapIcon,
  BookOpenIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

function EduInstitute({ edu }) {
  let LogoIcon;
  if (edu.stage === "SSC") LogoIcon = PencilIcon;
  if (edu.stage === "HSC") LogoIcon = BookOpenIcon;
  if (edu.stage === "B.Sc.") LogoIcon = AcademicCapIcon;

  return (
    <div className="card-lift rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <LogoIcon className="mx-auto mb-5 h-14 w-14 text-sky-600 dark:text-sky-300" />

      <div className="text-center text-slate-600 dark:text-slate-300">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">{edu.stage}</p>
        <p className="mb-3 text-lg font-bold uppercase text-slate-950 dark:text-white">
          <a className="hover:text-sky-600 dark:hover:text-sky-300" href={edu?.link} target="_blank" rel="noreferrer">
            {edu.institute}
          </a>
        </p>
        <p className="mb-1 text-sm">{edu.location}</p>
        <p className="mb-1 text-sm">{edu.group}</p>
        <p className="mb-1 text-sm">{edu.passingYear}</p>
        <p className="text-sm">{edu.board}</p>
      </div>
    </div>
  );
}
EduInstitute.propTypes = {
  edu: PropTypes.object.isRequired,
};

export default EduInstitute;
