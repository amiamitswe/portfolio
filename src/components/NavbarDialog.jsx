import { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/logo/Logo";

function NavbarDialog({
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation,
  socialLinks,
  activeSection,
  setActiveSection,
  onCvClick,
}) {
  const handleCvClick = () => {
    setMobileMenuOpen(false);
    onCvClick();
  };

  return (
    <Transition show={mobileMenuOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileMenuOpen}>
        <TransitionChild
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-40 bg-black/70" />
        </TransitionChild>
        <div className="fixed inset-0 z-50 flex justify-end">
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="flex h-full w-full flex-col overflow-y-auto border-l border-line bg-canvas px-5 pb-8 sm:max-w-sm">
              <div className="flex h-17 items-center justify-between">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-fg">
                  <Logo />
                </a>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-line-strong bg-surface text-fg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flex flex-col border-t border-line">
                {navigation.map((item) => {
                  const id = item.href.slice(1);
                  const isActive = activeSection === id;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveSection(id);
                        setMobileMenuOpen(false);
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-14 items-center border-b border-line font-display text-2xl font-bold ${
                        isActive ? "text-accent-ink" : "text-fg"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleCvClick}
                className="mt-8 inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-accent text-[15px] font-semibold text-accent-fg"
              >
                Download resume
                <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="mt-auto flex items-center justify-between gap-4 pt-10">
                <ThemeToggle />
                <div className="flex items-center gap-1">
                  {socialLinks.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-fg-subtle transition-colors hover:text-fg"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

NavbarDialog.propTypes = {
  mobileMenuOpen: PropTypes.bool.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
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
  onCvClick: PropTypes.func.isRequired,
};

export default NavbarDialog;
