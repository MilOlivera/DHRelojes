import React from "react";
import "../assests/css/Contenedores.css";

function TotalCategorias (props) {
  return (
    <React.Fragment>
      <li className="Listado"> {props.name} : {props.total} </li>
    </React.Fragment>
  );
}
export default TotalCategorias;
