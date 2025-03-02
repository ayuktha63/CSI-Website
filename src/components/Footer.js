import React from "react";
import "../styles/Footer.css"; // Import CSS
import logo from "../assets/csi_logo_about.png"; // Ensure logo is in assets folder

// Importing local icons from Vector folder
import instaIcon from "../Vector/instagram.svg";
import discordIcon from "../Vector/discord.svg";
import mailIcon from "../Vector/mail.svg";
import linkedinIcon from "../Vector/Linkedin.svg";

const Footer = () => {
    return (
        <footer className="footer">
            {/* CSI Logo */}
            <img src={logo} alt="CSI Logo" className="footer-logo" />

            {/* Navigation Links */}
            <nav className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#team">Team</a>
                <a href="#events">Events</a>
                <a href="#join">Join CSI</a>
            </nav>

            {/* Social Media Icons */}
            <div className="footer-icons">
                <a href="https://www.instagram.com/csimbcet/" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt="Instagram" className="footer-icon-img" />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <img src={discordIcon} alt="Discord" className="footer-icon-img" />
                </a>
                <a href="mailto:csimbcet@mbcet.ac.in">
                    <img src={mailIcon} alt="Email" className="footer-icon-img" />
                </a>
                <a href="https://www.linkedin.com/company/csi-sb-mbcet/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-icon-img" />
                </a>
            </div>

            {/* Divider Line */}
            <hr className="footer-line" />

            {/* Copyright Text */}
            <p className="footer-text">
                © 2025 CSI MBCET. All Rights Reserved.
            </p>

            {/* Designer Credit */}
            <p className="footer-designer">Designed by Niranj R</p>
        </footer>
    );
};

export default Footer;
