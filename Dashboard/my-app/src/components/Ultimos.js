import React from "react";
import UltimoProductoDb from "./UltimoProductoDb"
import UltimoProductoUsuario from "./UltimoProductoUsuario"
import LastProdImgDb from "./LastProdImgDb";
import "../assets/css/Styles.css"




function Ultimo() {
return (
    <React.Fragment>

    <div className="dataUltimos">
        <UltimoProductoDb />
        <UltimoProductoUsuario />
    </div>

    </React.Fragment>
);
}

export default Ultimo;
