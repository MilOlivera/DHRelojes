import React, { Component } from "react";
import ListadoDeProductos from "./ListadoDeProductos";
import "../assests/css/Contenedores.css";

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
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <div className="ContenedorListado">
          <h2>Listado de Productos</h2>
          <div>
            {this.state.productList.map((product, index) => {
              return <ListadoDeProductos {...product} key={index} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ListadoDeProductosInDb;
