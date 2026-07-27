import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./common/SectionTitle";
import ExperienceItem from "./common/ExperianceItem";
import ExperienceModal from "./common/ExperienceModal";
import { experiences, yearsOfExperienceLabel } from "../data/experiences";

function Experience() {
  const featuredExperiences = experiences.slice(0, 2);
  const earlierExperiences = experiences.slice(2);
  const [detailOpen, setDetailOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(null);

  const openDetail = (experience) => {
    setActiveExperience(experience);
    setDetailOpen(true);
  };

  return (
    <section id="experience" className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle title="Experience" info={`${yearsOfExperienceLabel} years across product teams, client delivery, dashboards, web apps, and responsive front-end systems.`} />

      <div className="section-reveal relative mx-auto w-full lg:w-10/12">
        <div className="absolute bottom-6 left-4 top-6 hidden w-px bg-linear-to-b from-sky-400 via-teal-300 to-rose-400 md:block" />
        {featuredExperiences?.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
        <div className="relative pl-0 md:pl-10">
          <span className="absolute left-[9px] top-7 hidden h-4 w-4 rounded-full border-4 border-white bg-teal-400 shadow-lg shadow-teal-400/30 dark:border-slate-950 md:block" />
          <div className="rounded-lg border border-slate-200 bg-white/80 p-5 shadow-xs backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/70 sm:p-6">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-300">
                  Earlier Roles
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                  Front-end foundation across product and client teams
                </h3>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                2019 - 2025
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {earlierExperiences.map((experience) => (
                <button
                  type="button"
                  key={`${experience.company.name}-${experience.duration.start}`}
                  onClick={() => openDetail(experience)}
                  aria-label={`View details for ${experience.role} at ${experience.company.name}`}
                  className="group w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-left transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-sky-500/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-slate-950 dark:text-white">
                        {experience.role}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-500 group-hover:text-sky-600 dark:text-slate-400 dark:group-hover:text-sky-300">
                        {experience.company.name}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 ring-1 ring-inset ring-slate-200 dark:bg-slate-950 dark:text-slate-400 dark:ring-slate-700">
                      {experience.jobType}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {experience.duration.start} - {experience.duration.end}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-300">
                      View details
                      <ArrowUpRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ExperienceModal
        open={detailOpen}
        setOpen={setDetailOpen}
        experience={activeExperience}
      />
    </section>
  );
}

export default Experience;
