import React from "react";
import "./Myprojects.css";
import themePattern from "../../assets/theme_pattern.svg";
import myWrokdata from "../../assets/mywork_data";
import arrowIcon from "../../assets/arrow_icon.svg";

const Myprojects = () => {
  return (
    <div id="project" className="myproject">
      <div className="myproject-title">
        <h1>My Projects</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="myproject-container">
        {myWrokdata.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="myproject-showmore">
        <p>Show more</p>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  );
};

export default Myprojects;
