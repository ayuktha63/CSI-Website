import React from "react";
import "../styles/About.css";
import leftImage from "../assets/knowcsi.png";
import missionImage from "../assets/frames.png";

const About = () => {
  return (
    <section className="about-csi">
      {/* Optional SVGs */}
      <div className="svg-container-top-right"x>
        {/* Optional: insert SVG here if needed */}
      </div>

      <div className="about-csi-contents"data-aos="fade-up">
        {/* Image Row */}
        <div className="about-csi-images">
          <img src={leftImage} alt="Left" className="about-csi-image left" />
        </div>

        {/* Description */}
        <p className="about-csi-text">
          The Computer Society of India (CSI) Student Branch at Mar Baselios
          College of Engineering & Technology (MBCET) is a dynamic community
          committed to nurturing student interest and development in Computer
          Science and related disciplines. Founded on 24th September 2004, we
          are proud to be the largest and most active student branch in Kerala.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mission-section" data-aos="fade-up">
        <img src={missionImage} alt="Our Mission" className="mission-bg" />
        <div className="mission-overlay">
          <h2 className="mission-heading">OUR MISSION</h2>
          <ul className="mission-list">
            <li>
              Facilitating knowledge distribution through workshops, seminars,
              and expert-led lectures.
            </li>
            <li>
              Promoting the development of practical skills through coding
              competitions, hackathons, and hands-on training sessions.
            </li>
            <li>
              Creating opportunities for peer interaction and collaboration
              through diverse events and activities.
            </li>
            <li>
              Bridging the gap between academia and industry by fostering
              connections between students and industry professionals.
            </li>
            <li>
              Enhancing the IT landscape in Kerala by cultivating a culture of
              innovation and excellence.
            </li>
          </ul>
        </div>
      </div>

      <div className="mission-section" data-aos="fade-up">
        <img src={missionImage} alt="Our Mission" className="mission-bg" />
        <div className="mission-overlay">
          <h2 className="mission-heading">What We Stand For</h2>
          <ul className="mission-list">
            <li>
              <b>Innovation:</b> Encouraging creative thinking and adoption of emerging technologies to drive solutions.
            </li>
            <li>
              <b>Collaboration:</b> Fostering teamwork and learning through group initiatives and community engagement.
            </li>
            <li>
              <b>Inclusivity:</b> Building a space where diverse perspectives are respected and every voice is valued.
            </li>
            <li>
              <b>Empowerment:</b> Providing the tools and opportunities for individuals to grow, lead, and make an impact.
            </li>
            <li>
              <b>Knowledge Sharing:</b> Promoting continuous learning through dialogue, peer support, and interactive events.
            </li>
          </ul>
        </div>
      </div>
      <div className="mission-section" data-aos="fade-up">
        <img src={missionImage} alt="Our Mission" className="mission-bg" />
        <div className="mission-overlay">
          <h2 className="mission-heading">Why JOIN CSI</h2>
          <ul className="mission-list">
            <li>
              Our team is composed of dedicated students and faculty advisors who work together to deliver impactful programs and initiatives.
            </li>
            <li>
              Joining the CSI Student Branch provides opportunities to participate in events, access workshops, and connect with peers and professionals in the field.
            </li>
            <li>
              We encourage all students interested in computer science and technology to join CSI and gain a network of like-minded individuals.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
