import React, { Component } from "react";


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
      <div className="contenedorSmallCard">
        <div className="tituloSmallCard">
          <h2>Total de Productos</h2>
        </div>
        {/* <hr className="hrHome"></hr> */}
        <div className="contenidoSmallCard">
          {this.state.totalProducts}
        </div>
      </div>
    </React.Fragment>
    );
  }
}
export default TotalProductosInDb;
