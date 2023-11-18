import { useState } from "react";
import Header from "./components/Header";

function App() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  useState(() => {
    if (
      localStorage?.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.body.classList.add('bg-black')
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add('bg-white')
    }

    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = "light";

    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";

    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
