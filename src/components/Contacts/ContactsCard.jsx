import React from "react";
import { FiPhoneCall, FiLinkedin, FiMail } from "react-icons/fi";
import './ContactCard.css'
function ContactCard({contact}) {
  return (
    <div data-aos="zoom-in" data-aos-delay="150" className="contactCard">
    
      <div className="contact_img">
        <img className="contact_image" src={contact.image} alt="contacting" />
      </div>
      <h2>{contact.name}</h2>
      <h3>{contact.designation}</h3>
      <div className="contact_social">
        <a href={`tel:${contact.phone}`} target="_blank" rel="noreferrer">
          <FiPhoneCall className="contact_social_icon" />
        </a>
        <a  href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <FiMail className="contact_social_icon" />
        </a>
        <a href={contact.linkedIn} target="_blank" rel="noreferrer">
          <FiLinkedin className="contact_social_icon" />
        </a>
      </div>
    </div>
  );
}

export default ContactCard;