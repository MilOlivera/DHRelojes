import React from "react";
import LastProdImgDb from "./LastProdImgDb";

function UltimoProducto (props) {
  return (
    <React.Fragment>
        <div className="contenedorLastProduct">
            <h2 className="tituloLast">Último Producto Creado</h2>
            <div className="contenedorCardLast">
            {/* <div className="prueba2"></div> */}
              <div className="contenedorLastTitulo">
                {props.name}
              </div>
              <div className="contenedorLastImg">
                <LastProdImgDb />
              </div>
            {/* <div className="prueba"></div> */}
            </div>
        </div>
    </React.Fragment>
  );
}
export default UltimoProducto;