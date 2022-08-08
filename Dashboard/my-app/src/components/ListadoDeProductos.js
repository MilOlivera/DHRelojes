import React from "react";
import "../assests/css/Contenedores.css";

function ListadoDeProductos(props) {
  return (
    <React.Fragment>
      <li className="Listado"> {props.name}</li>
    </React.Fragment>
  );
}
export default ListadoDeProductos;
