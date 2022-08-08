import React from "react";
import logo from "../assests/images/logo-reloj.png";
import "../assests/css/Header.css";

function Header() {
  return (
    <React.Fragment>
      <div className="Header">
        <img src={logo} alt="logo" className="LogoH" />
        <h2>Dashboard DH Relojes</h2>
      </div>
    </React.Fragment>
  );
}

export default Header;
