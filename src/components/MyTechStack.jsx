import SectionTitle from "./common/SectionTitle";
import TechItem from "./common/TechItem";
import { techStack } from "../data/techStack";

function MyTechStack() {
  return (
    <section id="tech-stack" className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-5 sm:px-6 lg:mt-32 lg:px-8">
      <SectionTitle
        title="My Tech Stack"
        info="Technologies and tools I use across interface builds, API integration, and delivery workflows."
      />

      <div className="section-reveal grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
        {techStack?.map((item) => (
          <TechItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default MyTechStack;