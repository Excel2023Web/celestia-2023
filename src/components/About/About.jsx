import React from 'react';
import "./About.css";
import about_heading from "../../assets/svg/ABOUT.svg";

const About = () => {
  return (
    <>
    <div className='about__out__container' id='about' data-aos="zoom-in">
        <div className='about-header'>
          <img className='heading' src={about_heading} alt=""/>
          {/* <h2>About</h2> */}
        </div>
        <div className='about-body'>
          <p data-aos="zoom-in">The FinTech conference, conducted as a part of Excel 2022, aims to educate students on matters of financial literacy and inform them of the latest developments in the world of Fintech. </p>
          <p data-aos="zoom-in">FinNext aims to bring together professionals in the world of finance and technology to foster connections and build networks to make better impacts.</p>
          <p data-aos="zoom-in">The conference is the perfect platform for investors, founders, executives, academics, and startups to have a go at sharing their valuable insights, gained through decades of experience in the industry.</p>
          <p data-aos="zoom-in">FinNext also brings to the participants expert speakers, invigorating panel discussions, and workshops to enhance their skill set, to get them financially literate and ready to master matters of personal finance.</p>
        </div>
    </div>
    </>
  )
}

export default About