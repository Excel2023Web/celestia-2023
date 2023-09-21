import React from 'react';
import "./About.css";
import header_line from "../../assets/png/header_line.png";
import excel_logo from "../../assets/png/excel2023.png";

const About = () => {
  return (
    <>
    <div id='about'>
        <div id='about-header'>
          <div id='text'>ABOUT</div>
          <div  className= 'header_line' id='header-img'><img src={header_line} alt="" /></div>
        </div>
        <div id='about-body'>
          <div id='body-left'>
              <img src={excel_logo} alt="" />
          </div>
          <div id='body-right'>
              <p>The FinTech conference, conducted as a part of Excel 2022, aims to educate students on matters of financial literacy and inform them of the latest developments in the world of Fintech. FinNext aims to bring together professionals in the world of finance and technology to foster connections and build networks to make better impacts.
The conference is the perfect platform for investors, founders, executives, academics, and startups to have a go at sharing their valuable insights, gained through decades of experience in the industry.
FinNext also brings to the participants expert speakers, invigorating panel discussions, and workshops to enhance their skill set, to get them financially literate and ready to master matters of personal finance.</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default About