import React from 'react';
import "./About.css";
import header_line from "../../assets/png/header_line.png";
import excel_logo from "../../assets/png/excel2023.png";

const About = () => {
  return (
    <>
    <div className='about__out__container' id='about'>
        <div className='about-header'>
          {/* <p className='panelist__heading'>ABOUT</p> */}
          <img className='header__line' src={header_line} alt="" />
        </div>
        <div className='about-body'>
          <div className='body-left'>
              <img src={excel_logo} alt="" />
          </div>
          <div className='body-right'>
              <p>The FinTech conference, conducted as a part of Excel 2022, aims to educate students on matters of financial literacy and inform them of the latest developments in the world of Fintech.</p>
              <p>FinNext aims to bring together professionals in the world of finance and technology to foster connections and build networks to make better impacts.</p>
              <p>The conference is the perfect platform for investors, founders, executives, academics, and startups to have a go at sharing their valuable insights, gained through decades of experience in the industry.</p>
              <p>FinNext also brings to the participants expert speakers, invigorating panel discussions, and workshops to enhance their skill set, to get them financially literate and ready to master matters of personal finance.</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default About