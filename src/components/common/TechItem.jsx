import PropTypes from "prop-types";
function TechItem({item}) {
  return (
    <div className="hover:lg:scale-150 cursor-pointer transform duration-200">
      <a href={item.url} target="_blank" rel="noreferrer">
        <div className="lg:h-[100px] sm:h-[80px] h-[50px] lg:w-[100px] sm:w-[80px] w-[50px]">
        <item.item />
        </div>
      </a>
    </div>
  );
}

TechItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default TechItem;
