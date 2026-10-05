import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContactModal from "./components/common/ContactModal";
import CvModal from "./components/common/CvModal";
import MyTechStack from "./components/MyTechStack";
import CaseStudies from "./components/CaseStudies";
import MyProjects from "./components/MyProjects";
import Experience from "./components/Experience";
import MySkills from "./components/MySkills";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import ContactSection from "./components/ContactSection";
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
    <div className="relative isolate min-h-screen overflow-x-clip bg-canvas text-fg">
      <Header onCvClick={() => setCvOpen(true)} />
      <main>
        <HeroSection
          onContactClick={() => setContactOpen(true)}
          onCvClick={() => setCvOpen(true)}
        />
        <MyTechStack />
        <CaseStudies />
        <MyProjects />
        <Experience />
        <MySkills />
        <AboutMe />
        <Education />
        <ContactSection
          onContactClick={() => setContactOpen(true)}
          onCvClick={() => setCvOpen(true)}
        />
      </main>
      <Footer />
      <ContactModal open={contactOpen} setOpen={setContactOpen} />
      <CvModal open={cvOpen} setOpen={setCvOpen} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
