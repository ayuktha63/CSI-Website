// Events.js
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
            once: false,
        });

        const handleScroll = () => {
            setScrollPosition(window.scrollY * 0.5);
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
                        {/* Ad Astra Event */}
                        <div className="event-details left-text" data-aos="fade-left">
                            AD ASTRA
                        </div>
                        <p className="event-description" data-aos="fade-left">
                            The Department of Computer Science and Engineering, in association with CSI SB MBCET, 
                            is organizing Ad Astra, a month-long event aimed at enhancing and building a comprehensive 
                            skill set for every participant.
                        </p>
                        <button className="read-more-btn" data-aos="fade-left">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                                <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white"/>
                            </svg>
                        </button>
                        <div className="event-details right-text" data-aos="fade-left">
                            <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                            01 February 2025
                        </div>
                        {/* Software Event */}
                        <div className="event-details right-text software-title" data-aos="fade-right">
                            SOFTWARE
                        </div>
                        <p className="event-description software-description" data-aos="fade-right">
                            Join us for Software, an exciting workshop series focused on mastering modern development 
                            tools and technologies, organized by the Software Development Club.
                        </p>
                        <button className="read-more-btn software-btn" data-aos="fade-right">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                                <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white"/>
                            </svg>
                        </button>
                        <div className="event-details left-text software-date" data-aos="fade-left">
                            <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                            15 March 2025
                        </div>

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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;