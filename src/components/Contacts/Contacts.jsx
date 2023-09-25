import React from 'react';
import './Contacts.css';
import Contact from "../../assets/svg/contact_us.svg";
// import { MdLocalPhone,MdEmail } from "react-icons/md";
// import { FaLinkedinIn } from "react-icons/fa";
import { contactsData } from "../../assets/data/contacts";
import ContactCard from './ContactsCard';
const Contacts = () => {
  return (
    <>
        <div className='contact__out_container' id='contact'>
            <div className='panelist__container'>
                {/* <p className='panelist__heading' data-aos="fade-up">Contacts</p> */}
                <img className='contact__img' src={Contact} alt=" " data-aos="fade-up"></img> 
            </div>
            <div className='contacts__container'>
            {contactsData.map((contact,index) => (
                <ContactCard contact={contact} key={index}/>
            ))}
            </div>
        </div>
    </>
  );
};

export default Contacts;
