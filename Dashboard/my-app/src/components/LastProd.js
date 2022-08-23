import React from "react";
import UltUserImg from "./lastUserImg";

function LastProd (props) {
  return (
    <React.Fragment>
        <div className="contenedorLastUser">
            <h2 className="tituloLast">Último Usuario Creado</h2>
            <div className="contenedorCardLast">
              <div className="contenedorLastTitulo">
                {props.name} {props.lastName}
              </div>
              <div className="contenedorLastImg">
                <UltUserImg />
              </div>
            </div>
        </div>
    </React.Fragment>
  );
}
export default LastProd;
