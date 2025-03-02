import React from "react";
import "../styles/Events.css"; // Ensure this CSS file exists
import Header from "./Header";

const Events = () => {
    return (
        <div>
            <Header />
            <section className="eventspage">
                <div className="image-container">
                    {/* Background Image */}
                    <img src="/assets/Eventspage_bg.png" alt="EventsBanner" className="eventsimage" />

                    {/* Mouse Image with Vertical Line */}
                    <div className="mouse-container">
                        <div className="event-details left-text">AD ASTRA</div>
                        <img src="/assets/mouse.svg" alt="CenteredImage" className="centeredimage" />
                        <div className="verticalline">
                            <div className="line-dot"></div>
                            <div className="horizontal-line"></div>
                        </div>
                        <div className="event-details right-text">
                            <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                            01 February 2025
                        </div>
                    </div>
                </div>
                {/* Events List */}
            </section>
        </div>
    );
};

export default Events;
