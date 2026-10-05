import PropTypes from "prop-types";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./common/SectionTitle";
import weraiseImage from "../assets/images/project/weraise.png";
import wiseImage from "../assets/images/project/wise.png";
import ingenieroWebImage from "../assets/images/project/ingeniero-web.jpg";

function MyProjects() {
  const projects = [
    {
      id: 1,
      title: "WeRaise",
      image: weraiseImage,
      description:
        "A fundraising dashboard interface with responsive data views, clean navigation, and reusable React UI patterns.",
      techs: ["React.js", "Bootstrap", "Falcon React"],
      category: "Dashboard UI",
      impact: "Admin experience",
      year: "2023",
      type: "Dashboard",
      github:'',
      live: 'https://amit-weraise.netlify.app/'
    },
    {
      id: 2,
      title: "Wise Clone",
      image: wiseImage,
      description:
        "A payment flow interface inspired by Wise, focused on multi-step UX, currency inputs, and polished responsive layouts.",
      techs: ["React.js", "CSS", "Bootstrap", "Falcon React"],
      category: "Payment Flow",
      impact: "Conversion UI",
      year: "2023",
      type: "Web App",
      github:'',
      live: 'https://falcon-react-wise-wizard.vercel.app/'
    },
    {
      id: 3,
      title: "Ingeniero Web",
      image: ingenieroWebImage,
      description:
        "A Spanish-language dashboard website refreshed by converting existing features into cleaner layouts, responsive screens, and Falcon UI patterns.",
      techs: ["HTML", "CSS", "SCSS", "Falcon UI"],
      category: "Spanish Website",
      impact: "Feature refresh",
      year: "2023",
      type: "Dashboard UI",
      github:'',
      live: 'https://amit-ingeniero-web.netlify.app/'
    },
  ];
  return (
    <section
      id="projects"
      className="mx-auto max-w-300 scroll-mt-24 px-5 pt-16 sm:px-8 lg:pt-35 xl:px-0"
    >
      <SectionTitle
        index="02"
        eyebrow="Projects"
        title="Featured Projects"
        info="Selected UI builds with responsive layouts, polished interactions, and production-ready frontend structure."
      />

      <div className="section-reveal grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="card-lift group flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface lg:rounded-[20px]"
          >
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              className="block bg-surface-2 pl-6 pt-6"
            >
              <div className="overflow-hidden rounded-tl-xl border-l border-t border-line-strong bg-canvas">
                <div className="flex h-7 items-center gap-1.5 border-b border-line px-3">
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="ml-2 truncate font-mono text-[10px] text-fg-faint">
                    {project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </div>
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full object-cover object-left-top transition duration-700 group-hover:scale-[1.03] lg:h-52"
                />
              </div>
            </a>
            <div className="flex grow flex-col gap-4 p-6">
              <div className="flex items-center justify-between gap-3 font-mono text-xs uppercase text-fg-faint">
                <span>
                  0{index + 1} · {project.category}
                </span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-display text-2xl font-bold leading-tight text-fg">
                {project.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-fg-muted">
                {project.description}
              </p>
              <p className="font-mono text-xs uppercase text-fg-subtle">
                {project.type} · {project.impact}
              </p>
              <TechTags techs={project.techs} />
              <LiveLink href={project.live} className="mt-auto" />
            </div>
          </article>
        ))}
      </div>

      <article className="section-reveal mt-5 flex flex-col gap-4 rounded-[18px] border border-dashed border-line-strong p-6 md:flex-row md:items-center md:justify-between md:gap-10 lg:mt-6 lg:rounded-[20px] lg:px-8">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase text-fg-faint">
            Academic project · Daffodil International University · 2018
          </span>
          <h3 className="font-display text-xl font-bold leading-tight text-fg lg:text-[22px]">
            Bangladesh Traffic Police Case Management System
          </h3>
          <p className="max-w-170 text-[15px] leading-relaxed text-fg-muted">
            Final-year project: a web application for managing traffic case
            records and workflows.
          </p>
        </div>
        <TechTags techs={["PHP", "Bootstrap", "JavaScript (AJAX)"]} />
      </article>
    </section>
  );
}

function TechTags({ techs }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech used">
      {techs.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-line-strong px-3 py-1.5 text-[13px] text-fg-muted"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

TechTags.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function LiveLink({ href, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex min-h-11 w-fit items-center gap-2 text-[15px] font-semibold text-accent-ink ${className}`}
    >
      Live Preview
      <ArrowUpRightIcon
        className="h-4.5 w-4.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

LiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MyProjects;
