import PropTypes from "prop-types";

function Skill({ title, skill, focus, index }) {
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
    <div className="group rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-sky-500/50">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {title || "Skill"}
          </p>
          {focus ? (
            <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              {focus}
            </p>
          ) : null}
        </div>
        <div className="shrink-0 text-right">
          <p className="inline-flex w-fit items-center justify-center rounded-full bg-sky-50 px-4 py-1 text-[11px] font-bold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200">
            {skillCalculator}%
          </p>
          <p className="mt-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {skillStatus}
          </p>
        </div>
      </div>
      <div className="relative mx-4 h-2.5 overflow-hidden rounded-full bg-slate-200 shadow-inner dark:bg-slate-800">
        <span className="sr-only">
          {skillCalculator}%
        </span>
        <div
          className="skill-bar-fill absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-rose-500"
          style={{
            "--skill-width": `${skillCalculator}%`,
            "--skill-delay": `${index * 90}ms`,
          }}
        />
      </div>
    </div>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
  focus: PropTypes.string,
  index: PropTypes.number,
};

Skill.defaultProps = {
  focus: "",
  index: 0,
};

export default Skill;
