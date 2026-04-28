import PropTypes from "prop-types";
function TechItem({item}) {
  return (
    <div className="card-lift rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <a href={item.url} target="_blank" rel="noreferrer" className="flex items-center justify-center">
        <div className="h-12 w-12 sm:h-14 sm:w-14">
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
