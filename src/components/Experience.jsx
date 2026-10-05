import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./common/SectionTitle";
import ExperienceModal from "./common/ExperienceModal";
import { experiences, yearsOfExperienceLabel } from "../data/experiences";

// "November 2021" -> "Nov 2021"; "Present" stays as-is.
const shortDate = (value) => {
  const [month, year] = value.split(" ");
  return year ? `${month.slice(0, 3)} ${year}` : month;
};

function Experience() {
  const [detailOpen, setDetailOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(null);

  const openDetail = (experience) => {
    setActiveExperience(experience);
    setDetailOpen(true);
  };

  return (
    <section
      id="experience"
      className="mx-auto grid max-w-300 scroll-mt-24 gap-2 px-5 pt-16 sm:px-8 lg:grid-cols-3 lg:gap-12 lg:pt-35 xl:px-0"
    >
      <div className="lg:sticky lg:top-32 lg:self-start">
        <SectionTitle index="03" eyebrow="Experience" title="Where I’ve worked" />
        <p className="-mt-3 text-base leading-relaxed text-fg-subtle lg:-mt-6">
          {yearsOfExperienceLabel} years across product teams, client delivery,
          dashboards, web apps, and responsive frontend systems.
        </p>
      </div>

      <ol className="section-reveal mt-6 flex flex-col border-b border-line lg:col-span-2 lg:mt-0">
        {experiences.map((experience) => {
          const isCurrent = experience.duration.end.toLowerCase() === "present";

          return (
            <li
              key={`${experience.company.name}-${experience.duration.start}`}
              className="flex flex-col gap-2 border-t border-line py-5 sm:flex-row sm:gap-8 lg:py-7"
            >
              <span className="flex w-37.5 shrink-0 flex-col gap-2 pt-1.25 font-mono text-xs uppercase text-fg-subtle sm:text-[13px]">
                {shortDate(experience.duration.start)} -{" "}
                {shortDate(experience.duration.end)}
                {isCurrent ? (
                  <span className="w-fit rounded-full bg-accent px-2.5 py-0.5 text-[11px] text-accent-fg">
                    Current
                  </span>
                ) : null}
              </span>
              <div className="flex min-w-0 grow flex-col gap-2.5">
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
                  <h3 className="text-lg font-semibold text-fg lg:text-[21px]">
                    {experience.role}
                  </h3>
                  <span className="text-[15px] text-fg-subtle lg:text-base">
                    {experience.company.name} · {experience.jobType}
                  </span>
                </div>
                {experience.highlights?.length ? (
                  <ul className="flex flex-col gap-1.5 text-[15px] leading-[1.65] text-fg-muted">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5">
                        <span
                          className="mt-2.5 h-1 w-1 flex-none rounded-full bg-fg-faint"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[15px] leading-[1.65] text-fg-muted">
                    {experience.skills.join(" · ")}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => openDetail(experience)}
                  aria-label={`View details for ${experience.role} at ${experience.company.name}`}
                  className="group -my-1 inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-semibold text-accent-ink"
                >
                  View details
                  <ArrowUpRightIcon
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ol>

      <ExperienceModal
        open={detailOpen}
        setOpen={setDetailOpen}
        experience={activeExperience}
      />
    </section>
  );
}

export default Experience;
