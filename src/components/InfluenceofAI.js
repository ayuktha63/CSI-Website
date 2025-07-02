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
                        <h1 className="event-title" data-aos="fade-left">Influence of AI in IT Industries</h1>
                        {/*<a href="https://www.instagram.com/p/DLB8ECjtxiq/?igsh=bDFrMWU2OGlnZGV1" target="_blank" rel="noopener noreferrer">
                            <button className="register-button" data-aos="fade-left">
                                View Results
                            </button>
                        </a>*/}

                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        The Center for Computational Intelligence, in collaboration with CSI SB
                        MBCET, organized an insightful Talk Session on the Influence of AI in IT
                        Industries on March 28, 2025, at Pascal Hall, MBCET. The session was
                        attended by around 150 students from S4 CSE and AI programs, offering
                        them a valuable opportunity to explore AI’s role in modern industries.
                        <br></br>
                        The session featured Mr. Joseph Alex, Principal Technology Architect at
                        Infosys and Mr. Arun Thomas, along with expert speakers, Mr. Roy M J, and
                        Ms. Vidhya R C from Infosys, who shared their expertise in the domain.
                        <br></br>
                        The session began with an introduction to AI, computer systems, and
                        software. The speakers elaborated on the foundational pillars of AI and how
                        AI is transforming industries. They also discussed practical ways to
                        incorporate AI into projects, covering AI-driven development, testing, and
                        deployment strategies.
                        <br></br>
                        A highlight of the session was an interactive trivia segment, where students
                        enthusiastically participated, answering AI-related questions. This was
                        followed by a doubt-clearing session, where attendees gained clarity on AI
                        implementation and career prospects.
                        <br></br>
                        As a token of appreciation, the guest speakers were presented with
                        mementos. Overall, the session was highly engaging and inspired students
                        to explore AI applications in their projects and careers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Adastra;
