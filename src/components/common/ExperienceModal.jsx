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
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity" />
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
              <DialogPanel className="relative flex max-h-[88vh] w-full max-w-2xl transform flex-col overflow-hidden rounded-lg border border-line bg-surface text-left shadow-2xl shadow-black/30 transition-all">
                <div className="flex items-start justify-between gap-3 border-b border-line p-5 sm:p-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
                      {experience?.role}
                    </p>
                    <DialogTitle className="mt-2 text-xl font-bold capitalize text-fg sm:text-2xl">
                      {hasCompanyLink ? (
                        <a
                          className="hover:text-accent-ink"
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
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-surface text-fg ring-1 ring-inset ring-line-strong transition hover:bg-surface-2"
                  >
                    <span className="sr-only">Close experience details</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto p-5 text-fg-muted sm:p-6">
                  <div className="grid gap-3 text-sm text-fg-subtle lg:grid-cols-[1fr_auto] lg:items-center">
                    <p className="flex items-start gap-x-2">
                      <MapPinIcon className="mt-0.5 h-5 flex-none" /> {experience?.location}
                    </p>
                    <p className="flex items-center gap-x-2 capitalize">
                      <CalendarIcon className="h-5 flex-none" /> {experience?.duration?.start} - {experience?.duration?.end}
                    </p>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-medium text-fg-muted">
                    <WindowIcon className="h-5" />
                    {experience?.jobType}
                  </p>

                  {experience?.highlights?.length ? (
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-fg-muted">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
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
                          className="rounded-lg border border-line bg-surface-2 p-4"
                        >
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm font-bold text-fg">
                              {project.name}
                            </p>
                            <span className="text-xs font-semibold text-accent-ink">
                              {project.meta}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-fg-muted">
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
                        className="inline-flex items-center rounded-md bg-chip px-2 py-1 text-xs font-medium capitalize text-fg-muted"
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