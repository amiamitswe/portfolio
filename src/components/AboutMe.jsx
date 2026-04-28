import SectionTitle from "./common/SectionTitle";

function AboutMe() {
  const aboutMe = [
    "I am Amit Samadder, a front-end developer based in Bangladesh with a BSc in Software Engineering from Daffodil International University. I build responsive, production-friendly interfaces with a strong eye for layout, consistency, and real user workflows.",
    "My day-to-day toolkit includes HTML, CSS, JavaScript, React, Next.js, TypeScript, and Tailwind CSS. I enjoy turning Figma designs into clean component systems that are easy to maintain and comfortable to use across devices.",
    "Outside the editor, travel, photography, movies, and music keep my creative side active. That mix of engineering and visual curiosity helps me care about both how a product works and how it feels.",
  ];

  const highlights = [
    { value: "5+", label: "Years building web UI" },
    { value: "18", label: "Tools in active stack" },
    { value: "36", label: "Public repositories" },
  ];

  return (
    <section id="about" className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle title="About" info="A quick look at how I think, build, and collaborate" />

      <div className="section-reveal mx-auto grid max-w-6xl gap-6 rounded-lg border border-slate-200 bg-white/80 p-5 text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300 sm:p-8 lg:grid-cols-[1fr_0.45fr]">
        <div className="grid gap-5">
          {aboutMe?.map((text, index) => (
            <p
              className="text-base leading-8"
              key={index}
            >
              {text}
            </p>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80"
            >
              <p className="font-dm-sans text-3xl font-bold text-slate-950 dark:text-white">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
