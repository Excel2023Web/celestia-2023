import React from 'react';
import './Speakers.css';
import verticalLine from '../../assets/svg/spkr_line.svg';
import { speakersData } from '../../assets/data/speaker';

const Speakers = () => {
  return (
    <div className='speakers__main' id='speakers'>
      <div className='speaker_text' data-aos="zoom-in">
        Speakers
      </div>
      <div className="spkrs__container">
      {speakersData.map((contact) => (
        <div className="spkr__card" key={contact.id} data-aos="zoom-in">
            <img src={contact.image} alt=" " />
            <div className="spkr__content">
                <img src={verticalLine} alt=""/>
                <div className="spkr__context">
                    <p>{contact.name}</p>
                    <p>{contact.designation}</p>
                    {/* <button className='speaker__contact'><a href={contact.linkedIn} target="_blank"
                                rel="noreferrer"> CONNECT </a></button> */}
                </div>
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Speakers
