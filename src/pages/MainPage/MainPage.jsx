import React from "react";
import "./MainPage.css";
import { Timeline,Panelist,Navbar,Landing,About,Speakers,Contacts } from "../../components";

const MainPage = () => {
  return (
    <>
      <div className="main__page">
        <Navbar />
        {/* <Landing />
        <About />
        <Speakers /> */}
        <Panelist />
        <Timeline />
        {/* <Contacts /> */}
    </div>
    </>
  );
};

export default MainPage;
