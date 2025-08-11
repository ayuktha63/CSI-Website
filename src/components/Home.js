import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import bottomImage from "../assets/mbcet-photo.svg";
import MagnetLines from "./MagnetLines";

const slides = [
    { title: "CSI SB MBCET", subtitle: "CSI SB MBCET" },
    { title: "RENOVATING", subtitle: "renovating" },
    { title: "REINTRODUCING", subtitle: "reintroducing" },
    { title: "REIMAGINING", subtitle: "reimagining" },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="home">
            {/* MagnetLines only inside this section */}
            <div className="magnet-lines-bg">
                <MagnetLines
                    lineColor="#ffffffff"
                    lineWidth="0.3vmin"
                    lineHeight="4vmin"
                    baseAngle={0}
                />
            </div>

            {/* Text slider */}
            <div
                className="text-slider"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div className="text-slide" key={index}>
                        <h1 className="title-home">{slide.title}</h1>
                        <p className="subtitle">{slide.subtitle}</p>
                        <h1 className="title-home">{slide.title}</h1>
                    </div>
                ))}
            </div>

            {/* Fixed bottom image */}
            <img src={bottomImage} alt="Bottom" className="bottom-fixed-img" />
        </section>
    );
};

export default Home;
