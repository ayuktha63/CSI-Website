import React from "react";
import { useParams } from "react-router-dom";

const eventsData = {
    2024: [
        { title: "Web Development Workshop", link: "#" },
        { title: "Startup Pitch", link: "#" },
    ],
    2023: [
        { title: "Intro to Python", link: "#" },
        { title: "Robotics Challenge", link: "#" },
    ],
    // Add more years and content as needed, similar to existing events page structure
};

const EventsYear = () => {
    const { year } = useParams();
    const events = eventsData[year] || [];

    return (
        <div style={{ padding: "20px", color: "white" }}>
            <h1>Events in {year}</h1>
            {events.length > 0 ? (
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>
                            <a href={event.link} style={{ color: "#00aaff" }}>
                                {event.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No events found for {year}.</p>
            )}
            {/* You can expand this with more content similar to the main Events page */}
        </div>
    );
};

export default EventsYear;