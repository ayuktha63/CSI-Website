import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainHome from "./components/MainHome"; // Updated import
import Events from "./components/Events"; // Events page

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
      <main>
        <Routes>
          <Route path="/" element={<MainHome />} /> {/* Updated Route */}
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
