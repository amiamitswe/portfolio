import PropTypes from "prop-types";

function Skill({ title, skill }) {
  let skillStatus;
  if (skill < 50) {
    skillStatus = "New";
  }
  if (skill >= 50) {
    skillStatus = "Beginner";
  }
  if (skill >= 60) {
    skillStatus = "Intermediate";
  }
  if (skill >= 70) {
    skillStatus = "Expert";
  }
  if (skill >= 90) {
    skillStatus = "Advanced";
  }

  const skillCalculator = skill <= 100 ? skill < 0 ? 0 : skill : 100;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-base">
          {title || "Skill"}
        </p>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{skillStatus}</p>
      </div>
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <span className="sr-only">
          {skillCalculator}%
        </span>
        <div
          className="animate-skill-fill absolute left-0 top-0 h-3 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-rose-500"
          style={{ "--skill-width": `${skillCalculator}%` }}
        />
      </div>
    </div>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
};

export default Skill;
