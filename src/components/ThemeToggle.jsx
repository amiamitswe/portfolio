import { useEffect, useState } from "react";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import {
  applyTheme,
  getStoredTheme,
  persistTheme,
  themeModes,
} from "../utils/theme";

const themeLabels = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

const themeIcons = {
  system: ComputerDesktopIcon,
  light: SunIcon,
  dark: MoonIcon,
};

export default function ThemeToggle() {
  const [mode, setMode] = useState("system");
  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    const storedMode = getStoredTheme();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setMode(storedMode);
    setResolvedTheme(applyTheme(storedMode));

    const handleSystemThemeChange = () => {
      if (getStoredTheme() === "system") {
        setResolvedTheme(applyTheme("system"));
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const nextMode = themeModes[(themeModes.indexOf(mode) + 1) % themeModes.length];
  const Icon = themeIcons[mode];
  const tooltipLabel = `${themeLabels[mode]} -> ${themeLabels[nextMode]}`;

  const handleThemeChange = () => {
    persistTheme(nextMode);
    setMode(nextMode);
    setResolvedTheme(applyTheme(nextMode));
  };

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      aria-label={`${themeLabels[mode]} theme. Switch to ${themeLabels[nextMode]} theme.`}
      title={tooltipLabel}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 ring-1 ring-inset ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-100 hover:text-sky-600 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800 dark:hover:text-sky-300"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      <span
        className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg shadow-slate-950/20 transition group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-white dark:text-slate-950"
        aria-hidden="true"
      >
        {tooltipLabel}
      </span>
      <span className="sr-only">
        Current theme mode is {mode}. Resolved theme is {resolvedTheme}.
      </span>
    </button>
  );
}
