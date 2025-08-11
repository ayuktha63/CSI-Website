import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import headerImage from "../assets/header_bg.png";
import logoImage from "../assets/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
    const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
                setEventsDropdownOpen(false);
                setTeamDropdownOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScrollToSection = (sectionId) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 500);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <img src={headerImage} alt="Header Background" className="header-bg" />
            <div className="logo-container">
                <img src={logoImage} alt="Logo" className="logo-img" />
            </div>

            {!isMobile && (
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="dropdown">
                            <Link to="/events">Events</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/events/2024">2024</Link></li>
                                <li><Link to="/events/2023">2023</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="/team">Team</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/team/2024">2024</Link></li>
                                <li><Link to="/team/2023">2023</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about">About Us</Link></li>
                        <li>
                            <a
                                href="#join"
                                className="join-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScrollToSection("join");
                                }}
                            >
                                Join CSI
                            </a>
                        </li>
                    </ul>
                </nav>
            )}

            {isMobile && (
                <>
                    <button
                        className={`hamburger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                    <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li>
                                <Link to="/" onClick={() => setMenuOpen(false)}>
                                    Home
                                </Link>
                            </li>
                            <li className={`mobile-dropdown ${eventsDropdownOpen ? "open" : ""}`}>
                                <div className="mobile-dropdown-header">
                                    <Link
                                        to="/events"
                                        onClick={() => setMenuOpen(false)}
                                        className="mobile-nav-link"
                                    >
                                        Events
                                    </Link>
                                    <button
                                        className="mobile-dropdown-toggle"
                                        onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                                        aria-expanded={eventsDropdownOpen}
                                        aria-label="Toggle Events dropdown"
                                    >
                                        <span className="dropdown-chevron">▼</span>
                                    </button>
                                </div>
                                <ul className="mobile-dropdown-menu">
                                    <li>
                                        <Link to="/events/2024" onClick={() => setMenuOpen(false)}>
                                            2024
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/events/2023" onClick={() => setMenuOpen(false)}>
                                            2023
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={`mobile-dropdown ${teamDropdownOpen ? "open" : ""}`}>
                                <div className="mobile-dropdown-header">
                                    <Link
                                        to="/team"
                                        onClick={() => setMenuOpen(false)}
                                        className="mobile-nav-link"
                                    >
                                        Team
                                    </Link>
                                    <button
                                        className="mobile-dropdown-toggle"
                                        onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                                        aria-expanded={teamDropdownOpen}
                                        aria-label="Toggle Team dropdown"
                                    >
                                        <span className="dropdown-chevron">▼</span>
                                    </button>
                                </div>
                                <ul className="mobile-dropdown-menu">
                                    <li>
                                        <Link to="/team/2024" onClick={() => setMenuOpen(false)}>
                                            2024
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/team/2023" onClick={() => setMenuOpen(false)}>
                                            2023
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setMenuOpen(false)}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#join"
                                    className="join-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScrollToSection("join");
                                    }}
                                >
                                    Join CSI
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
                </>
            )}
        </header>
    );
};

export default Header;