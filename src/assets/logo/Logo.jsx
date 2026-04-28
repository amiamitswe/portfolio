function Logo() {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-sky-500/20 ring-1 ring-white/10 dark:bg-white dark:text-slate-950">
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <path
            d="M24 4.5l4.84 13.42L43 18.4 31.82 27l3.92 13.5L24 32.52 12.26 40.5 16.18 27 5 18.4l14.16-.48L24 4.5z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M18.5 28.5L24 15l5.5 13.5M20.6 24.5h6.8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-dm-sans text-base font-bold tracking-[0.18em] text-slate-950 dark:text-white sm:text-lg">
          AMIT
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
          Samadder
        </span>
      </span>
    </span>
  );
}

export default Logo;
