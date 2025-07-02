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
                        src="/assets/ecocanvasevent.png"
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">EcoCanvas</h1>
                        <a href="https://www.instagram.com/p/DLB8ECjtxiq/?igsh=bDFrMWU2OGlnZGV1" target="_blank" rel="noopener noreferrer">
                            <button className="register-button" data-aos="fade-left">
                                View Results
                            </button>
                        </a>

                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        CSI SB MBCET in collaboration with the Department of Computer Science and Engineering, organized “EcoCanvas : Canvas of Change, Colors of Hope!” , a poster making competition that blended nature with innovation. This event aimed to provide a platform for students across different colleges to exhibit their creative talents.
                        <br></br>
                        The registrations and submissions began on 05 June 2025 and extended
                        until the 13 June 2025. Evaluation procedure commenced immediately after
                        the submissions were closed. The evaluation process was completed with
                        the support of two in-house design experts from S5 CS2 – <b>Chris Thomas
                            Abraham</b> and <b>Niranj R</b> – who brought their professional experience in
                        graphic and UI/UX design to assess the submissions. The top 2 entries from
                        each category - hand drawn and digital- were featured on CSI SB MBCET’s
                        official social media handles.
                        <br></br>
                        The event recognized 4 winners across 2 categories :
                        <br></br>
                        1. <b>GreenBrush Laureate :</b> <i>Avin Joy, Devika DV</i>
                        <br></br>
                        2. <b>GreenPixel Maestro :</b> <i>Josh Jacob Sunil, Vedha Mahadevan</i>
                        <br></br>
                        The winners were awarded with special appreciation certificates and all
                        other participants received certificates of participation for their valuable
                        contribution.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Adastra;
