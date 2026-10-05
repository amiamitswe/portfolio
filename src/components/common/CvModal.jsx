import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const cvFileId = "1UBR7sFunnn08THMTbIXhoOc-HBSb_TIz";
const cvPreviewUrl = `https://drive.google.com/file/d/${cvFileId}/preview`;
const cvDownloadUrl = `https://drive.google.com/uc?export=download&id=${cvFileId}`;

function CvModal({ open, setOpen }) {
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
              <DialogPanel className="relative flex h-[88vh] w-full max-w-5xl transform flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-2xl shadow-black/30 transition-all">
                <div className="flex flex-col gap-3 border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-ink">
                      CV Preview
                    </p>
                    <DialogTitle className="mt-1 text-xl font-bold text-fg">
                      Amit Samadder Resume
                    </DialogTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={cvDownloadUrl}
                      download="Amit_Samadder_Resume.pdf"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg transition hover:brightness-95"
                    >
                      Download PDF
                      <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-fg ring-1 ring-inset ring-line-strong transition hover:bg-surface-2"
                    >
                      <span className="sr-only">Close CV preview</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="min-h-0 flex-1 bg-surface-2 p-3">
                  <iframe
                    title="Amit Samadder Resume PDF"
                    src={cvPreviewUrl}
                    className="h-full w-full rounded-lg border border-line bg-white"
                  />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

CvModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default CvModal;
