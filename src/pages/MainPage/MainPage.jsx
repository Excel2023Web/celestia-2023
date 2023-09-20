import React from "react";
import "./MainPage.css";
import { Timeline,Panelist } from "../../components";

const MainPage = () => {
  return (
    <>
      <div className="main__page">
      <Panelist />
      <Timeline />
    </div>
    </>
  );
};

export default MainPage;
