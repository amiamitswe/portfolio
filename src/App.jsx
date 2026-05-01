import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContactModal from "./components/common/ContactModal";
import CvModal from "./components/common/CvModal";
import StatsSection from "./components/StatsSection";
import MyTechStack from "./components/MyTechStack";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import AdditionalSkills from "./components/AdditionalSkills";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    if (
      localStorage?.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-body-dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("bg-body-light");
    }
  }, []);

  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <div className="ai-background" aria-hidden="true" />
      <Header onContactClick={() => setContactOpen(true)} />
      <HeroSection
        onContactClick={() => setContactOpen(true)}
        onCvClick={() => setCvOpen(true)}
      />
      <StatsSection />
      <MyTechStack />
      <MySkills />
      <AdditionalSkills />
      <Experience />
      <MyProjects />
      <AboutMe />
      <Education />
      <Footer onContactClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} setOpen={setContactOpen} />
      <CvModal open={cvOpen} setOpen={setCvOpen} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
