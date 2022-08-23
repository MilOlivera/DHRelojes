import React, { Component } from "react";
// import TotalCategorias from './TotalCategorias'

class TotalCategoriasInDb extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }
  componentDidMount() {
    fetch("/api/categories")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((count) => {
        //console.log(genres)
        this.setState({ categoryList: count.count });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <div className="contenedorSmallCard">
          <div className="tituloSmallCard">
            <h2>Total de Categorias</h2>
          </div>
          {/* <hr className="hrHome"></hr> */}
          <div className="contenidoSmallCard">
            {this.state.categoryList}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default TotalCategoriasInDb;