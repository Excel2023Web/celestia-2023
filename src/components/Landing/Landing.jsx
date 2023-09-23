import React from "react";
import "./Landing.css";
import image from "../../assets/svg/astronaut-is-flying-space-suit_219493-15-removebg-preview 1.svg";

const Landing = () => {
  return (
    <>
      <div id="home" className="landing_container">
        {/* <motion.img
          // initial={{ x: "-200%", y: 0 }}
          //   animate={{ x: "-100%", y: 0}}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.3 },
            delay: 0.2,
          }}
          src={image}
          alt="astronaut"
          className="landing_image"
        /> */}
        <div className="landing_text">Celestia</div>
        <div className="mid_container">
          <div className="landing_text2 row-container">
            <p className="landing_subheading">IMA Hall, Kaloor</p>
            <p className="landing_subheading">6 November 2022 </p>
            <p className="landing_subheading">10:00 AM</p>
          </div>
          <button className="landing_button">Register Now</button>
        </div>
      </div>
    </>
  );
};

export default Landing;
