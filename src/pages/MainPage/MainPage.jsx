import React from "react";
import "./MainPage.css";
import { Timeline, Panelist, Speakers } from "../../components";

const MainPage = () => {
  return (
    <>
      <div className="main__page">
        <Panelist />
        <Timeline />
        <Speakers />
      </div>
    </>
  );
};

export default MainPage;
