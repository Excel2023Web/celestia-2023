import React from 'react';
import './Speakers.css';
import Line from "../../assets/png/header_line.png";
import verticalLine from '../../assets/svg/spkr__line_card.svg';
import { FaLinkedinIn } from "react-icons/fa6";

const Speakers = () => {
  return (
    <div className='speakers__main' id='speakers'>
      <div className='panelist__container'>
        <p className='panelist__heading' data-aos="zoom-in">Speakers</p>
        <img className='header__line' src={Line} alt=" "></img> 
      </div>
      <div className="spkrs__container">

        <div className="spkr__card" data-aos="zoom-in">
            <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" " />
            <div className="spkr__content">
                <img src={verticalLine} alt=""/>
                <div className="spkr__context">
                    <p>MATHEW</p>
                    <button> <FaLinkedinIn size={12} color='#071C44'/>  CONNECT </button>
                </div>
            </div>
        </div>

        <div className="spkr__card">
            <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" " data-aos="zoom-in"/>
            <div className="spkr__content">
                <img src={verticalLine} alt=""/>
                <div className="spkr__context">
                    <p>MATHEW</p>
                    <button> <FaLinkedinIn size={12} color='#071C44'/>  CONNECT </button>
                </div>
            </div>
        </div>

        <div className="spkr__card" data-aos="zoom-in">
            <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" "/>
            <div className="spkr__content">
                <img src={verticalLine} alt="" />
                <div className="spkr__context" >
                    <p>MATHEW</p>
                    <button> <FaLinkedinIn size={12} color='#071C44'/>  CONNECT </button>
                </div>
            </div>
        </div>

        <div className="spkr__card" data-aos="zoom-in">
            <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" "/>
            <div className="spkr__content">
                <img src={verticalLine} alt=""/>
                <div className="spkr__context">
                    <p>MATHEW</p>
                    <button> <FaLinkedinIn size={12} color='#071C44'/>  CONNECT </button>
                </div>
            </div>
        </div>

        <div className="spkr__card" data-aos="zoom-in">
            <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" "/>
            <div className="spkr__content">
                <img src={verticalLine} alt="" />
                <div className="spkr__context">
                    <p>MATHEW</p>
                    <button> <FaLinkedinIn size={12} color='#071C44'/>  CONNECT </button>
                </div>
            </div>
        </div>

        <div className="spkr__card" data-aos="zoom-in">
            <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" " />
            <div className="spkr__content">
                <img src={verticalLine} alt="" />
                <div className="spkr__context">
                    <p>MATHEW</p>
                    <button> <FaLinkedinIn size={12} color='#071C44'/>  CONNECT </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Speakers
