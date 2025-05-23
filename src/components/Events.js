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
                    {/* Ad Astra Event */}
                    <div className="event-details left-text" data-aos="fade-left">
                        AD ASTRA
                    </div>
                    <p className="event-description" data-aos="fade-left">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, 
                        is organizing Ad Astra, a month-long event aimed at enhancing and building a comprehensive 
                        skill set for every participant.
                    </p>
                    <Link to="/adastra" className="read-more-btn" data-aos="fade-left">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                        <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white"/>
                    </svg>
                    </Link>

                    <div className="event-details right-text" data-aos="fade-left">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        01 February 2025
                    </div>

                    {/* Software Event */}
                    <div className="event-details right-text-odd" data-aos="fade-right">
                        SOFTWARE
                    </div>
                    <p className="software-description" data-aos="fade-right">
                        Department of Computer Science & Engineering in association with CSI SB MBCET, Mar Baselios College of Engineering and Technology, Thiruvananthapuram is organizing an online workshop - Software Testing, Industrial Approach.
                    </p>
                    <Link to="/software" className="software-btn" data-aos="fade-left">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                        <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white"/>
                    </svg>
                    </Link>
                    <div className="event-details left-text-odd" data-aos="fade-right">
                        09 November 2024
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                    </div>

                    {/* Radiance Event */}
                    <div className="event-details left-text" data-aos="fade-left">
                        RADIANCE
                    </div>
                    <p className="event-description" data-aos="fade-left">
                        The Department of Computer Science and Engineering, in association with CSI SB MBCET, 
                        successfully conducted Radiance, an engaging one-day event exclusively for first-year students, 
                        featuring interactive sessions, team activities, and networking opportunities.
                    </p>
                    <button className="read-more-btn" data-aos="fade-left">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white"/>
                        </svg>
                    </button>
                    <div className="event-details right-text" data-aos="fade-left">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        28 September 2024
                    </div>

                    {/* Motivational Event */}
                    <div className="event-details right-text-odd-moti" data-aos="fade-right">
                        MOTIVATIONAL
                    </div>
                    <p className="software-description" data-aos="fade-right">
                        The Department of Computer Science and Engineering in association with CSI SB MBCET 
                        presents a Motivational Talk Session with Dr. Giby Geevarughese, Former Chairperson (2016-2019), 
                        Board of Studies in Education (UG), and Former Member of the University of Kerala.
                    </p>
                    <button className="software-btn" data-aos="fade-right">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                            <path d="M31.1828 13.5074C31.8313 12.8541 31.8273 11.7989 31.174 11.1504L20.5275 0.583881C19.8741 -0.0645362 18.8189 -0.0605596 18.1705 0.592763C17.522 1.24608 17.526 2.30135 18.1793 2.94977L27.6429 12.3423L18.2504 21.8058C17.602 22.4591 17.606 23.5144 18.2593 24.1628C18.9126 24.8112 19.9679 24.8073 20.6163 24.1539L31.1828 13.5074ZM0.561945 14.111L30.0062 14L29.9936 10.6667L0.549384 10.7777L0.561945 14.111Z" fill="white"/>
                        </svg>
                    </button>
                    <div className="event-details left-text-odd" data-aos="fade-right">
                        <img src="/assets/calender.svg" alt="Calendar Icon" className="date-icon" />
                        23 June 2024
                    </div>

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