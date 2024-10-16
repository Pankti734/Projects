import React from "react";
import "./About.css";
import themePattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" className="panku" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a passionate frontend-developer currently a fresher</p>
            <p>
              My passion for fronted develoment is not only learnig but also
              implemnting my knowledge.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of coding</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>9+</h1>
          <p>projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Certificates</p>
        </div>
      </div>
    </div>
  );
};

export default About;
