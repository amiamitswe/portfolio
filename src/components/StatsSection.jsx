import {
  CodeBracketSquareIcon,
  RocketLaunchIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    label: "Years building web products",
    value: "5+",
    icon: RocketLaunchIcon,
  },
  {
    label: "Technologies in active toolkit",
    value: "18",
    icon: Squares2X2Icon,
  },
  {
    label: "Public repositories",
    value: "36",
    icon: CodeBracketSquareIcon,
  },
];

function StatsSection() {
  return (
    <section className="section-reveal mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 pt-10 sm:px-6 md:grid-cols-3 lg:px-8">
      {stats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="card-lift rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div className="mb-5 inline-flex rounded-lg bg-sky-50 p-3 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="text-4xl font-bold text-slate-950 dark:text-white">{value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {label}
          </p>
        </div>
      ))}
    </section>
  );
}

export default StatsSection;
