import {
  ArrowsRightLeftIcon,
  BoltIcon,
  GiftIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./common/SectionTitle";
import { experiences } from "../data/experiences";

const currentRole = experiences[0];

const featured = {
  meta: `${currentRole.company.name} · ${currentRole.duration.start.split(" ")[1]} · ${currentRole.role}`,
  title: "Gift card & loyalty merchant dashboard",
  rows: [
    {
      label: "Context",
      text: "Rejoined 99minds after delivering its platform as a client engagement via Technext (2022-23). Now building the gift-card dashboard, CRM, and main dashboard.",
    },
    {
      label: "Approach",
      text: "Refactored shared logic into reusable components, migrated legacy Redux to Redux Toolkit, and moved HOC data flows to Redux store and saga.",
    },
    {
      label: "Outcome",
      text: "~30% less redundant code across the dashboards, on a consistent React, TypeScript, and shadcn/ui foundation.",
    },
  ],
  tags: ["React", "TypeScript", "Redux Toolkit", "shadcn/ui"],
};

const cases = [
  {
    icon: BoltIcon,
    metric: "~40%",
    metricLabel: "faster app",
    title: "DiveThru performance rebuild",
    meta: "TechCare · 2025",
    description:
      "Restructured the admin and client apps of a mental-health platform. Cut redundant API calls and set best practices for component splitting and reusable architecture.",
    stack: "React · Redux Toolkit · Zoom SDK",
  },
  {
    icon: NewspaperIcon,
    metric: "~500K",
    metricLabel: "daily visitors",
    title: "Fuelcellsworks site & admin",
    meta: "Quintix.ai via Technext · 2023-24",
    description:
      "Co-led the frontend of a high-traffic article site. Integrated Stripe through Next.js API routes and migrated onto an existing account, and built an admin panel with OpenAI, Gemini, and Stable Diffusion.",
    stack: "Next.js · HeroUI · Jotai · Stripe",
  },
  {
    icon: ArrowsRightLeftIcon,
    metric: "3",
    metricLabel: "platform integrations",
    title: "POS & marketing integration UIs",
    meta: "99minds · 2026",
    description:
      "Integration screens for Lightspeed R-Series, Heartland, and Listrak, including credential setup and custom event mapping.",
    stack: "React · TypeScript · shadcn/ui",
  },
];

// Sample rows for the illustrative dashboard preview.
const previewStats = [
  { label: "Active cards", value: "2,418" },
  { label: "Redeemed", value: "$18.2k" },
  { label: "Campaigns", value: "12" },
];

const previewRows = [
  { code: "GC-7F2K", customer: "Jordan M.", balance: "$50.00", status: "Active" },
  { code: "GC-9QX1", customer: "Priya S.", balance: "$12.40", status: "Active" },
  { code: "GC-3LMN", customer: "Alex R.", balance: "$0.00", status: "Redeemed" },
  { code: "GC-8TBW", customer: "Sam K.", balance: "$100.00", status: "Pending" },
];

const statusStyles = {
  Active: "bg-accent/20 text-accent-ink",
  Redeemed: "bg-chip text-fg-subtle",
  Pending: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
};

// Static, non-interactive preview of the kind of screen this work produced.
function DashboardPreview() {
  return (
    <div className="hidden bg-surface-2 pl-8 pt-8 md:flex lg:pl-10 lg:pt-10" aria-hidden="true">
      <div className="flex grow flex-col gap-4 rounded-tl-[14px] border-l border-t border-line-strong bg-canvas p-5 text-fg">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-accent-fg">
              <GiftIcon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">Gift cards</span>
          </div>
          <span className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-accent px-3 text-xs font-semibold text-accent-fg">
            <PlusIcon className="h-3.5 w-3.5" />
            New campaign
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {previewStats.map((stat) => (
            <div key={stat.label} className="rounded-[10px] border border-line bg-surface p-3">
              <p className="font-mono text-[10px] uppercase text-fg-faint">{stat.label}</p>
              <p className="mt-1 font-display text-lg font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-[10px] border border-line bg-surface">
          <div className="flex items-center gap-2 border-b border-line px-3 py-2 text-xs text-fg-faint">
            <MagnifyingGlassIcon className="h-3.5 w-3.5" />
            Search cards
          </div>
          <table className="w-full text-left text-xs">
            <thead className="font-mono text-[10px] uppercase text-fg-faint">
              <tr>
                <th className="px-3 py-2 font-normal">Code</th>
                <th className="px-3 py-2 font-normal">Customer</th>
                <th className="px-3 py-2 text-right font-normal">Balance</th>
                <th className="px-3 py-2 font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              {previewRows.map((row) => (
                <tr key={row.code} className="border-t border-line-soft">
                  <td className="px-3 py-2.5 font-mono">{row.code}</td>
                  <td className="px-3 py-2.5 text-fg-muted">{row.customer}</td>
                  <td className="px-3 py-2.5 text-right font-mono">{row.balance}</td>
                  <td className="px-3 py-2.5">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyles[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-mono text-[10px] uppercase text-fg-faint">
          Illustrative UI · sample data
        </p>
      </div>
    </div>
  );
}

function CaseStudies() {
  return (
    <section
      id="work"
      className="mx-auto max-w-300 scroll-mt-24 px-5 pt-14 sm:px-8 lg:pt-30 xl:px-0"
    >
      <SectionTitle
        index="01"
        eyebrow="Selected work"
        title="Case studies"
        info="Problems I owned, the decisions I made, and what changed because of them."
      />

      <article className="section-reveal grid overflow-hidden rounded-[18px] border border-line bg-surface md:grid-cols-2 lg:rounded-3xl">
        <div className="flex flex-col gap-5 p-6 sm:p-10 lg:gap-5.5 lg:p-12">
          <span className="font-mono text-xs text-fg-subtle sm:text-[13px]">
            {featured.meta}
          </span>
          <h3 className="font-display text-2xl font-bold leading-[1.15] tracking-[-0.01em] text-fg lg:text-[34px]">
            {featured.title}
          </h3>
          <dl className="flex flex-col gap-3.5 text-[15px] leading-relaxed text-fg-muted">
            {featured.rows.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-21 shrink-0 pt-0.75 font-mono text-xs uppercase text-fg-faint">
                  {row.label}
                </dt>
                <dd>{row.text}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-auto flex flex-wrap gap-2" aria-label="Stack">
            {featured.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line-strong px-3 py-1.5 text-[13px] text-fg-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <DashboardPreview />
      </article>

      <div className="mt-5 grid gap-5 md:grid-cols-3 lg:mt-6 lg:gap-6">
        {cases.map(({ icon: Icon, metric, metricLabel, title, meta, description, stack }) => (
          <article
            key={title}
            className="card-lift section-reveal flex flex-col gap-4 rounded-[18px] border border-line bg-surface p-6 lg:gap-4.5 lg:rounded-[20px] lg:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-surface-2 text-accent-ink">
                <Icon className="h-5.5 w-5.5" aria-hidden="true" />
              </div>
              <p className="text-right">
                <span className="block font-display text-3xl font-bold leading-none text-accent-ink">
                  {metric}
                </span>
                <span className="mt-1 block font-mono text-[11px] uppercase text-fg-faint">
                  {metricLabel}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-fg-subtle">{meta}</span>
              <h3 className="font-display text-[21px] font-bold leading-tight text-fg lg:text-2xl">
                {title}
              </h3>
            </div>
            <p className="text-[15px] leading-relaxed text-fg-muted">{description}</p>
            <span className="mt-auto font-mono text-xs uppercase text-fg-faint">
              {stack}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
