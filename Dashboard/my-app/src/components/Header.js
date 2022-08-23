import React, {useEffect} from "react";
import logo from "../assets/images/logo-reloj.png";
import "../assets/css/Styles.css";



function Header() {
  return (
    <React.Fragment>
      <div className="Header">
        <img src={logo} alt="logo" className="LogoH" />
        <h2 className="dashboardTitle">Dashboard - DH Relojes</h2>
      </div>
      {/* <script src="../assets/js/scriptHome.js">
      </script> */}
    </React.Fragment>
  );
}

export default Header;
