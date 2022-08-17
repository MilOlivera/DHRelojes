import React from "react";
import "../assests/css/Contenedores.css";

function UltimoProducto (props) {
  return (
    <React.Fragment>
        <div className="ContenedorEs">
            <h2>Último Producto Creado</h2>
            <div>
                {props.name}
            </div>
        </div>
    </React.Fragment>
  );
}
export default UltimoProducto;