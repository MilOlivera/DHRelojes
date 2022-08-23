import React from "react";
import Sidebar from "./components/Sidebar"
import "./assets/css/Styles.css";



function App() {
  return (
    <React.Fragment>
      <div className="contenedorGeneral">
        <div className="contenedorData">
            <Sidebar />
        </div>
      </div>
        
    </React.Fragment>
  );
}

export default App;
