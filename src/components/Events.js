import React from "react";
import "../styles/Events.css"; // Make sure to create a corresponding CSS file
import Header from "./Header";

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
            <section className="eventspage">
                <h1 className="eventstitle">Upcoming Events</h1>
                <div className="eventscontainer">
                    {eventsList.map((event) => (
                        <div className="eventcard" key={event.id}>
                            <img src={event.image} alt={event.title} className="eventimage" />
                            <div className="eventinfo">
                                <h2>{event.title}</h2>
                                <p className="eventdate">{event.date}</p>
                                <p className="eventdescription">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Events;
