import PropTypes from "prop-types";
import {
  AcademicCapIcon,
  BookOpenIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

function EduInstitute({ edu }) {
  let LogoIcon;
  if (edu.stage === "ssc") LogoIcon = PencilIcon;
  if (edu.stage === "hsc") LogoIcon = BookOpenIcon;
  if (edu.stage === "b.sc") LogoIcon = AcademicCapIcon;

  return (
    <div className="shadow-md border border-gray4 dark:border-gray1 rounded-lg p-5">
      <LogoIcon className="w-4/12 mx-auto mb-5 text-gray6 dark:text-gray1" />

      <div className="text-center text-gray1 dark:text-gray2">
        <p className="text-xl font-bold mb-2 uppercase">{edu.stage}</p>
        <p className="text-xl mb-2 text-body-dark dark:text-body-light uppercase">
          <a href={edu?.link} target="_blank" rel="noreferrer">
            {edu.institute}
          </a>
        </p>
        <p className="text-sm mb-1">{edu.location}</p>
        <p className="text-sm mb-1">{edu.group}</p>
        <p className="text-sm mb-1">{edu.passingYear}</p>
        <p className="text-sm">{edu.board}</p>
      </div>
    </div>
  );
}
EduInstitute.propTypes = {
  edu: PropTypes.object.isRequired,
};

export default EduInstitute;
