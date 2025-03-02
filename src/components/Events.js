
import React from "react";
import "../styles/Events.css"; // Ensure this CSS file exists
import Header from "./Header";
// eslint-disable-next-line
const eventsList = [
    {
        id: 1,
        title: "Hackathon 2025",
        date: "March 15, 2025",
        description: "Join us for an exciting 24-hour coding challenge!",
        image: "/assets/hackathon.jpg",
    },
    {
        id: 2,
        title: "Tech Talk: AI & Future",
        date: "April 5, 2025",
        description: "A deep dive into AI advancements with industry experts.",
        image: "/assets/tech_talk.jpg",
    },
    {
        id: 3,
        title: "Web Development Workshop",
        date: "April 20, 2025",
        description: "Learn full-stack web development from scratch!",
        image: "/assets/web_workshop.jpg",
    },
];

const Events = () => {
    return (
        <div>
            <Header />
            <section
                className="eventspage"
            >
                <div className="image-container">
                    {/* Background Image */}
                    <img src="/assets/Eventspage_bg.png" alt="EventsBanner" className="eventsimage" />

                    {/* Mouse Image with Vertical Line */}
                    <div className="mouse-container">
                        <img src="/assets/mouse.svg" alt="CenteredImage" className="centeredimage" />
                        <div className="verticalline"></div>
                    </div>
                </div>
                {/* Events List */}
            </section>
        </div>
    );
};

export default Events;
