import React from "react";
import "./Landing.css";
import { useSpring, animated } from "react-spring";
// import { duration } from "@mui/material";
import { Link } from "react-scroll";
const Landing = () => {
  // Define animations using react-spring
  const landingTextAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 50,
      friction: 40,
      tension: 100,
    },
    delay: 600,
    // Adjust the duration as needed
  });

  const subheadingAnimation1 = useSpring({
    from: { opacity: 0, transform: "translateX(-40px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 700 },
    delay: 1100, // Adjust the duration as needed
  });
  const subheadingAnimation2 = useSpring({
    from: { opacity: 0, transform: "translateX(0px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 700 },
    delay: 1300, // Adjust the duration as needed
  });
  const subheadingAnimation3 = useSpring({
    from: { opacity: 0, transform: "translateX(40px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 700 },
    delay: 1100, // Adjust the duration as needed
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.6)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000 },
    delay: 3000, // Adjust the duration as needed
  });

  return (
    <div id="home" className="landing_container">
      <animated.div className="landing_text" style={landingTextAnimation}>
        Celestia
      </animated.div>
      <div className="mid_container">
        <div className="landing_text2 row-container">
          <animated.p
            className="landing_subheading"
            style={subheadingAnimation1}
          >
            IMA Hall, Kaloor
          </animated.p>
          <animated.p
            className="landing_subheading"
            style={subheadingAnimation2}
          >
            6 November 2022
          </animated.p>
          <animated.p
            className="landing_subheading"
            style={subheadingAnimation3}
          >
            10:00 AM
          </animated.p>
        </div>
        <animated.button className="landing_button" style={buttonAnimation}>
          Register Now
        </animated.button>
        <section id="section07" class="demo">
          <Link to="#home">
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Landing;
