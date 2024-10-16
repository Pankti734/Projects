import React from "react";
import "./Contact.css";
import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "de293787-6195-43cb-bec6-821e70968de6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Connect with me</h1>
          <p>
            Feel free to connect with me let's collaborate and create new
            projects
          </p>
          <div className="contact-details"></div>
          <div className="contact-detail">
            <img src={mailIcon} alt="" />
            <p>panktipandya734@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={callIcon} alt="" />
            +91-1923764647
          </div>
          <div className="contact-detail">
            <img src={locationIcon} alt="" />
            ahmedabad,gujarat,india
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name:</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your email:</label>
          <input type="email" placeholder="enter your email" name="email" />
          <label htmlFor="">write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter the message here"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
