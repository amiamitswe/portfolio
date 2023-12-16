import PropTypes from "prop-types";
import { CalendarIcon, MapPinIcon, WindowIcon } from "@heroicons/react/24/outline";


function ExperienceItem({experience}) {
  return (
    <div className="text-gray5 dark:text-gray3 border-b border-gray4 py-6 first:pt-0">
    <div className="flex md:flex-row flex-col md:justify-between md:gap-y-0 gap-y-2">
      <p className="text-xl text-gray1 dark:text-gray4 tracking-[1px] capitalize">
      <a className="hover:underline underline-offset-4 hover:cursor-pointer" target="_blank" rel="noreferrer" href={experience?.company?.link}>{experience?.company?.name}</a>
      </p>
      <span className={`inline-flex w-fit items-center rounded-md  px-2 py-1 text-sm font-medium  ring-1 ring-inset capitalize ${ experience?.jobType?.toLowerCase() === 'full time'? "text-green-700 dark:text-green-400 ring-green-600/20 dark:ring-green-500/20 bg-green-50 dark:bg-green-500/10" : "bg-blue-50 text-blue-700 ring-blue-700/10 dark:text-blue-400 dark:bg-blue-400/10 dark:ring-blue-400/30"}`}>
        {experience?.jobType}
      </span>
    </div>
    <div className="my-3 flex flex-wrap gap-2">
      {experience?.skills?.map(skill => <span key={skill} className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-400/10 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10 dark:ring-gray-400/20 capitalize">
        {skill}
      </span>)}
      
    </div>
    <div className="flex md:flex-row flex-col md:justify-between md:gap-y-0 gap-y-2 text-base font-light text-gray2 tracking-[1px]">
      <div className="flex md:flex-row flex-col md:justify-between md:gap-y-0 gap-y-2 md:pag-x-0 gap-x-10">
        <p className="flex items-center gap-x-2">
          <WindowIcon className="h-6" />{experience?.role}
        </p>
        <p className="flex items-center gap-x-2">
          <MapPinIcon className="h-6" /> {experience?.location}
        </p>
      </div>
      <p className="flex items-center gap-x-2 capitalize">
        <CalendarIcon className="h-6" /> {experience?.duration?.start} - {experience?.duration?.end}
      </p>
    </div>
  </div>
  )
}

ExperienceItem.propTypes = {
  experience: PropTypes.object.isRequired,
};


export default ExperienceItem