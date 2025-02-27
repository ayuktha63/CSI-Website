import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import headerImage from "../assets/header_bg.png"; // Background image
import logoImage from "../assets/logo.png"; // Logo image

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Update `isMobile` state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false); // Close mobile menu when switching to desktop
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="header">
            {/* Background Image */}
            <img src={headerImage} alt="Header Background" className="header-bg" />

            {/* Logo Container */}
            <div className="logo-container">
                <img src={logoImage} alt="Logo" className="logo-img" />
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#join" className="join-btn">Join CSI</a></li>
                    </ul>
                </nav>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
                <>
                    {/* Hamburger Menu */}
                    <button
                        className={`hamburger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                    {/* Mobile Navigation */}
                    <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                            <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
                            <li><a href="#team" onClick={() => setMenuOpen(false)}>Team</a></li>
                            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                            <li><a href="#join" className="join-btn" onClick={() => setMenuOpen(false)}>Join CSI</a></li>
                        </ul>
                    </nav>

                    {/* Overlay (closes menu on click) */}
                    {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
                </>
            )}
        </header>
    );
};

export default Header;
