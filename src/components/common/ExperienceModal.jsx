import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  CalendarIcon,
  MapPinIcon,
  WindowIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

function ExperienceModal({ open, setOpen, experience }) {
  const hasCompanyLink =
    Boolean(experience?.company?.link) && experience?.company?.link !== "#";

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={setOpen}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative flex max-h-[88vh] w-full max-w-2xl transform flex-col overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-2xl shadow-slate-950/20 transition-all dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-start justify-between gap-3 border-b border-slate-200 p-5 dark:border-slate-800 sm:p-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">
                      {experience?.role}
                    </p>
                    <DialogTitle className="mt-2 text-xl font-bold capitalize text-slate-950 dark:text-white sm:text-2xl">
                      {hasCompanyLink ? (
                        <a
                          className="hover:text-sky-600 dark:hover:text-sky-300"
                          target="_blank"
                          rel="noreferrer"
                          href={experience?.company?.link}
                        >
                          {experience?.company?.name}
                        </a>
                      ) : (
                        experience?.company?.name
                      )}
                    </DialogTitle>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white text-slate-700 shadow-xs ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800"
                  >
                    <span className="sr-only">Close experience details</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto p-5 text-slate-700 dark:text-slate-300 sm:p-6">
                  <div className="grid gap-3 text-sm text-slate-500 dark:text-slate-400 lg:grid-cols-[1fr_auto] lg:items-center">
                    <p className="flex items-start gap-x-2">
                      <MapPinIcon className="mt-0.5 h-5 flex-none" /> {experience?.location}
                    </p>
                    <p className="flex items-center gap-x-2 capitalize">
                      <CalendarIcon className="h-5 flex-none" /> {experience?.duration?.start} - {experience?.duration?.end}
                    </p>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <WindowIcon className="h-5" />
                    {experience?.jobType}
                  </p>

                  {experience?.highlights?.length ? (
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {experience?.projects?.length ? (
                    <div className="mt-5 grid gap-3">
                      {experience.projects.map((project) => (
                        <div
                          key={project.name}
                          className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80"
                        >
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm font-bold text-slate-950 dark:text-white">
                              {project.name}
                            </p>
                            <span className="text-xs font-semibold text-sky-600 dark:text-sky-300">
                              {project.meta}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience?.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium capitalize text-slate-600 ring-1 ring-inset ring-slate-500/10 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

ExperienceModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  experience: PropTypes.object,
};

export default ExperienceModal;