import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there,I am <br />
          <span className="info-name">MANOJ S</span>.<br /> I love experimenting
          with the web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/PHOTO.png")}
            className="picture"
            alt="coding"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
