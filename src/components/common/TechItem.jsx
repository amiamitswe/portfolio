import PropTypes from "prop-types";
function TechItem({item}) {
  return (
    <div className="hover:lg:scale-150 cursor-pointer transform duration-200">
      <a href={item.url} target="_blank" rel="noreferrer">
        <item.item />
      </a>
    </div>
  );
}

TechItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default TechItem;
