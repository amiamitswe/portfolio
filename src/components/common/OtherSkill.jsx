import CheckIcon from "./CheckIcon";
import PropTypes from "prop-types";

function OtherSkill({ skill }) {
  return (
    <div className={`rounded-lg border border-slate-200 bg-white/80 p-4 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 ${skill.lText ? 'sm:col-span-1' : 'col-span-1'}`}>
      <p className="flex items-start gap-x-3 text-sm font-medium sm:text-base">
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
