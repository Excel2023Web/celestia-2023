import React from 'react';
import './Contacts.css';
import Contact from "../../assets/svg/contact_us.svg";
import { MdLocalPhone,MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { contactsData } from "../../assets/data/contacts";

const Contacts = () => {
  return (
    <>
        <div className='contact__out_container' id='contact'>
            <div className='panelist__container'>
                {/* <p className='panelist__heading' data-aos="fade-up">Contacts</p> */}
                <img className='contact__img' src={Contact} alt=" " data-aos="fade-up"></img> 
            </div>
            <div className='contacts__container'>
            {contactsData.map((contact) => (
                <div className="contact__card" data-aos="fade-up">
                    <img src={contact.image} alt=" " />
                    <div className="contact__content">
                        <div className="contact__context">
                            <div className='contact__context__name'>
                            <h2>{contact.name}</h2>
                            <p>{contact.designation}</p>
                            </div>
                            <div className='icons__container'>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href={`mailto:${contact.email}`}
                                >
                                    <MdEmail />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href={`tel:${contact.phone}`}
                                >
                                    <MdLocalPhone />
                                </a>
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href={contact.linkedIn}
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div className="contacts__container">
          {contacts.map((contact, index) => {
            return (
              <div className="contact__card" data-aos="fade-up" key={index}>
                <img
                  src={contact.image}
                  alt=" "
                />
                <div className="contact__content">
                  <div className="contact__context">
                    <h1>{contact.name}</h1>
                    <p>{contact.position}</p>
                    <div className="icons__container">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={contact.email}
                      >
                        <MdEmail />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={contact.phno}
                      >
                        <MdLocalPhone />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={contact.linkedin}
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contacts;
