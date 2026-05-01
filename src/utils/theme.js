export const themeModes = ["dark", "light", "system"];

export function getStoredTheme() {
  return localStorage.getItem("theme") || "system";
}

export function getResolvedTheme(mode) {
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return mode;
}

export function applyTheme(mode) {
  const resolvedTheme = getResolvedTheme(mode);
  const isDark = resolvedTheme === "dark";

  document.documentElement.classList.toggle("dark", isDark);
  document.body.classList.toggle("bg-body-dark", isDark);
  document.body.classList.toggle("bg-body-light", !isDark);

  return resolvedTheme;
}

export function persistTheme(mode) {
  if (mode === "system") {
    localStorage.removeItem("theme");
    return;
  }

  localStorage.setItem("theme", mode);
}
