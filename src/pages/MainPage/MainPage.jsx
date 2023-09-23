import React from "react";
import "./MainPage.css";
import { Navbar, Timeline, Panelist, Speakers, Contacts, Landing } from "../../components";

const MainPage = () => {
  return (
    <>
      <div className="main__page">
        <Navbar />
        <Landing/>
        <Speakers />
        <Panelist />
        <Timeline />
        <Contacts />
      </div>
    </>
  );
};

export default MainPage;
