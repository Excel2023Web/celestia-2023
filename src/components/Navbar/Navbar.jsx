import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link as NavLink } from "react-scroll";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import excel_logo from "../../assets/png/excellogo-2023.png";
import "./Navbar.css";
import Stars from "../Stars/Stars";

function Navbar() {
  const [drawer, setDrawer] = useState(false);
  let scrollPosition = useScrollPosition();
  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const location = useLocation();

  const notHome = location.pathname.length > 1 ? true : false;

  const navStyleHome = {
    background: scrollPosition > 300 ? "#111111" : "rgba(17, 17, 17, 0.1)",
    boxShadow:
      scrollPosition > 200 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
    backdropFilter: "blur(10px)",
  };
  const navStyle = {
    background: scrollPosition > 300 ? "#111111" : "#111111",
    boxShadow:
      scrollPosition > 200 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
    backdropFilter: "none",
  };

  return (
    <div className="navbar" style={notHome ? navStyle : navStyleHome}>
      <div className="navbar__main container">
        <div className="nav__logo">
          <a href="https://excelmec.org" target="_blank" rel="noreferrer">
            <img className="nav__logo__img" src={excel_logo} alt="" />
          </a>
        </div>
        <div className="nav_contents">
          <NavLink className="nav__link" to="home" smooth={true} duration={500}>
            Home
          </NavLink>
          <NavLink
            className="nav__link"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </NavLink>
          <NavLink
            className="nav__link"
            to="speakers"
            smooth={true}
            duration={500}
          >
            Speakers
          </NavLink>
          <NavLink
            className="nav__link"
            to="panelist"
            smooth={true}
            duration={500}
          >
            Panelists
          </NavLink>
          <NavLink
            className="nav__link"
            to="timeline"
            smooth={true}
            duration={500}
          >
            Schedule
          </NavLink>
          <NavLink
            className="nav__link"
            to="collaborators"
            smooth={true}
            duration={500}
          >
            Partners
          </NavLink>
          <NavLink
            className="nav__link"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="nav_hamburger" onClick={handleDrawerOpen}>
          <IoMenu className="nam_menu_icon" />
        </div>
      </div>

      <Drawer
        disableScrollLock={true}
        anchor="left"
        open={drawer}
        onClose={handleDrawerClose}
        sx={{
          borderRadius: 20,
          width: "90%",
        }}
      >
        <div className="navbar__mob">
          <div className="navbar_mob_close" onClick={handleDrawerClose}>
            <IoClose />
          </div>
          <div className="navbar__mobcontents">
            <NavLink
              data-aos="fade-right"
              data-aos-duration="200"
              to="home"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Home
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="400"
              to="about"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              About
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="600"
              to="speakers"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Speakers
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="800"
              to="panelist"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Panelists
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1000"
              to="timeline"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Schedule
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1400"
              to="collaborators"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Partners
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="1400"
              to="contact"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <Stars />
      </Drawer>
    </div>
  );
}

export default Navbar;
