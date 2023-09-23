import React from "react";
import "./MainPage.css";
import {
  Navbar,
  Timeline,
  Panelist,
  Speakers,
  Contacts,
  About,
  Footer,
} from "../../components";

const MainPage = () => {
  return (
    <>
      <div className="main__page">
        <Navbar />
        <About />
        <Speakers />
        <Panelist />
        <Timeline />
        <Contacts />
        <Footer/>
      </div>
    </>
  );
};

export default MainPage;
