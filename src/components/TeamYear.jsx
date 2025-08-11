import React from "react";
import { useParams } from "react-router-dom";

const teamData = {
    2024: [
        "Diana - President",
        "Ethan - Vice President",
        // Add more members as needed
    ],
    2023: [
        "Fiona - President",
        "George - Vice President",
        // Add more members as needed
    ],
    // Add more years and content as needed, similar to existing team page structure
};

const TeamYear = () => {
    const { year } = useParams();
    const members = teamData[year] || [];

    return (
        <div style={{ padding: "20px", color: "white" }}>
            <h1>Team {year}</h1>
            {members.length > 0 ? (
                <ul>
                    {members.map((member, index) => (
                        <li key={index}>{member}</li>
                    ))}
                </ul>
            ) : (
                <p>No team data found for {year}.</p>
            )}
            {/* You can expand this with more content similar to the main Team page */}
        </div>
    );
};

export default TeamYear;