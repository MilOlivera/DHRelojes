import React from "react";

function ListadoDeProductos(props) {
  return (
    <React.Fragment>
      <tbody className="Listado"> 
        <tr>
          {props.name}
        </tr>
      </tbody>
    </React.Fragment>
  );
}
export default ListadoDeProductos;
