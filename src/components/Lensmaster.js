import React, { useEffect } from "react";
import "../styles/css_for_seperate_eventpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Lensmaster = () => {
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
                        src="/assets/lensmaster.png"
                        alt="Event Visual"
                        className="event-main-image"
                    />
                </div>
                <div className="event-text-content">
                    <div className="event-title-and-button">
                        <h1 className="event-title" data-aos="fade-left">LensMaster</h1>
                        {/*<a href="https://www.instagram.com/p/DLB8ECjtxiq/?igsh=bDFrMWU2OGlnZGV1" target="_blank" rel="noopener noreferrer">
                            <button className="register-button" data-aos="fade-left">
                                View Results
                            </button>
                        </a>*/}

                    </div>
                    <p className="event-description-text" data-aos="fade-left">
                        CSI SB MBCET organized <b>“LensMaster 2024 : The Ultimate Christmas
                        Photography Showdown”</b>, a Christmas-themed photography contest to
                        celebrate the festive season. This event aimed to provide a platform for
                        students across different colleges to exhibit their creative talents. Open to all
                        the students , regardless of colleges or field of study , the event encouraged
                        participants to capture the magical moments of Christmas through their
                        lenses.
                        <br></br>
                        Registrations began in early December and continued until the second week,
                        with photo submissions open from 20th to 24th December 2024, allowing
                        participants to capture the festive spirit. Evaluation started immediately
                        after submissions closed, with CSI SB MBCET collaborating with MBCET Frames,
                        where two judges assessed the entries. Simultaneously, the photos were shared
                        on a dedicated Instagram page to boost audience engagement. The final results,
                        announced on 31st December 2024, were based on a 50-50 split between Instagram
                        reach and the judges’ scores.
                        <br></br>
                        The event recognized <b>3 winners</b> across 2 categories:
                        <br></br>
                        1.<b>Rickson Koshy M</b> (Festive Luminary - Rs 300/-)
                        <br></br>
                        2.<b>Nidhal Nasir</b> (Yuletide Finishers - Rs 150/-)
                        <br></br>
                        3.<b>Joel George</b> (Yuletide Finishers - Rs 150/-)
                        <br></br>
                        Each winner received prize money as part of their recognition. The event was
                        concluded on 31 December 2024 with the certificate distribution to all
                        Participants.
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Lensmaster;
