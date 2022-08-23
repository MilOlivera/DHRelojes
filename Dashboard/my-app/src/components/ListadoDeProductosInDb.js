import React, { Component } from "react";
import ListadoDeProductos from "./ListadoDeProductos";
import "../assets/css/Styles.css";

class ListadoDeProductosInDb extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        //console.log(genres)
        this.setState({ productList: products.products });
        console.log(products.products)
      })
      .catch((error) => console.log(error));
      
  }

  render() {
    return (
      <React.Fragment>
        <div className="contenedorListado">
          {/* <table>
            <thead> */}
              <h2 className="listadoProductosTitulo">Listado de Productos</h2>
            {/* </thead>
            <tbody> */}
              <div className="listadoProductos">
                {this.state.productList.map((product, index) => {
                return <ListadoDeProductos {...product} key={index} />;
                })}
              </div>
            {/* </tbody>
          </table> */}
        </div>
      </React.Fragment>
    );
  }
}
export default ListadoDeProductosInDb;
