import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Events.css";
import Header from "./Header";

const Events = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const handleScroll = () => {
            setScrollPosition(window.scrollY * 0.5); // Adjust speed by modifying multiplier
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Header />
            <section className="eventspage">
                <div className="image-container">
                    <img src="/assets/Eventspage_bg.png" alt="EventsBanner" className="eventsimage" />

                    <div className="mouse-container">
                        <div className="event-details left-text" data-aos="fade-up">
                            AD ASTRA
                        </div>

                        {/* Moving Mouse Image */}
                        <img
                            src="/assets/mouse.svg"
                            alt="CenteredImage"
                            className="centeredimage"
                            style={{ transform: `translateY(${scrollPosition}px)` }}
                        />

                        <div className="verticalline">
                            <div className="line-dot"></div>
                            <div className="horizontal-line" data-aos="fade-left"></div>
                        </div>

                        <div className="event-details right-text" data-aos="fade-left">
                            <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                            01 February 2025
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
