import React from "react";


function TotalCategorias (props) {
  return (
    <React.Fragment>
      <table>
        <td><p>{props.name} :</p>
        </td>
        <td><p>{props.total}</p>
        </td>
      {/* <p className="categoriasSmallCard"> {props.name} : {props.total}</p> */}
      </table>
    </React.Fragment>
  );
}
export default TotalCategorias;
