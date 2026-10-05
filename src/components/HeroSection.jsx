import {
  ArrowRightIcon,
  AtSymbolIcon,
  CloudArrowDownIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import TypedText from "./common/TypedText";
import { experiences, yearsOfExperienceLabel } from "../data/experiences";
import {
  email,
  projectsDeliveredLabel,
  socialLinks,
  toolsInStackLabel,
} from "../data/profile";

// Module scope keeps the array reference stable across renders.
const heroWords = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

const currentRole = experiences[0];

// Rendered as `key: "value"` lines inside the profile.ts card.
const profileFields = [
  ["name", "Amit Samadder"],
  ["role", currentRole.role],
  ["company", `${currentRole.company.name} (Remote)`],
  ["openTo", ["Remote", "Hybrid", "On-site"]],
  ["location", "Dhaka, Bangladesh"],
  ["experience", `${yearsOfExperienceLabel} years`],
  ["stack", ["React", "Next.js", "Tailwind"]],
  ["tools", `${toolsInStackLabel} in active toolkit`],
  ["shipped", `${projectsDeliveredLabel} projects`],
];

function CodeString({ children }) {
  return <span className="text-accent-ink">&quot;{children}&quot;</span>;
}

CodeString.propTypes = {
  children: PropTypes.node.isRequired,
};

function ProfileCard() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-line bg-surface">
      <div className="flex h-12 items-center justify-between border-b border-line px-5">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2.75 w-2.75 rounded-full bg-line-strong" />
          <span className="h-2.75 w-2.75 rounded-full bg-line-strong" />
          <span className="h-2.75 w-2.75 rounded-full bg-line-strong" />
        </div>
        <span className="font-mono text-xs text-fg-faint">profile.ts</span>
        <span className="w-12.75" aria-hidden="true" />
      </div>
      <div className="overflow-x-auto whitespace-nowrap px-5 pb-8 pt-7 font-mono text-[13px] leading-[1.9] text-fg sm:px-7 sm:text-[15px]">
        <div>
          <span className="text-code-keyword">const</span> amit = {"{"}
        </div>
        {profileFields.map(([key, value]) => (
          <div key={key} className="pl-6">
            {key}:{" "}
            {Array.isArray(value) ? (
              <>
                [
                {value.map((item, index) => (
                  <span key={item}>
                    <CodeString>{item}</CodeString>
                    {index < value.length - 1 ? ", " : ""}
                  </span>
                ))}
                ]
              </>
            ) : (
              <CodeString>{value}</CodeString>
            )}
            ,
          </div>
        ))}
        <div>
          {"}"} <span className="text-code-keyword">satisfies</span>{" "}
          <span className="text-code-type">Engineer</span>;
        </div>
      </div>
    </div>
  );
}

function HeroSection({ onContactClick, onCvClick }) {
  return (
    <section
      id="home"
      className="section-reveal mx-auto grid max-w-300 scroll-mt-24 items-center gap-14 px-5 pb-10 pt-12 sm:px-8 lg:grid-cols-2 lg:gap-18 lg:pb-28 lg:pt-26 xl:px-0"
    >
      <div className="flex flex-col gap-6 lg:gap-7">
        <p className="eyebrow flex items-center gap-2.5 text-fg-subtle">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Senior Frontend Engineer in Dhaka
        </p>
        <h1 className="font-display text-[42px] font-bold leading-[1.04] tracking-[-0.03em] text-fg sm:text-6xl lg:text-[64px] lg:leading-[1.02]">
          I build fast, scalable web apps with{" "}
          <TypedText words={heroWords} className="text-accent-ink" />
        </h1>
        <p className="max-w-135 text-base leading-relaxed text-fg-muted lg:text-[19px]">
          I am Amit Samadder, a senior frontend engineer with{" "}
          {yearsOfExperienceLabel} years of experience building scalable web
          applications with React.js and Next.js, working remotely with US and
          Canada-based product teams.
        </p>
        <div className="mt-1.5 flex flex-col gap-3 sm:flex-row sm:gap-3.5">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-accent px-6 text-[15px] font-semibold text-accent-fg transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Get in Touch
            <AtSymbolIcon className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onCvClick}
            className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-line-strong px-6 text-[15px] font-medium text-fg transition-colors hover:bg-surface"
          >
            View CV
            <CloudArrowDownIcon className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>
        <div className="-mx-2.5 mt-2 flex items-center text-fg-subtle">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-fg"
            >
              <Icon />
            </a>
          ))}
          <a
            href={`mailto:${email}`}
            aria-label={`Email ${email}`}
            className="inline-flex h-11 w-11 items-center justify-center transition-colors hover:text-fg"
          >
            <EnvelopeIcon className="h-5.5 w-5.5" aria-hidden="true" />
          </a>
          <a
            href="#projects"
            className="ml-auto inline-flex min-h-11 items-center gap-2 px-2.5 text-sm font-semibold text-accent-ink"
          >
            See projects
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <ProfileCard />
    </section>
  );
}

HeroSection.propTypes = {
  onContactClick: PropTypes.func.isRequired,
  onCvClick: PropTypes.func.isRequired,
};

export default HeroSection;
