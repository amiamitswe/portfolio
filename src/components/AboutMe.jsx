import SectionTitle from "./common/SectionTitle";

function AboutMe() {
  const aboutMe = [
    "Hello, I'm Amit Samadder, a front-end developer based in Bangladesh, and I'm thrilled to welcome you to my digital world. Armed with a BSc in Software Engineering from Daffodil International University, I've been navigating the realms of web development for over four years.",
    " My coding toolkit includes HTML, CSS, JavaScript, React, Next.js, and the artistry of Tailwind CSS. I specialize in crafting seamless, responsive user interfaces that marry form with function.",
    "Beyond the screen, I'm an avid explorer and visual storyteller. Traveling fuels my curiosity, and my lens captures the moments that words can't express. Movies and music are my downtime companions, offering the perfect escape into different worlds.",
    "At 28, I'm passionate about the convergence of technology and creativity. Every project is a canvas for innovation, a chance to weave a unique narrative. Join me in this journey of pixels and passion, where each line of code is a brushstroke, and together, we'll create digital landscapes that leave a lasting impression.",
  ];
  return (
    <div className="max-w-7xl w-full mx-auto p-6 lg:px-8 lg:mt-[200px] mt-28">
      <SectionTitle title="About" info="Info About Myself" />

      <div className="grid grid-cols-1 gap-5 text-gray5 dark:text-gray3 ">
        {aboutMe?.map((text, index) => (
          <p
            className="lg:text-lg text-base text-justify"
            key={index}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
