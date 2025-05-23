import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import hooks for navigation
import "../styles/Footer.css"; // Import CSS
import logo from "../assets/csi_logo_about.png"; // Ensure logo is in assets folder
// Importing local icons from Vector folder
import instaIcon from "../Vector/instagram.svg";
import discordIcon from "../Vector/discord.svg";
import mailIcon from "../Vector/mail.svg";
import linkedinIcon from "../Vector/Linkedin.svg";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    //eslint-disable-next-line
    const handleScrollToSection = (sectionId) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 500);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="footer">
            {/* CSI Logo */}
            <img src={logo} alt="CSI Logo" className="footer-logo" />

            {/* Navigation Links */}
            <nav className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/team">Team</Link>
                <Link to="/events">Events</Link>
                <Link to="/contactus">Contact Us</Link>
            </nav>

            {/* Social Media Icons */}
            <div className="footer-icons">
                <a href="https://www.instagram.com/csimbcet/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src={instaIcon} alt="Instagram" className="footer-icon-img" />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                    <img src={discordIcon} alt="Discord" className="footer-icon-img" />
                </a>
                <a href="mailto:csimbcet@mbcet.ac.in" aria-label="Email">
                    <img src={mailIcon} alt="Email" className="footer-icon-img" />
                </a>
                <a href="https://www.linkedin.com/company/csi-sb-mbcet/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-icon-img" />
                </a>
            </div>

            {/* Divider Line */}
            <hr className="footer-line" />

            {/* Copyright Text */}
            <p className="footer-text">
                © 2025 CSI MBCET. All Rights Reserved.
            </p>

            {/* Designer & Developer Credit */}
            <p className="footer-designer">Designed by Niranj R</p>
            <p className="footer-designer">Developed by Krishna Prasad</p>
        </footer>
    );
};

export default Footer;
