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

  const skillCalculator = skill <= 100 ? skill < 0 ? 0: skill : 100

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center px-4">
        <p className="text-light-blue dark:text-gray4 lg:text-lg text-sm mb-2">
          {title || "Skill"}
        </p>
        <p className="text-light-blue dark:text-gray4 lg:text-lg text-sm mb-2">{skillStatus}</p>
      </div>
      <div className="w-full h-[20px] bg-light-blue relative rounded-xl overflow-hidden">
        <span className="text-sm text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {skillCalculator}%
        </span>
        <div
          className="absolute top-0 left-0 h-[20px] bg-gradient-to-r from-[#E70FAA] to-[#00C0FD] rounded-xl overflow-hidden transition-all ease-in-out duration-100"
          style={{ width: `${skillCalculator}%` }}
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
