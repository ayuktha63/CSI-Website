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
import MainAboutUs from "./components/MainAboutUs"; // About Us page
import ContactUs from "./components/ContactUs";
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
          <Route path ="/software" element={<Software />} />
          <Route path="/about" element={<MainAboutUs />} /> {/* Updated Route */}
          <Route path="/contactus" element={<ContactUs />} /> {/* Updated Route */}
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
