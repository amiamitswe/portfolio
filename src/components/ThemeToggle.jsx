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

    // Hydrate the toggle from localStorage on mount. This stays in an effect
    // on purpose: applyTheme() writes classes onto document.documentElement
    // and document.body, so it cannot move into a useState initializer
    // without making render impure and double-firing under StrictMode.
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-line-strong bg-surface text-fg-muted transition-colors hover:text-fg"
    >
      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      <span
        className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-fg px-2.5 py-1.5 font-mono text-xs text-canvas opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
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
