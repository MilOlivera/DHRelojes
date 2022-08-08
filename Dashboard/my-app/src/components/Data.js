import React from "react";
import TotalProductosInDb from "./TotalProductosInDb";
import TotalUsuarios from "./TotalUsuarios";
import TotalCategorias from "./TotalCategorias";
import UltimoProductoUsuario from "./UltimoProductoUsuario";
import TotalXCategoria from "./TotalXCategoria";
import ListadoDeProductosInDb from "./ListadoDeProductosInDb";
import "../assests/css/Contenedores.css";

function Data() {
  return (
    <React.Fragment>
      <div className="GranContenedor">
        <div className="Contenedores">
          <TotalProductosInDb />
          <TotalUsuarios />
          <TotalCategorias />
          <UltimoProductoUsuario />
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
