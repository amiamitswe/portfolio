function Logo() {
  return (
    <span className="inline-flex items-center gap-4">
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1426] text-white shadow-lg shadow-sky-500/20 ring-1 ring-white/10">
        <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
          <path
            d="M11 50 29.7 12.5 52.5 50"
            fill="none"
            stroke="#f8fafc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.2"
          />
          <path
            d="M23.5 35.5h20"
            fill="none"
            stroke="#f8fafc"
            strokeLinecap="round"
            strokeWidth="5.2"
          />
          <path
            d="M39.5 14.5c9.5 2.2 15.5 10 13.2 17-1.9 5.8-8.7 7.6-16.5 7.6H28c-8.7 0-12.2 4.3-10.7 9.2 1.6 5.1 9.4 6.8 20.2 5"
            fill="none"
            stroke="#94a3b8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.4"
          />
          <path
            d="M34.3 35.5h8.5"
            fill="none"
            stroke="#3b82f6"
            strokeLinecap="round"
            strokeWidth="5.2"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-dm-sans text-xl font-bold tracking-[0.12em] text-slate-950 dark:text-white">
          AMIT
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.46em] text-slate-500 dark:text-slate-400">
          SAMADDER
        </span>
      </span>
    </span>
  );
}

export default Logo;
