import React from "react";
import "./MainPage.css";
import { Navbar, Timeline, Panelist, Speakers, Contacts, About } from "../../components";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <>npm 
      <div className="main__page">
        <Navbar />
        <About/>
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
