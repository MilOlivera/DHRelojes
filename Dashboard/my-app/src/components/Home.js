import React from "react";
// import logo from "../assests/images/logo-reloj.png";
import "../assets/css/Styles.css";
import TotalProductosInDb from "./TotalProductosInDb";
import TotalUsuarios from "./TotalUsuarios";
import TotalCategoriasInDb from "./TotalCategoriasInDb";
import Header from "./Header"
import Footer from "./Footer"

function Home() {
return (
    <React.Fragment>
    <div className="mainContainer">
        <Header />

        <div className="dataHome">
            <TotalCategoriasInDb />
            <TotalUsuarios />
            <TotalProductosInDb />
        </div>
        <div>

        </div>
        {/* <div className="Footer">
            <Footer />
        </div> */}
    </div>
    </React.Fragment>
);
}

export default Home;
