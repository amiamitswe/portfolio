import { AtSymbolIcon, CloudArrowDownIcon } from "@heroicons/react/20/solid";
import ContactModal from "./common/ContactModal";
import { useState } from "react";

function HeroSection() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <div className="mx-auto max-w-7xl p-6 lg:px-8 2xl:mt-[200px] lg:mt-[100px] mt-2">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-y-10 lg:gap-y-0">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-[58px] lg:leading-[70px] text-light-blue dark:text-gray4 ">
            Hi 👋, <br /> My name is <br />
            <span className="bg-gradient-to-l from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
              Amit Samadder
            </span>{" "}
            <br />I build things for web
          </h1>
          <div className="flex gap-4 mt-10">
            <button
              type="button"
              onClick={()=> setOpen(true)}
              className="rounded-lg inline-flex items-center gap-x-1.5 bg-gradient-to-l from-[#13B0F5] to-[#E70FAA] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-[#E70FAA] hover:to-[#13B0F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get In Touch
              <AtSymbolIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
            <a href="https://drive.google.com/file/d/1HsgytT4oruUbui_Pnr7UHHXGhD4pKS8A/view?usp=sharing&export=download" download="Amit Samadder"
              target="_blank"
              rel="noreferrer"
              className="rounded-full inline-flex items-center gap-x-1.5 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Download CV
              <CloudArrowDownIcon
                className="-mr-0.5 h-5 w-5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="lg:h-[450px] lg:w-[450px] sm:h-[350px] sm:w-[350px] rounded-full bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] p-1">
            <img
              className="h-full w-full rounded-full border-8 border-transparent"
              src="https://avatars.githubusercontent.com/u/30245543?v=4"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
    <ContactModal open={open} setOpen={setOpen} />
    </>
  );
}

export default HeroSection;
