import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import hooks for navigation
import "../styles/Header.css";
import headerImage from "../assets/header_bg.png"; // Background image
import logoImage from "../assets/logo.png"; // Logo image

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
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
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><a href="#join" className="join-btn" onClick={(e) => { e.preventDefault(); handleScrollToSection("join"); }}>Join CSI</a></li>
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
                            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                            <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
                            <li><Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link></li>
                            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                            <li><a href="#join" className="join-btn" onClick={(e) => { e.preventDefault(); handleScrollToSection("join"); }}>Join CSI</a></li>
                        </ul>
                    </nav>

                    {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
                </>
            )}
        </header>
    );
};

export default Header;
