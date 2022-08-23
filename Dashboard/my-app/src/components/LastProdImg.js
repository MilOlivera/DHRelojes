import React from "react";
import ultimaImg from "../assets/images/canyon.png"
import "../assets/css/Styles.css"

function UltProdImg (props) {
    
  return (
    <React.Fragment>
        <div>
            <div className="lastImg">
                <img src={ultimaImg} alt="no la muestra"></img>
            </div>
        </div>
    </React.Fragment>
  );
}
export default UltProdImg;