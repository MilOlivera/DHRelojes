import React, { Component } from "react";
import "../assests/css/Contenedores.css";

class TotalProductosInDb extends Component {
  constructor() {
    super();
    this.state = {
      totalProducts: [],
    };
  }
  componentDidMount() {
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((count) => {
        // console.log(count);
        this.setState({ totalProducts: count.count });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <div className="Contenedor">
          <h2>Total de Productos</h2>
          <div>
            <div>{this.state.totalProducts}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default TotalProductosInDb;
