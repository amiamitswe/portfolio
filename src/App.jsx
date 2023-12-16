import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MyTechStack from "./components/MyTechStack";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import AdditionalSkills from "./components/AdditionalSkills";
import AboutMe from "./components/AboutMe";

function App() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  useState(() => {

    // console.log(localStorage?.theme)
    if (
      localStorage?.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
     {
      document.documentElement.classList.add("dark");
      document.body.classList.add('bg-body-dark')
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add('bg-body-light')
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
      <HeroSection />
      <MyTechStack />
      <MySkills />
      <AdditionalSkills />
      <MyProjects />
      <AboutMe />
    </>
  );
}

export default App;
