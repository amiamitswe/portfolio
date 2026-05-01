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
import { applyTheme, getStoredTheme } from "./utils/theme";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      if (getStoredTheme() === "system") {
        applyTheme("system");
      }
    };

    applyTheme(getStoredTheme());
    mediaQuery.addEventListener("change", syncSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", syncSystemTheme);
    };
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
