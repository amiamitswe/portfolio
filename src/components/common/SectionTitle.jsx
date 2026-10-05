import PropTypes from "prop-types";

function SectionTitle({ index, eyebrow, title, info }) {
  return (
    <div className="section-reveal mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10 lg:mb-12">
      <div className="flex flex-col gap-3.5">
        <span className="eyebrow text-accent-ink">
          {index} · {eyebrow}
        </span>
        <h2 className="font-display text-[32px] font-bold leading-[1.05] tracking-[-0.02em] text-fg sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {info ? (
        <p className="max-w-105 text-base leading-relaxed text-fg-subtle">
          {info}
        </p>
      ) : null}
    </div>
  );
}

SectionTitle.propTypes = {
  index: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
};

export default SectionTitle;
