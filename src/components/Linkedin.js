import React, { useEffect } from "react";
import "../styles/css_for_seperate_eventpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Linkedin = () => {
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
                        src="/assets/linkedin.png"
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">LinkedIn Optimized</h1>
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
                        The second episode of KnackIt - <b>LinkedIn Optimized</b>, was organized by CSI SB
                        MBCET in association with the Department of Computer Science and
                        Engineering. This session was organized to help students utilize the full
                        potential of LinkedIn, enabling them to present themselves effectively in the
                        professional world and create a strong digital presence through personal
                        branding. Led by <b>Ms. Kesia Mary Joies</b>, a dynamic alumni and a Product
                        Engineer at UST, the session was both enlightening and engaging. She broke
                        down the concepts associated with LinkedIn in simple terms, making it easy
                        for everyone to grasp. She also emphasized on the importance of even the
                        smallest profile enhancements. One of the key highlights was understanding
                        how recruiters search for profiles and how individuals can strategically
                        position themselves for better visibility. The session provided attendees with
                        practical strategies to refine their profiles.
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

export default Linkedin;
