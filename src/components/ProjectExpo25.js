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
                        src="/assets/projectexpo25.png"
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">Project Expo'25</h1>
                        {/*<a href="https://www.instagram.com/p/DLB8ECjtxiq/?igsh=bDFrMWU2OGlnZGV1" target="_blank" rel="noopener noreferrer">
                            <button className="register-button" data-aos="fade-left">
                                View Results
                            </button>
                        </a>*/}

                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        The Department of Computer Science and Engineering, in association with CSI SB
                        MBCET and ACE MBCET, organized <b>“Project Expo’25: Dream | Build | Inspire”</b> on 01st
                        April 2025 at Pascal Hall, MBCET.
                        <br></br>
                        A total of 16 project teams from S8 CS1 and CS2 participated in the Expo, showcasing
                        their innovative projects that addressed real-world challenges, demonstrating their
                        technical knowledge, problem solving abilities and creative thinking. The projects
                        were evaluated by esteemed industry professionals, Mr. Bhadran V K, and Mr.
                        Praveen P. Their expert feedback and encouragement added immense value to the
                        event. The judges emphasized the importance of client-focused development and
                        shared insights from their own professional experiences, motivating the students to
                        think beyond classroom learning.

                        To recognize outstanding work, awards were presented to the best projects :
                        <br></br>
                        1. <b>Best Project – CS1:</b> <i>Clipse: A Semantic Image Search App</i>
                        by Abhinav Prakash, Abhishek S, Rhon S George, & Ritin George D.
                        <br></br>
                        2. <b>Runner-up – CS1:</b> <i>E-voting using Blockchain</i>
                        by Jino B Sajeev, Nandakrishnan G D, Nandu Krishna M, & Vinu B Kurup.
                        <br></br>
                        3. <b>Best Project – CS2:</b> <i>Traffic Signal Optimization using Hypergraph Networks</i>
                        by Jesny Jayan, Manu Boby, Nithya Jose, and Shaun Joseph.
                        <br></br>
                        4. <b>Runner-up – CS2:</b> <i>A Comprehensive Wifi Communication System with Voice,
                            Texting and Collaboration</i>
                        by Feba Mariam, Aravind JL, Johann Varghese, and Sam Peter.
                        <br></br>
                        As a token of appreciation, mementos were presented to the judges for their
                        valuable time and contributions. The event was coordinated by <i>Dr. Jesna Mohan</i> and
                        <i>Ms. Gayathri K S</i>, Assistant Professors, Department of CSE.
                        Project Expo’25 proved to be a memorable and enriching experience, fostering a
                        spirit of innovation, teamwork, and industry interaction among the graduating
                        students.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Adastra;
