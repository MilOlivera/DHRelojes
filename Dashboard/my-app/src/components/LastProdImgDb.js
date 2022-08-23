import React from "react";
import { Component } from "react";
import UltProdImg from './LastProdImg'

class LastProdImgDb extends Component{
  constructor() {
    super();
    this.state = {
      lastProductImg: [],
    };
  }

  componentDidMount() {
    fetch("/api/lastProdImg")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((count) => {
        //console.log(genres)
        this.setState({ lastProductImg: count.id[0] });
        console.log(count.id[0].name, 'ULT IMG')
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>

          <div>
            {this.state.lastProductImg.map((category, index) => {
              return <UltProdImg {...category} key={index} />;
            })}
            
          </div>
      </React.Fragment>
    );
  }
}
export default LastProdImgDb;
