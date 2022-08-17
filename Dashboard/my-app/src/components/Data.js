import React from "react";
import TotalProductosInDb from "./TotalProductosInDb";
import TotalUsuarios from "./TotalUsuarios";
import TotalCategoriasInDb from "./TotalCategoriasInDb";
import UltimoProductoUsuario from "./UltimoProductoUsuario";
import TotalXCategoria from "./TotalXCategoria";
import ListadoDeProductosInDb from "./ListadoDeProductosInDb";
import UltimoProductoDb from "./UltimoProductoDb"
import "../assests/css/Contenedores.css";

function Data() {
  return (
    <React.Fragment>
      <div className="GranContenedor">
        <div className="Contenedores">
          <TotalProductosInDb />
          <TotalUsuarios />
          <TotalCategoriasInDb />
          <UltimoProductoUsuario />
          <UltimoProductoDb/>
        </div>
        <div>
          <TotalXCategoria />
        </div>
        <div>
          <ListadoDeProductosInDb />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Data;
