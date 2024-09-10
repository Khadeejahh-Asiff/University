import React from "react";
import "../styles/Hero.css";
import DarkArrow from "../assests/dark-arrow.png";

function Hero() {
  return (
    <div className="hero container" id="Hero">
      <div className="hero-text">
        <h1>University of California</h1>
        <h2>Chairman's Message</h2>
        <p>
          We aim to make our students adaptable to change so that they may
          thrive in a rapidly evolving job market; critical thinkers to be able
          to identify problems in our society and; creative to come up with
          pragmatic solutions.
        </p>
        <button className="btn">
          Explore More <img src={DarkArrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
