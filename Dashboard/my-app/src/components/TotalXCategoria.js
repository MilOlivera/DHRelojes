import React from "react";
import { Component } from "react";

class TotalXCategoria extends Component {
  constructor() {
    super();
    this.state = {
      totalCategory: [],
    };
  }
  componentDidMount() {
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((count) => {
        // console.log(count);
        this.setState({ totalCategory: count.count });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <div className="ContenedorListado">
          <h2>Total por Categorias</h2>
          <div className="card-body fondoCaja">
            <div className="row">{this.state.totalCategory}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default TotalXCategoria;
