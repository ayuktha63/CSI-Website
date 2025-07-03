import React, { useEffect } from "react";
import "../styles/css_for_seperate_eventpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Gamedev = () => {
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
                        src="/assets/gamedev.png"
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">Intro to Unreal Engine</h1>
                        {/*<a href="https://www.instagram.com/p/DLB8ECjtxiq/?igsh=bDFrMWU2OGlnZGV1" target="_blank" rel="noopener noreferrer">
                            <button className="register-button" data-aos="fade-left">
                                View Results
                            </button>
                        </a>*/}

                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        <b>Engineering 101</b> is a workshop series designed to empower students by enhancing their skills across various domains
                        through hands-on learning. Initiated by CSI SB MBCET in collaboration with the Department of Computer Science &
                        Engineering, the series aims to shape well-rounded engineers equipped for both academic and professional success.
                        <br></br>
                        The <b>“Game Development Workshop: Intro to Unreal Engine”</b> was organized to equip participants with foundational 
                        knowledge of game development and an introduction to Unreal Engine. The session covered key concepts, tools, 
                        and the workflow involved in creating games, giving students a clear overview of the field and its potential.
                        <br></br>
                        The workshop was led by <b>Mr. Sabal Krishna S</b>, an experienced game developer and former intern at GTech μLearn 
                        and Banzan Studios. He walked participants through Unreal Engine’s interface, core concepts, and tools, 
                        demonstrating material creation, simulation, and animation with hands-on guidance and real-time support.
                        <br></br>
                        The workshop was well-received, praised for its interactive nature, clarity, and the engaging teaching 
                        style of Mr. Sabal Krishna S. It successfully provided attendees with practical skills to begin their 
                        journey in game development.
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Gamedev;
