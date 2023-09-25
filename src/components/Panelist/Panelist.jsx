import React from "react";
import "./Panelist.css";
// import heading from "../../assets/svg/panelist_heading.svg"
import ImageSlider from "./ImageSlider";

const Panelist = () => {
  return (
    <>
    <div className='panelist__out__container' id="panelist" >
      <div className='panelist__container' data-aos="zoom-in">
        {/* <img className='speaker__heading' src={heading} alt=" " data-aos="fade-up"></img>  */}
        Panelists
      </div>
      <ImageSlider/>
      </div>
      </>
  )
}

export default Panelist