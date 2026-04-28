import PropTypes from "prop-types";

function SectionTitle({ title, info }) {
  return (
    <div className="section-reveal mx-auto mb-12 max-w-3xl text-center lg:mb-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300">
        Portfolio
      </p>
      <h2 className="mb-4 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">{info}</p>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default SectionTitle;
