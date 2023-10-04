import React, { useEffect } from "react";
import "./Workshop.css";
import ihubRobo from "../../assets/jpg/ihubRobo.jpeg";
import Aos from "aos";
function Workshop() {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="workshop__container_main" id="workshop">
      <h2 className='contact_text' data-aos="zoom-in">
        Workshop
      </h2>
      <div className="ws__content" data-aos="fade-up" aos-delay="200">
        <a href="https://www.ihubrobotics.com/" target="blank">
          <img className="ihub-img" src={ihubRobo} alt="excel 2023" />
        </a>
        <h2>Workshop on Model Rocketry</h2>
        <p>
          The workshop on Model Rocketry is planned to give an overall idea of
          the basic science, technologies, and software used in model rocketry.
          Participants will be able to design, simulate, assemble and launch a
          model rocket on their own.
        </p>
        <ul>
          <li>The workshop includes familiarization of OpenRocket Software.</li>
          <li>
            Design and simulation of a model rocket in OpenRocket software.
          </li>
          <li>Design of 3D CAD model of the rocket.</li>
          <li>Assembly of the 3D printed rocket.</li>
          <li>Launch of the rocket.</li>
        </ul>
      </div>
    </div>
  );
}

export default Workshop;
