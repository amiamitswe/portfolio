import SectionTitle from "./common/SectionTitle";
import headerProfileImage from "../assets/images/header-profile.jpg";
import { yearsOfExperienceLabel } from "../data/experiences";
import { projectsDeliveredLabel, toolsInStackLabel } from "../data/profile";

const aboutMe = [
  "I am Amit Samadder, a senior frontend engineer based in Bangladesh with a B.Sc. in Software Engineering from Daffodil International University. I build responsive, production-friendly interfaces with a strong eye for layout, consistency, and real user workflows.",
  "My day-to-day toolkit includes React, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, and shadcn/ui. I have collaborated remotely with US and Canada-based product teams, and I enjoy turning Figma designs into clean component systems that are easy to maintain and comfortable across devices.",
  "Outside the editor, travel, photography, movies, and music keep my creative side active. That mix of engineering and visual curiosity helps me care about both how a product works and how it feels.",
];

const highlights = [
  { value: yearsOfExperienceLabel, label: "Years building web UI" },
  { value: toolsInStackLabel, label: "Tools in active stack" },
  { value: projectsDeliveredLabel, label: "Projects delivered" },
];

function AboutMe() {
  return (
    <section
      id="about"
      className="mx-auto max-w-300 scroll-mt-24 px-5 pt-16 sm:px-8 lg:pt-35 xl:px-0"
    >
      <SectionTitle
        index="05"
        eyebrow="About"
        title="About"
        info="A quick look at how I think, build, and collaborate."
      />

      <div className="section-reveal grid overflow-hidden rounded-[22px] border border-line bg-surface lg:grid-cols-[0.8fr_1.2fr] lg:rounded-[28px]">
        <div className="bg-surface-2 p-6 sm:p-10 lg:p-12">
          <div className="mx-auto aspect-square max-w-90 overflow-hidden rounded-[18px] border border-line-strong bg-canvas lg:max-w-none">
            <img
              className="profile-zoom h-full w-full object-cover"
              src={headerProfileImage}
              alt="Amit Samadder"
              width="800"
              height="800"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col gap-5 text-base leading-[1.75] text-fg-muted lg:text-[17px]">
            {aboutMe.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
          <dl className="mt-auto grid grid-cols-3 border-t border-line pt-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1.5 border-l border-line pl-4 first:border-l-0 first:pl-0 sm:pl-6"
              >
                <dt className="order-2 font-mono text-[11px] uppercase text-fg-subtle sm:text-xs">
                  {item.label}
                </dt>
                <dd className="font-display text-3xl font-bold tracking-[-0.02em] text-fg sm:text-4xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
