import React, { Component } from "react";


class TotalUsuarios extends Component {
  constructor() {
    super();
    this.state = {
      totalUsers: [],
    };
  }
  componentDidMount() {
    fetch("/api/users")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((count) => {
        // console.log(count);
        this.setState({ totalUsers: count.count });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
      <div className="contenedorSmallCard">
        <div className="tituloSmallCard">
          <h2>Total de Usuarios</h2>
        </div>
        {/* <hr className="hrHome"></hr> */}
        <div className="contenidoSmallCard">
          {this.state.totalUsers}
        </div>
      </div>
    </React.Fragment>
    );
  }
}
export default TotalUsuarios;
