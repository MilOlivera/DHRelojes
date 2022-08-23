import React from "react";
import TotalPorCategorias from "./TotalPorCategoria"
// import DoughnutChart from "./DoughnutChart";
import PieChart from "./DoughnutChart";


function Categorias() {
return (
    <React.Fragment>

        <div className="dataCategorias">
        <h2 className="listadoPorCatTitulo">Total por Categorias</h2>
            <div className="divTotalCategorias">
                <div className="divPorCategoria">
                    <TotalPorCategorias />
                </div>
                <div className="divPieChart">
                    <PieChart />
                </div>
            </div>
        </div>

    </React.Fragment>
);
}

export default Categorias;
