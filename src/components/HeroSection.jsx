function HeroSection() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mt-[200px]">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="font-bold text-[58px] leading-[70px] text-light-blue dark:text-gray4">
            Hi 👋, <br /> My name is <br />
            <span className="bg-gradient-to-l from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
              Amit Samadder
            </span>{" "}
            <br />I build things for web
          </h1>
        </div>
        <div>
          <div className="h-[350px] w-[350px] rounded-full bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] p-1">
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
