import React from "react";
import { Component } from "react";
import UltimoProducto from './UltimoProducto'

class UltimoProductoDb extends Component{
  constructor() {
    super();
    this.state = {
      lastProduct: [],
    };
  }

  componentDidMount() {
    fetch("/api/productsLast")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((count) => {
        //console.log(genres)
        this.setState({ lastProduct: count.id[0] });
        console.log(count.id[0].name, 'soylog')
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>

          <div>
            {this.state.lastProduct.map((category, index) => {
              return <UltimoProducto {...category} key={index} />;
            })}
            
          </div>
      </React.Fragment>
    );
  }
}
export default UltimoProductoDb;
