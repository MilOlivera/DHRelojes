import React from "react";
import logo from "../assets/images/logo-dh-blanco.png";

function Footer() {
  return (
    <React.Fragment>
      <div className="Footer">
        <div>
          <img src={logo} alt="Logo" className="LogoFS" />
        </div>
        <p>Todos los derechos reservados © 2022 | Relojes DH </p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
