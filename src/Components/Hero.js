import React from "react";
import "../styles/Hero.css";
import fabs from "../images/fabs.png";
import kpit from "../images/kpit.png";
import tata from "../images/tata.png";
import bmw from "../images/bmw.png";
import sony from "../images/sony.png";
import huggies from "../images/huggies.png";
import eton from "../images/eton.png";
import star from "../images/star.png";
import pg from "../images/pg.png";
import NavDots from "./Navdots";
// 👉 put leo.gif inside public/ folder
// Example: public/leo.gif
// Then you can use src="/leo.gif"

const Hero = ({ darkMode }) => {
  return (
    <section className={`hero ${darkMode ? "dark" : ""}`}>
      {/* Left side: GIF */}
      <div className="hero-gif">
        <img src="/leo.gif" alt="Leo Animation" />
      </div>

      {/* Right side: Text */}
      <div className="hero-text">
        <span>Your Trusted UI UX Design Agency.</span>
        <h1>
          Design <br />
          Transform <br />
          Accelerate
        </h1>
        <p>
          Redefining user experiences through <br />
          Behavioural Science & AI
        </p>
      </div>

      {/* Logos */}
      <div className="clients">
        <img src={fabs} alt="FAB" />
        <img src={kpit} alt="KPIT" />
        <img src={tata} alt="TATA" />
        <img src={bmw} alt="BMW" />
        <img src={sony} alt="SONY" />
        <img src={huggies} alt="HUGGIES" />
        <img src={eton} alt="ETON" />
        <img src={star} alt="STAR" />
        <img src={pg} alt="P&G" />
      </div>

    </section>
  );
};

export default Hero;
