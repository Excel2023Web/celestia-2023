import React from "react";
import "./Panelist.css";
import heading from "../../assets/svg/panelist_heading.svg"
import ImageSlider from "./ImageSlider";
// import Stars from "../Stars/Stars"

const Panelist = () => {
  return (
    <>
    <div className='panelist__out__container' id="panelist" >
      <div className='panelist__container'>
        {/* <p className='panelist__heading' data-aos="fade-up">Panelist</p> */}
        <img className='panelist__heading' src={heading} alt=" " data-aos="fade-up"></img> 
      </div>
      <ImageSlider/>
      </div>
      {/* <Stars /> */}
      </>
  )
}

export default Panelist