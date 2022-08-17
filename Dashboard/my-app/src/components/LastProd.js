import React from "react";
import "../assests/css/Contenedores.css";

function LastProd (props) {
  return (
    <React.Fragment>
        <div className="ContenedorEs">
            <h2>Último Usuario Creado</h2>
            <div>
                {props.name} {props.lastName} 
            </div>
        </div>
    </React.Fragment>
  );
}
export default LastProd;
