import { Fragment } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/logo/Logo";

function NavbarDialog({
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation,
  socialLinks,
  activeSection,
  setActiveSection,
  onContactClick,
}) {
  const handleContactClick = () => {
    setMobileMenuOpen(false);
    onContactClick();
  };

  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog as="div" className="xl:hidden" onClose={setMobileMenuOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80 z-10" />
        </Transition.Child>
        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-body-light dark:bg-body-dark p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#home" className="-m-1.5 p-1.5 text-slate-950 dark:text-white">
                  <span className="sr-only">Amit Samadder</span>
                  <Logo />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/100">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) =>
                      item.isAction ? (
                        <button
                          key={item.name}
                          type="button"
                          onClick={handleContactClick}
                          className="-mx-3 block w-full rounded-lg px-3 py-2 text-left text-base font-semibold leading-7 text-sky-600 hover:bg-slate-100 dark:text-sky-300 dark:hover:bg-slate-800"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            setActiveSection(item.href.replace("#", ""));
                            setMobileMenuOpen(false);
                          }}
                          aria-current={
                            activeSection === item.href.replace("#", "")
                              ? "page"
                              : undefined
                          }
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                            activeSection === item.href.replace("#", "")
                              ? "bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300"
                              : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                          }`}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                  <div className="py-6">
                    <div className="flex items-center justify-between gap-4">
                      <ThemeToggle />
                      <div className="flex items-center gap-2">
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                          <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={name}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-300"
                          >
                            <Icon />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

NavbarDialog.propTypes = {
  mobileMenuOpen: PropTypes.bool.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      isAction: PropTypes.bool,
    })
  ).isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    })
  ).isRequired,
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
  onContactClick: PropTypes.func.isRequired,
};

export default NavbarDialog;
