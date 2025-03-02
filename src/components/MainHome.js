import React from "react";
import HomeSection from "./Home";
import AboutCSI from "./AboutCSI";
import EventBox from "./EventBox";
import EventCarousel from "./EventCarousel";

const MainHome = () => {
    return (
        <div>
            <HomeSection />
            <EventBox />
            <AboutCSI />
            <EventCarousel />
        </div>
    );
};

export default MainHome;
