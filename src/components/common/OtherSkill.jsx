import CheckIcon from "./CheckIcon";
import PropTypes from "prop-types";

function OtherSkill({ title }) {
  return (
    <div className="text-light-blue dark:text-gray3">
      <p className="flex items-start gap-x-4">
        <span><CheckIcon /></span>
        {title}
      </p>
    </div>
  );
}

OtherSkill.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OtherSkill;
