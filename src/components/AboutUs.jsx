import React from "react";
import "../styles/AboutUs.css";
import AboutImg from "../assests/about.png";
import PlayIcon from "../assests/play-icon.png";

function AboutUs({ SetPlay }) {
  return (
    <div className="about" id="AboutUs">
      <div className="about-left">
        <img src={AboutImg} alt="AboutImg" className="AboutImg" />
        <img
          src={PlayIcon}
          alt="PlayIcon"
          className="PlayIcon"
          onClick={() => {
            SetPlay(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University of California</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          <b>Integrity</b> We put honesty and ethical responsibility at the core
          of everything we do. <br />
          <b>Respect</b> We treat everyone with dignity and value the wisdom and
          expertise of the people that surround us. <br />
          <b>Tolerance</b> We accept the existence of different views, ideas,
          and people even if we may disagree with them. <br />
          <b>Commitment</b> We are passionate and determined to work hard in
          order to achieve our goals. <br />
          <b>Service</b> We believe in helping our community and working
          together to empower each other. <br />
          <b>Creativity</b> We celebrate innovation and encourage new ways to
          think. <br />
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
