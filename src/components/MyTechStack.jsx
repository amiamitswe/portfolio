import { techStack } from "../data/techStack";

function MyTechStack() {
  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-title"
      className="mx-auto max-w-300 scroll-mt-24 px-5 sm:px-8 xl:px-0"
    >
      <div className="flex flex-col gap-5 border-y border-line-soft py-6 lg:flex-row lg:items-start lg:gap-10 lg:py-8">
        <div className="flex shrink-0 flex-col gap-1.5 lg:w-45 lg:pt-2.5">
          <h2 id="tech-stack-title" className="font-mono text-sm text-fg-faint">
            MY TECH STACK
          </h2>
          <p className="font-mono text-xs text-fg-subtle">
            {techStack.length} tools I use daily
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {techStack.map(({ id, item: Icon, name, url }) => (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2.5 rounded-xl border border-line bg-surface pl-2.5 pr-3.5 text-sm text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                <span className="flex h-5.5 w-5.5 shrink-0 *:h-full *:w-full" aria-hidden="true">
                  <Icon />
                </span>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MyTechStack;
