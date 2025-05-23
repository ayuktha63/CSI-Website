import React, { useState, useEffect } from "react";
import "../styles/EventCarousel.css";

const events = [
    { title: "Software Testing", img: "/assets/software.png" },
    { title: "Radiance '24", img: "/assets/radiance.png" },
    { title: "Motivational Talk", img: "/assets/motivational.png" },
];

const EventCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return; // Stop the interval if paused

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [isPaused]); // Runs again when `isPaused` changes

    return (
        <div className="carousel-container" id="events">
            {/* Header Image */}
            <div className="carousel-header">
                <img src="/assets/events_bg.png" alt="Event Header" className="carousel-header-image" />
            </div>

            {/* Event Carousel */}
            <div className="custom-carousel">
                {events.map((event, index) => {
                    let position = "right-slide";
                    if (index === activeIndex) {
                        position = "center-slide";
                    } else if (index === (activeIndex - 1 + events.length) % events.length) {
                        position = "left-slide";
                    }

                    return (
                        <div
                            key={index}
                            className={`event_box ${position}`}
                            style={{ backgroundImage: `url(${event.img})` }}
                            onMouseEnter={() => setIsPaused(true)}  // Pause on hover
                            onMouseLeave={() => setIsPaused(false)} // Resume on leave
                        >
                            <h3>{event.title}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EventCarousel;


