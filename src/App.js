import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Header from "./components/Header";
import Home from "./components/Home";
import EventBox from "./components/EventBox";
import AboutCSI from "./components/AboutCSI";
import Footer from "./components/Footer";
import ImageCarousel from "./components/EventCarousel";
import BoxCarousel from "./components/EventCarousel";
import EventCarousel from "./components/EventCarousel";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Ensures animations happen only once per scroll
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Home />
        <EventBox />
        <AboutCSI />
        <EventCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default App;
