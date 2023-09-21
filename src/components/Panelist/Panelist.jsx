import React from "react";
import "./Panelist.css";
import Line from "../../assets/png/header_line.png"
import ImageSlider from "./ImageSlider";

const Panelist = () => {
  return (
    <>
    <div className='panelist__out__container' id="panelist" >
      <div className='panelist__container'>
        <p className='panelist__heading' data-aos="fade-up">Panelist</p>
        <img className='header__line' src={Line} alt=" " data-aos="fade-up"></img> 
      </div>
      <ImageSlider/>
      </div>
      </>
  )
}

export default Panelist