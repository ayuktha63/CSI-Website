import React, { useEffect } from "react";
import "../styles/css_for_seperate_eventpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Thunkable = () => {
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
                        src="/assets/thunkable.png"
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">Thunkable Workshop</h1>
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
                        As part of the series, a <b>Thunkable Workshop</b> was conducted on 22nd March 2025 via Discord from 7:00 PM to 8:00 PM.
                        The session was led by Mr. Kiran Biju, a 6th-semester CSE student and Treasurer of CSI SB MBCET. Mr. Kiran Biju provided hands-on guidance, making the
                        session highly interactive and engaging.
                        <br></br>
                        Participants were introduced to Thunkable, a no-code platform for mobile app development. The session was interactive and
                        beginner-friendly, offering practical insights into app creation without coding experience.
                        <br></br>
                        The workshop was well-received, aligning with Engineering 101’s vision of providing students with essential
                        technical skills beyond the classroom.
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Thunkable;
