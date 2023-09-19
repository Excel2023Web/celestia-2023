import React from "react";
import "./Panelist.css";
import Line from "../../assets/png/header_line.png"
import ImageSlider from "./ImageSlider";

const Panelist = () => {
  return (
    <>
    <div className='panelist__out__container'>
      <div className='panelist__container'>
        <p className='panelist__heading'>Panelist</p>
        <img className='header__line' src={Line} alt=" "></img> 
      </div>
      <ImageSlider/>
      </div>
      </>
  )
}

export default Panelist