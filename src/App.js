import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainHome from "./components/MainHome"; // Updated import
import Events from "./components/Events"; // Events page
import Team from "./components/Team";
import Adastra from "./components/Adastra"; // Ad Astra event details
import Software from "./components/Software";
import EcoCanvas from "./components/EcoCanvas"; // EcoCanvas event details
import ProjectExpo25 from "./components/ProjectExpo25"; // Project Expo 2025 event details
import InfluenceofAI from "./components/InfluenceofAI"; // Influence of AI event details
import AGM2025 from "./components/AGM2025"; // AGM 2025 event details
import TheoreticalComputerScience from "./components/TheoreticalComputerScience"; // Theoretical Computer Science event details
import MainAboutUs from "./components/MainAboutUs"; // About Us page
import ContactUs from "./components/ContactUs";
import Team23 from "./components/Team23";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Ensures animations happen only once per scroll
    });
  }, []);

  return (
    <Router>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<MainHome />} /> {/* Updated Route */}
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/adastra" element={<Adastra />} />
          <Route path="/software" element={<Software />} />
          <Route path="/about" element={<MainAboutUs />} /> {/* Updated Route */}
          <Route path="/contactus" element={<ContactUs />} /> {/* Updated Route */}
          <Route path="/team23" element={<Team23 />} /> {/* Team 2023 page */}
          <Route path="/ecocanvas" element={<EcoCanvas />} /> {/* EcoCanvas event details */}
          <Route path="/projectexpo25" element={<ProjectExpo25 />} /> {/* Project Expo 2025 event details */}
          <Route path="/influenceofai" element={<InfluenceofAI />} /> {/* Influence of AI event details */}
          <Route path="/agm2025" element={<AGM2025 />} /> {/* AGM 2025 event details */}
          <Route path="/theoreticalcomputerscience" element={<TheoreticalComputerScience />} /> {/* Theoretical Computer Science event details */}
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
