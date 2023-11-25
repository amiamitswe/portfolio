import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
function ProjectItem({ item }) {
  // const item = {
  //   image: "https://random.imagecdn.app/500/500",
  //   title: "Project Tile goes here",
  //   description:
  //     "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //   techs: ["HTML", "JavaScript", "SASS", "React"],
  // };
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray5 shadow-md">
      <div className="aspect-h-4 aspect-w-3 bg-white dark:bg-gray5 sm:aspect-none group-hover:opacity-75 sm:h-56 transition-all duration-200">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2">
        <div className="p-4 pb-0">
          <h3 className="text-[28px] leading-[26px] font-normal text-black dark:text-gray3 mb-4">{item.title}</h3>
          <p className="text-lg leading-[26px] text-gray1 dark:text-gray3 font-light mb-3">{item.description}</p>
          <p className="inline-block font-normal text-base text-light-blue dark:text-gray3">
            Tech stack :{" "}
            <span className="font-thin">{item?.techs.map((tech) => (
              <span className="inline-block mx-1" key={tech}>
                {tech}
              </span>
            ))}</span>
          </p>
        </div>


          <div className="mt-0 flex">
            <div className="flex w-0 flex-1">
              <a
                href={item.live} target="_blank" rel="noreferrer"
                className="inline-flex w-0 flex-1 items-center justify-center gap-x-3 py-4 text-base font-normal text-body-dark dark:text-gray-100 underline underline-offset-4"
              >
                <LinkIcon className="h-5 w-5 text-body-dark dark:text-gray-100" aria-hidden="true" />
                Live Preview
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={item.github || '#'} target="_blank" rel="noreferrer"
                className="inline-flex w-0 flex-1 items-center justify-center gap-x-3 py-4 text-base font-normal text-body-dark dark:text-gray-100 underline underline-offset-4"
                
              >
                <CodeBracketIcon className="h-5 w-5 text-body-dark dark:text-gray-100" aria-hidden="true" />
                View Code
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProjectItem;
