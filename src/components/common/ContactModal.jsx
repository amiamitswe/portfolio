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
          toast.success("Email sent successful");
          console.log(result.text);
        },
        (error) => {
          toast.error("Email sent failed");
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
        className="relative z-20"
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-body-light dark:bg-body-dark px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 w-full">
                <form ref={form} onSubmit={sentEmail}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
                    >
                      Your Name <span className="text-[10px]">(Required)</span>
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        type="text"
                        name="user_name"
                        id="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-50 bg-gray4 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                        placeholder="Your name please"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
                    >
                      Your Email <span className="text-[10px]">(Required)</span>
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        type="email"
                        name="user_email"
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-50 bg-gray4 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400"
                    >
                      Add your Message{" "}
                      <span className="text-[10px]">(Required)</span>
                    </label>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        required
                        name="message"
                        id="message"
                        placeholder="Message"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-50 bg-gray4 dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex w-full items-center gap-3 justify-center rounded-md bg-gradient-to-l from-[#13B0F5] to-[#E70FAA] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:from-[#E70FAA] hover:to-[#13B0F5]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-start-2 ${
                        loading ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      Sent{" "}
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
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-body-light dark:bg-gray-700 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
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
