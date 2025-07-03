import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Events.css";
import Header from "./Header";
import { Link } from "react-router-dom";


const Events = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });

        const handleScroll = () => {
            setScrollPosition(window.scrollY * 0.5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Header />
            <section className="eventspage">
                {/* Heading */}
                <div className="events-heading-container">
                    <h1 className="events-heading">EVENTS</h1>
                </div>

                <div className="mouse-container">
                    {/* EcoCanvas Event */}
                    <div className="event-details left-text" data-aos="fade-left">
                        EcoCanvas
                    </div>
                    <p className="event-description" data-aos="fade-left">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, is organizing EcoCanvas, an art-based initiative that inspires participants to creatively express ideas of sustainability and environmental change.
                    </p>
                    <Link to="/ecocanvas" className="read-more-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>

                    <div className="event-details right-text" data-aos="fade-left">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        05 June 2025
                    </div>

                    {/* Expo'25 Event */}
                    <div className="event-details right-text-odd" data-aos="fade-right">
                        Expo'25
                    </div>
                    <p className="software-description" data-aos="fade-right">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET and ACE MBCET, organized Project Expo’25 to showcase innovative final-year projects and encourage industry-oriented thinking among students.
                    </p>
                    <Link to="/projectexpo25" className="software-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="event-details left-text-odd" data-aos="fade-right">
                        01 April 2025
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                    </div>

                    {/* Motivational Event */}
                    <div className="event-details left-text" data-aos="fade-left">
                        MOTIVATIONAL
                    </div>
                    <p className="event-description" data-aos="fade-left">
                        The Center for Computational Intelligence, in collaboration with CSI SB MBCET, organized a Talk Session on the Influence of AI in IT Industries, offering students valuable insights into AI’s real-world applications and career opportunities.
                    </p>
                    <Link to="/influenceofai" className="read-more-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="event-details right-text" data-aos="fade-left">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        28 March 2025
                    </div>

                    {/* AGM 2025 Event */}
                    <div className="event-details right-text-odd-moti" data-aos="fade-right">
                        AGM 2025
                    </div>
                    <p className="software-description" data-aos="fade-right">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, organized a Talk Session on the Influence of AI in IT Industries, offering students valuable insights into AI’s real-world applications and industry relevance.
                    </p>
                    <Link to="/agm2025" className="software-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="event-details left-text-odd" data-aos="fade-right">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        07 March 2025
                    </div>
                    {/*
                    <div className="event-details left-text" data-aos="fade-left">
                        Motivational
                    </div>
                    <p className="event-description" data-aos="fade-left">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, organized an exclusive session on Theoretical Computer Science to introduce students to computational research and inspire interest in foundational concepts and methodologies.
                    </p>
                    <Link to="/theoreticalcomputerscience" className="read-more-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>

                    <div className="event-details right-text" data-aos="fade-left">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        07 March 2025
                    </div>

                    <div className="event-details right-text-odd" data-aos="fade-right">
                        Encrypt
                    </div>
                    <p className="software-description" data-aos="fade-right">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, organized Encrypt: Ctrl + Alt + Secure an online quiz competition on cybersecurity to mark Data Privacy Day and promote awareness on data protection and cybercrimes.
                    </p>
                    <Link to="/encrypt" className="software-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="event-details left-text-odd" data-aos="fade-right">
                        28 January 2025
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                    </div>

                    <div className="event-details left-text" data-aos="fade-left">
                        Engineering 101 Ep02
                    </div>
                    <p className="event-description" data-aos="fade-left">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, organized a Thunkable Workshop under the Engineering 101 Series to introduce students to no-code mobile app development through an interactive hands-on session.
                    </p>
                    <Link to="/thunkable" className="read-more-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="event-details right-text" data-aos="fade-left">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        22 March 2025
                    </div>

                    <div className="event-details right-text-odd-moti" data-aos="fade-right">
                        Engineering 101 Ep01
                    </div>
                    <p className="software-description" data-aos="fade-right">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, organized a Game Development Workshop under the Engineering 101 Series to introduce students to Unreal Engine and provide hands-on experience in the fundamentals of game development.
                    </p>
                    <Link to="/gamedevelopment" className="software-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="event-details left-text-odd" data-aos="fade-right">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        18 January 2025
                    </div>

                    <div className="event-details left-text" data-aos="fade-left">
                        KnackIt Ep02
                    </div>
                    <p className="event-description" data-aos="fade-left">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, organized the second session of the KnackIt series — “LinkedIn Optimized,” aimed at helping students build a strong digital presence and effectively leverage LinkedIn for professional growth.
                    </p>
                    <Link to="/linkedin" className="read-more-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>

                    <div className="event-details right-text" data-aos="fade-left">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        22 February 2025
                    </div>

                    <div className="event-details right-text-odd" data-aos="fade-right">
                        KnackIt Ep01
                    </div>
                    <p className="software-description" data-aos="fade-right">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, organized the inaugural session of the KnackIt series on Resume Preparation, guiding students on creating impactful resumes and positioning themselves effectively for career opportunities.
                    </p>
                    <Link to="/resume" className="software-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="event-details left-text-odd" data-aos="fade-right">
                        19 December 2024
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                    </div>

                    <div className="event-details left-text" data-aos="fade-left">
                        LensMaster
                    </div>
                    <p className="event-description" data-aos="fade-left">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, organized “LensMaster 2024: The Ultimate Christmas Photography Showdown” to celebrate the festive season and provide students a platform to showcase their creative photography skills.
                    </p>
                    <Link to="/lensmaster" className="read-more-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="event-details right-text" data-aos="fade-left">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        22 March 2025
                    </div>
                    */}
                    <img
                        src="/assets/mouse.svg"
                        alt="CenteredImage"
                        className="centeredimage"
                        style={{ transform: `translateY(${scrollPosition}px)` }}
                    />

                    <div className="verticalline">
                        <div className="line-dot"></div>
                        <div className="horizontal-line" data-aos="fade-left"></div>
                        <div className="software-horizontal-line" data-aos="fade-right"></div>
                        <div className="radiance-horizontal-line" data-aos="fade-left"></div>
                        <div className="motivational-horizontal-line" data-aos="fade-right"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;