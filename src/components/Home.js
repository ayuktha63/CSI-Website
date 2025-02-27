import React from "react";
import "../styles/Home.css";
import backgroundImage from "../assets/landing.png";

const Home = () => {
    return (
        <section
            id="home"
            className="home"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        </section>
    );
};

export default Home;