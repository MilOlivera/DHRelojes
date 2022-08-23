import React from "react";
import ultimaUserImg from "../assets/images/default-image.jfif"
import "../assets/css/Styles.css"

function UltUserImg (props) {
    
  return (
    <React.Fragment>
        <div>
            <div className="lastUserImg">
                <img src={ultimaUserImg} alt="no la muestra" id="jfif"></img>
            </div>
        </div>
    </React.Fragment>
  );
}
export default UltUserImg;