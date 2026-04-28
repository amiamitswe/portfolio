import CheckIcon from "./CheckIcon";
import PropTypes from "prop-types";

function OtherSkill({ skill, index }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white/80 p-4 text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-sky-500/50">
      <div className="absolute -right-8 -top-10 h-20 w-20 rounded-full bg-sky-400/10 blur-2xl transition duration-300 group-hover:bg-teal-300/20" />
      <div className="relative flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-500/10 dark:bg-sky-400/10 dark:text-sky-300">
          <CheckIcon />
        </span>
        <div>
          <p className="text-sm font-bold text-slate-950 dark:text-white">
            {skill.title}
          </p>
          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
            Skill {String(index + 1).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
}

OtherSkill.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
};

OtherSkill.defaultProps = {
  index: 0,
};

export default OtherSkill;
