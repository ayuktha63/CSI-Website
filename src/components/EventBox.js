import React from "react";
import "../styles/EventBox.css";

const events = [
    { img: "/assets/events_box.png", alt: "Event 1", text: "2+ Hackathon" },
    { img: "/assets/events_box.png", alt: "Event 2", text: "15+ Technical Events" },
    { img: "/assets/events_box.png", alt: "Event 3", text: "10+ Workshops" },
    { img: "/assets/events_box.png", alt: "Event 1", text: "250+ Active Participants" },
    { img: "/assets/events_box.png", alt: "Event 2", text: "2+ Collaboration" },
];

const EventBox = () => {
    return (
        <section className="event-box">
            <div className="event-container">
                {events.map((event, index) => (
                    <div className="event-item" key={index} data-aos="fade-up">
                        <img src={event.img} alt={event.alt} className="event-image" />
                        <div className="event-text">{event.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventBox;
