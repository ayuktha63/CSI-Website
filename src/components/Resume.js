import React, { useEffect } from "react";
import "../styles/css_for_seperate_eventpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Resume = () => {
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
                        src="/assets/resume.png"
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">Build Your Resume</h1>
                        {/*<a href="https://www.instagram.com/p/DLB8ECjtxiq/?igsh=bDFrMWU2OGlnZGV1" target="_blank" rel="noopener noreferrer">
                            <button className="register-button" data-aos="fade-left">
                                View Results
                            </button>
                        </a>*/}

                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        <b>KnackIt</b>, a professional edge series , is an initiative launched by CSI SB
                        MBCET to equip students with essential professional skills, ensuring they are
                        well-prepared to present themselves in any professional sitting.
                        <br></br>
                        The inaugural episode of KnackIt - <b>Build Your Resume</b> focused on one of the most important tools
                        - Resume Preparation, an indispensable skill for career success. The main
                        objective of the program was to help participants understand the
                        significance of an ideal resume and how one could create it effectively.
                        The session was led by <b>Ms. Varsha Renjith</b>, an accomplished alumna of
                        MBCET , and a Data Engineer at Nissan Digital India. She was also an active
                        member of CSI SB MBCET and served as the Chairperson for 2023-2024. She
                        aimed to teach students the fundamentals of creating impactful resumes,
                        highlight common mistakes, and provide strategies to position themselves
                        effectively for professional opportunities. Ms. Varsha’s interactive approach ,
                        fueled by the wonderful presentation and use of apt examples made the
                        session interesting and engaging. Key topics included understanding the
                        essential components of an ideal resume and learning the dos and don’ts of
                        resume writing.
                        <br></br>
                        This engaging session was truly a transformative experience, equipping
                        students with the knowledge and tools to build a compelling professional
                        identity online.
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
