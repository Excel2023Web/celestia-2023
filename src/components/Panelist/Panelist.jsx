import React from "react";
import "./Panelist.css";
import ImageSlider from "./ImageSlider";

const Panelist = () => {
  return (
    <>
    <div className='panelist__out__container' id="panelist" >
      <div className='panelist__container' data-aos="zoom-in">
        Panelists
      </div>
      <ImageSlider/>
      </div>
      </>
  )
}

export default Panelist