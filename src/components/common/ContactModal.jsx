import { Fragment, useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

// EmailJS IDs come from Vite env vars (see .env.example). The fallbacks are the
// current production values, so the form keeps working where none are set.
// EmailJS public keys are meant to ship to the browser, so this isn't a secret.
const service = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_h653wcf";
const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_krarq7i";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "FmIog3ElAtoaZQz-P";

export default function ContactModal({ open, setOpen }) {
  const form = useRef();
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);


  const sentEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(service, template, form.current, { publicKey })
      .then(
        (result) => {
          toast.success("Email sent successfully");
          console.log(result.text);
        },
        (error) => {
          toast.error("Failed to send email");
          console.log(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
        setOpen(false);
      });
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
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
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative w-full transform overflow-hidden rounded-lg border border-line bg-surface p-5 text-left shadow-2xl shadow-black/30 transition-all sm:my-8 sm:max-w-lg sm:p-6">
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-ink">
                    Contact
                  </p>
                  <DialogTitle className="mt-2 text-2xl font-bold text-fg">
                    Tell me about your project
                  </DialogTitle>
                  <p className="mt-2 text-sm leading-6 text-fg-muted">
                    Share a few details and I will get back to you with a clear next step.
                  </p>
                </div>
                <form ref={form} onSubmit={sentEmail}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-fg"
                    >
                      Your name <span className="text-[10px] text-accent-ink">(Required)</span>
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        type="text"
                        name="user_name"
                        id="name"
                        className="block w-full rounded-lg border-0 bg-surface-2 p-3 py-2.5 text-fg ring-1 ring-inset ring-line placeholder:text-fg-faint focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-fg"
                    >
                      Your email <span className="text-[10px] text-accent-ink">(Required)</span>
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        type="email"
                        name="user_email"
                        id="email"
                        className="block w-full rounded-lg border-0 bg-surface-2 p-3 py-2.5 text-fg ring-1 ring-inset ring-line placeholder:text-fg-faint focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-fg"
                    >
                      Message{" "}
                      <span className="text-[10px] text-accent-ink">(Required)</span>
                    </label>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        required
                        name="message"
                        id="message"
                        placeholder="Tell me a little about the project"
                        className="block w-full rounded-lg border-0 bg-surface-2 p-3 py-2.5 text-fg ring-1 ring-inset ring-line placeholder:text-fg-faint focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex w-full items-center justify-center gap-3 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg transition hover:brightness-95 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:col-start-2 ${
                        loading ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      Send{" "}
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : <PaperAirplaneIcon className="h-4" />}
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-lg bg-surface px-4 py-2.5 text-sm font-semibold text-fg ring-1 ring-inset ring-line-strong transition hover:bg-surface-2 sm:col-start-1 sm:mt-0"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

ContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
