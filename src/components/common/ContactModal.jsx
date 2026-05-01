import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function ContactModal({ open, setOpen }) {
  const form = useRef();
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const service = "service_h653wcf";
  const template = "template_krarq7i";
  const publicKey = "FmIog3ElAtoaZQz-P";

  const sentEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(service, template, form.current, publicKey)
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg border border-slate-200 bg-white p-5 text-left shadow-2xl shadow-slate-950/20 transition-all dark:border-slate-800 dark:bg-slate-950 sm:my-8 sm:max-w-lg sm:p-6">
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
                    Contact
                  </p>
                  <Dialog.Title className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                    Tell me about your project
                  </Dialog.Title>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Share a few details and I will get back to you with a clear next step.
                  </p>
                </div>
                <form ref={form} onSubmit={sentEmail}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200"
                    >
                      Your name <span className="text-[10px] text-sky-600 dark:text-sky-300">(Required)</span>
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        type="text"
                        name="user_name"
                        id="name"
                        className="block w-full rounded-lg border-0 bg-slate-50 p-3 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 dark:bg-slate-900 dark:text-white dark:ring-slate-700 dark:placeholder:text-slate-500 sm:text-sm sm:leading-6"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200"
                    >
                      Your email <span className="text-[10px] text-sky-600 dark:text-sky-300">(Required)</span>
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        type="email"
                        name="user_email"
                        id="email"
                        className="block w-full rounded-lg border-0 bg-slate-50 p-3 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 dark:bg-slate-900 dark:text-white dark:ring-slate-700 dark:placeholder:text-slate-500 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200"
                    >
                      Message{" "}
                      <span className="text-[10px] text-sky-600 dark:text-sky-300">(Required)</span>
                    </label>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        required
                        name="message"
                        id="message"
                        placeholder="Tell me a little about the project"
                        className="block w-full rounded-lg border-0 bg-slate-50 p-3 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 dark:bg-slate-900 dark:text-white dark:ring-slate-700 dark:placeholder:text-slate-500 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex w-full items-center justify-center gap-3 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-200 sm:col-start-2 ${
                        loading ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      Send{" "}
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
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
                      className="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:ring-slate-700 dark:hover:bg-slate-800 sm:col-start-1 sm:mt-0"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

ContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
