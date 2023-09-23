import React from "react";
import "./MainPage.css";
import {
  Navbar,
  Timeline,
  Panelist,
  Speakers,
  Contacts,
  About,
  Landing,
} from "../../components";

const MainPage = () => {
  return (
    <>
      <div className="main__page">
        {/* <Stars/> */}
        <Navbar />
        <Landing />
        <About />
        <Speakers />
        <Panelist />
        <Timeline />
        <Contacts />
      </div>
    </>
  );
};

export default MainPage;
