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
    <div className="card-lift flex flex-col gap-5 rounded-[18px] border border-line bg-surface p-6 lg:rounded-[20px] lg:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line-strong bg-surface-2 text-accent-ink">
        <LogoIcon className="h-5.5 w-5.5" aria-hidden="true" />
      </div>

      <div className="text-fg-muted">
        <p className="eyebrow mb-2 text-accent-ink">{edu.stage}</p>
        <p className="mb-4 font-display text-[21px] font-bold leading-tight text-fg">
          <a className="transition-colors hover:text-accent-ink" href={edu?.link} target="_blank" rel="noreferrer">
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
