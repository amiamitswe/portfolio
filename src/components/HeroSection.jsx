function HeroSection() {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8 lg:mt-[200px] mt-2">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-y-10 lg:gap-y-0">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-[58px] lg:leading-[70px] text-light-blue dark:text-gray4 ">
            Hi 👋, <br /> My name is <br />
            <span className="bg-gradient-to-l from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
              Amit Samadder
            </span>{" "}
            <br />I build things for web
          </h1>
        </div>
        <div>
          <div className="sm:h-[350px] sm:w-[350px] rounded-full bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] p-1">
            <img
              className="h-full w-full rounded-full border-8 border-transparent"
              src="https://avatars.githubusercontent.com/u/30245543?v=4"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
