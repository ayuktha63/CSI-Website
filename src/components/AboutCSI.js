import React from "react";
import "../styles/AboutCSI.css"; // Import CSS for styling
import { ReactComponent as TopRightLogo } from "../assets/topright.svg"; // Import top-right SVG
import { ReactComponent as BottomLeftLogo } from "../assets/bottomleft.svg"; // Import bottom-left SVG
import leftImage from "../assets/knowcsi.png"; // PNG imported as a regular image
import rightImage from "../assets/csi_logo_about.png"; // PNG imported as a regular image

const AboutCSI = () => {
    return (
        <section id="about" className="about-csi">
            {/* SVG in the top right corner */}
            <div className="svg-container-top-right"data-aos="fade-left">
                <TopRightLogo />
            </div>

            {/* SVG in the bottom left corner */}
            <div className="svg-container-bottom-left"data-aos="fade-right">
                <BottomLeftLogo />
            </div>

            {/* Content Container */}
            <div className="about-csi-content">
                {/* Image Row */}
                <div className="about-csi-images">
                    <img src={leftImage} alt="Left_Image" className="about-csi-image left" />
                    <img src={rightImage} alt="Right_Image" className="about-csi-image right" />
                </div>

                {/* Description */}
                <p className="about-csi-text">
                    The Computer Society of India (CSI) Student Branch at Mar Baselios College of Engineering & Technology (MBCET) is a dynamic community committed to nurturing student interest and development in Computer Science and related disciplines. Founded on 24th September 2004, we are proud to be the largest and most active student branch in Kerala.
                </p>
            </div>
        </section>
    );
};

export default AboutCSI;
