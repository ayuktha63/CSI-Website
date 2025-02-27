import React from "react";
import "../styles/EventBox.css";

const EventBox = () => {
    return (
        <section className="event-box">
            <div className="event-container">
                <div className="box" data-aos="fade-up">Event 1</div>
                <div className="box" data-aos="fade-up">Event 2</div>
                <div className="box" data-aos="fade-up">Event 3</div>
            </div>
        </section>
    );
};

export default EventBox;
