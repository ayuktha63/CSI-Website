import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainHome from "./components/MainHome";
import Events from "./components/Events";
import Team from "./components/Team";
import Adastra from "./components/Adastra";
import Software from "./components/Software";
import EcoCanvas from "./components/EcoCanvas";
import ProjectExpo25 from "./components/ProjectExpo25";
import InfluenceofAI from "./components/InfluenceofAI";
import AGM2025 from "./components/AGM2025";
import TheoreticalComputerScience from "./components/TheoreticalComputerScience";
import MainAboutUs from "./components/MainAboutUs";
import ContactUs from "./components/ContactUs";
import Team23 from "./components/Team23";
import Encrypt from "./components/Encrypt";
import Thunkable from "./components/Thunkable";
import Gamedev from "./components/Gamedev";
import Linkedin from "./components/Linkedin";
import Resume from "./components/Resume";
import Lensmaster from "./components/Lensmaster";
import EventsYear from "./components/EventsYear";
import TeamYear from "./components/TeamYear";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:year" element={<EventsYear />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:year" element={<TeamYear />} />
          <Route path="/adastra" element={<Adastra />} />
          <Route path="/software" element={<Software />} />
          <Route path="/about" element={<MainAboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/team23" element={<Team23 />} />
          <Route path="/ecocanvas" element={<EcoCanvas />} />
          <Route path="/projectexpo25" element={<ProjectExpo25 />} />
          <Route path="/influenceofai" element={<InfluenceofAI />} />
          <Route path="/agm2025" element={<AGM2025 />} />
          <Route path="/theoreticalcomputerscience" element={<TheoreticalComputerScience />} />
          <Route path="/encrypt" element={<Encrypt />} />
          <Route path="/thunkable" element={<Thunkable />} />
          <Route path="/gamedev" element={<Gamedev />} />
          <Route path="/linkedin" element={<Linkedin />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/lensmaster" element={<Lensmaster />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;