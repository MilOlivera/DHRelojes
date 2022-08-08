import React from "react";
import Header from "./components/Header";
import Data from "./components/Data";
import Footer from "./components/Footer";
import "./assests/css/App.css";
import reloj from "./assests/images/gif-reloj.gif";

function App() {
  return (
    <React.Fragment>
      <div className="AppSup">
        <div className="App">
          <Header />
          <Data />
          <Footer />
        </div>
        <img src={reloj} alt="gran-reloj" className="FotoReloj" />
      </div>
    </React.Fragment>
  );
}

export default App;
