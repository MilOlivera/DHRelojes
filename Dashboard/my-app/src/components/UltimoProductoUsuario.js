import React from "react";
import { Component } from "react";
import LastProd from './LastProd'

class UltimoProductoUsuario extends Component{
  constructor() {
    super();
    this.state = {
      lastUser: [],
    };
  }

  componentDidMount() {
    fetch("/api/usersLast")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((count) => {
        //console.log(genres)
        this.setState({ lastUser: count.id[0] });
        console.log(count.id[0].lastName, 'soylog')
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>

          <div>
            {this.state.lastUser.map((category, index) => {
              return <LastProd {...category} key={index} />;
            })}
            
          </div>
      </React.Fragment>
    );
  }
}
export default UltimoProductoUsuario;
