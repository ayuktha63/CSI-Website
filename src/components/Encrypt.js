import React, { useEffect } from "react";
import "../styles/css_for_seperate_eventpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Encrypt = () => {
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
                        src="/assets/encrypt.png"
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">Encrypt</h1>
                        {/*<a href="https://www.instagram.com/p/DLB8ECjtxiq/?igsh=bDFrMWU2OGlnZGV1" target="_blank" rel="noopener noreferrer">
                            <button className="register-button" data-aos="fade-left">
                                View Results
                            </button>
                        </a>*/}

                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        CSI SB MBCET in association with the Department of Computer Science and
                        Engineering organized <b>“Encrypt : Ctrl + Alt + Secure”</b>, an online cybersecurity
                        quiz competition, on 28th January 2025 to celebrate Data Privacy Day. This
                        event aimed to raise awareness about data privacy, cybersecurity, privacy
                        laws and cybercrimes while providing the participants an opportunity to test
                        their knowledge in this evolving domain
                        <br></br>
                        The quiz was conducted online , via Quizziz , featuring 20 questions (MCQs).
                        Participants had to compete against each other, testing both their accuracy
                        and speed to secure a top spot in the rankings. The competition witnessed
                        an overwhelming participation from over 110 students.
                        <br></br>
                        The event recognized <b>10 winners</b> across 2 categories:
                        <br></br>
                        1. <i>Top 3 winners were regarded as the Podium Winners.</i>
                        <br></br>
                        2. <i>7 other participants who secured a spot in the Top 10 were also
                        recognized.</i>
                        <br></br>
                        Encrypt was a successful event that emphasized on the importance of data
                        privacy and cybersecurity. All the participants were awarded with certificate
                        of participation.
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Encrypt;
