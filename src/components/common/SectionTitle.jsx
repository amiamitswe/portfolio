import PropTypes from "prop-types";

function SectionTitle({ title, info }) {
  return (
    <div className="text-center lg:mb-32 mb-24">
      <p className="text-4xl  lg:text-5xl lg:leading-[70px] font-bold lg:mb-8 mb-6 text-light-blue dark:text-gray3">
        {title}
      </p>
      <p className="lg:text-3xl text-2xl text-gray1 dark:text-gray2">{info}</p>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default SectionTitle;
