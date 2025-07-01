// ADASTRA.js
import React, { useEffect } from "react";
import "../styles/css_for_seperate_eventpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Adastra = () => {
    const backgroundImage = "/assets/bgeventpage.png"; // make sure this image is in /public/assets
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    return (
        <div
            className="event-details-page"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
        >

            <div className="event-content-wrapper">
                <div className="event-image_event" data-aos="fade-right">
                    <img
                        src="/assets/influenceofai.png"
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">Exploring Theoretical Computer Science</h1>
                        {/*<a href="https://www.instagram.com/p/DLB8ECjtxiq/?igsh=bDFrMWU2OGlnZGV1" target="_blank" rel="noopener noreferrer">
                            <button className="register-button" data-aos="fade-left">
                                View Results
                            </button>
                        </a>*/}

                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        The Algorithms and Formal Methods Research Group of NIT Calicut, in
                        collaboration with CSI SB MBCET and the Department of Computer Science
                        and Engineering, MBCET, organized an exclusive session on Theoretical
                        Computer Science for S6 CSE students on 7th March 2025. The session aimed
                        to introduce students to computational research and inspire them to explore
                        theoretical foundations in computer science.
                        <br></br>
                        The session featured Dr. Ashwin Jacob and Dr. Renjith P, who shared their
                        expertise on key research areas. Dr. Ashwin Jacob’s discussion covered
                        topics such as matching patterns in search engines, comparison of
                        algorithms based on complexity and competitive ratio and their applications
                        in targeted marketing, etc. Dr. Renjith P introduced graph theory
                        fundamentals, explaining key terminologies and problem-solving
                        approaches. He also highlighted NIT Calicut’s research facilities in the field.
                        <br></br>
                        Through the engaging discussions and expert insights, students gained a
                        deeper understanding of theoretical research methodologies,
                        computational challenges, and research opportunities in the field. The
                        session successfully encouraged students to delve deeper into theoretical
                        computer science.
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Adastra;
