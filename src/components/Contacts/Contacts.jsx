import React from 'react';
import './Contacts.css';
import Line from "../../assets/png/header_line.png";
import { MdLocalPhone,MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Contacts = () => {
  return (
    <>
        <div className='contact__out_container' id='contact'>
            <div className='panelist__container'>
                <p className='panelist__heading' data-aos="fade-up">Contacts</p>
                <img className='header__line' src={Line} alt=" " data-aos="fade-up"></img> 
            </div>
            <div className='contacts__container'>
                <div className="contact__card" data-aos="fade-up">
                    <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" " />
                    <div className="contact__content">
                        <div className="contact__context">
                            <div className='contact__context__name'>
                            <h1>Mathew</h1>
                            <p>Chairperson</p>
                            </div>
                            <div className='icons__container'>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <MdEmail />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <MdLocalPhone />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact__card" data-aos="fade-up">
                    <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" " />
                    <div className="contact__content">
                        <div className="contact__context">
                        <div className='contact__context__name'>
                            <h1>Mathew</h1>
                            <p>Chairperson</p>
                            </div>
                            <div className='icons__container'>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <MdEmail />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <MdLocalPhone />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact__card" data-aos="fade-up">
                    <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" " />
                    <div className="contact__content">
                        <div className="contact__context">
                        <div className='contact__context__name'>
                            <h1>Mathew</h1>
                            <p>Chairperson</p>
                            </div>
                            <div className='icons__container'>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <MdEmail />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <MdLocalPhone />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact__card" data-aos="fade-up">
                    <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt=" " />
                    <div className="contact__content">
                        <div className="contact__context">
                        <div className='contact__context__name'>
                            <h1>Mathew</h1>
                            <p>Chairperson</p>
                            </div>
                            <div className='icons__container'>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <MdEmail />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <MdLocalPhone />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.linkedin.com/in/nandini-p-8388b3250/'
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacts