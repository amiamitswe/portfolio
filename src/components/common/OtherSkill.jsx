import CheckIcon from "./CheckIcon";
import PropTypes from "prop-types";

function OtherSkill({ skill }) {
  return (
    <div className={`text-light-blue dark:text-gray3 ${skill.lText ? 'sm:col-span-1 col-span-2' : 'col-span-1'}`}>
      <p className="flex items-start gap-x-4">
        <span><CheckIcon /></span>
        {skill.title}
      </p>
    </div>
  );
}

OtherSkill.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default OtherSkill;
