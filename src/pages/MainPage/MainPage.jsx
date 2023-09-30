import React from "react";
import "./MainPage.css";
import {
  Navbar,
  Timeline,
  // Panelist,
  Speakers,
  Contacts,
  About,
  Footer,
  Landing,
  Collaborators,
} from "../../components";

const MainPage = () => {
  return (
      <div className="main__page">
        <Navbar />
        <Landing />
        <About />
        <Speakers />
        {/* <Panelist /> */}
        <Timeline />
        <Collaborators />
        <Contacts />
        <Footer />
      </div>
  );
};

export default MainPage;
