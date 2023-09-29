import React from "react";
import "./About.css";
// import about_heading from "../../assets/svg/ABOUT.svg";

const About = () => {
  return (
    <>
      <div className="about__out__container" id="about">
        <div className="about-header" data-aos="zoom-in">
          {/* <img
            className='speaker__heading'
            src={about_heading}
            data-aos="zoom-in"
            alt=""
          /> */}
          About
          {/* <h2>About</h2> */}
        </div>
        <div className="about-body">
          <p data-aos="zoom-in">
          Welcome to Celestia, the awe-inspiring spacial point of Excel MEC 2023, the annual techno-managerial extravaganza hosted by Govt. Model Engineering College, Kochi.
          <br/>Celestia invites you to embark on a breathtaking odyssey into the depths of space and knowledge. We are proud to present a riveting panel discussion featuring distinguished scientists, 
          and pioneers who have etched their names in the annals of space exploration and technology. At Celestia, we illuminate the significance of space exploration, from the captivating mysteries of 
          celestial importance to the intricate dance of Lagrange points and beyond.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
