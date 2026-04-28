import SectionTitle from "./common/SectionTitle";

function AboutMe() {
  const aboutMe = [
    "Hello, I'm Amit Samadder, a front-end developer based in Bangladesh, and I'm thrilled to welcome you to my digital world. Armed with a BSc in Software Engineering from Daffodil International University, I've been navigating the realms of web development for over four years.",
    " My coding toolkit includes HTML, CSS, JavaScript, React, Next.js, and the artistry of Tailwind CSS. I specialize in crafting seamless, responsive user interfaces that marry form with function.",
    "Beyond the screen, I'm an avid explorer and visual storyteller. Traveling fuels my curiosity, and my lens captures the moments that words can't express. Movies and music are my downtime companions, offering the perfect escape into different worlds.",
    "At 28, I'm passionate about the convergence of technology and creativity. Every project is a canvas for innovation, a chance to weave a unique narrative. Join me in this journey of pixels and passion, where each line of code is a brushstroke, and together, we'll create digital landscapes that leave a lasting impression.",
  ];
  return (
    <section id="about" className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle title="About" info="A quick look at how I think, build, and collaborate" />

      <div className="section-reveal mx-auto grid max-w-4xl grid-cols-1 gap-5 rounded-lg border border-slate-200 bg-white/80 p-5 text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 sm:p-8">
        {aboutMe?.map((text, index) => (
          <p
            className="text-base leading-8"
            key={index}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
