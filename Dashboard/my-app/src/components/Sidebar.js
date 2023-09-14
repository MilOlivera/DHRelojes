import React from "react";
import Home from "./Home";
import Productos from "./Productos";
import Categorias from "./Categorias";
import Ultimos from "./Ultimos";
import Crud from "./Crud";
import { Link, Route, Routes } from "react-router-dom";
import "../assets/css/Styles.css";
// import { FontAwesomeIcon } from "react-icons/fa";
// import { IconName } from "react-icons/fa";
// import { IconName } from "react-icons/fa";
// import { IconName } from "react-icons/fa";

function Sidebar() {
  return (
    <React.Fragment>
      <div className="sidebar">
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <i></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="Productos" style={{ textDecoration: "none" }}>
            <i></i>
            <span>Productos</span>
          </Link>
        </li>
        <li>
          <Link to="Categorias" style={{ textDecoration: "none" }}>
            <i></i>
            <span>Categorias</span>
          </Link>
        </li>
        <li>
          <Link to="Ultimos" style={{ textDecoration: "none" }}>
            <i></i>
            <span>Ultimos</span>
          </Link>
        </li>
        <li>
          <Link to="CRUD" style={{ textDecoration: "none" }}>
            <i></i>
            <span>CRUD</span>
          </Link>
        </li>
        <li>
          <span>
            <a href="http://localhost:3043" id="volverWeb">
              Volver
            </a>
          </span>
        </li>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/ultimos" element={<Ultimos />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </React.Fragment>
  );
}

export default Sidebar;
