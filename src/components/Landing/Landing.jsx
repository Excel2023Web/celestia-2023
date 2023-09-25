import React from "react";
import "./Landing.css";
import { useSpring, animated } from "react-spring";
import Countdown from "../Counter/Counter";
import Stars from "../Stars/Stars";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";

const Landing = () => {
  const landingTextAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 50,
      friction: 40,
      tension: 100,
    },
    delay: 900,
  });

  const subheadingAnimation1 = useSpring({
    from: { opacity: 0, transform: "translateX(-40px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 700 },
    delay: 1100,
  });
  const subheadingAnimation2 = useSpring({
    from: { opacity: 0, transform: "translateX(0px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 700 },
    delay: 1300,
  });
  const subheadingAnimation3 = useSpring({
    from: { opacity: 0, transform: "translateX(40px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 700 },
    delay: 1100,
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.6)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000 },
    delay: 3000,
  });

  return (
    <div className="landing_container" id="home">
      <animated.div className="landing_text" style={landingTextAnimation}>
        Celestia
      </animated.div>
      <Countdown />
      <div className="mid_container">
        <div className="landing_text2 row-container">
          <animated.p
            className="landing_subheading"
            style={subheadingAnimation1}
          >
            <a href="https://maps.app.goo.gl/sQVKBrgDTXRCdieH6">
              <CiLocationOn fontWeight={900} />
            </a>
            MEC, Cochin
          </animated.p>
          <animated.p
            className="landing_subheading"
            style={subheadingAnimation2}
          >
            <SlCalender fontWeight={900} />
            14 October 2023
          </animated.p>
          <animated.p
            className="landing_subheading"
            style={subheadingAnimation3}
          >
            <AiOutlineClockCircle fontWeight={900} />
            11:00 AM
          </animated.p>
        </div>
        <animated.button className="landing_button" style={buttonAnimation}>
          Register Now
        </animated.button>
      </div>
      <Stars />
    </div>
  );
};

export default Landing;
