import React from "react";
import { ReactDOM } from "react-dom";
// import {Doughnut, Pie} from 'react-chartjs-2'
import * as V from 'victory';
import { VictoryPie } from "victory";

// function DoughnutChart(props){

//     const data = {
//         labels:[
//             'Center Pompidou',
//             'Jaquet Droze',
//             'Tinker',
//             'Colors Of Nature'
//         ],
//         dataset:[{
//             label:"PROBANDO",
//             backgroundColor:[
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)',
//                 'rgb(70, 120, 210)'
//             ],
//             data:[
//                 '4',
//                 '4',
//                 '7',
//                 '5'
//             ],
//             hoverOffset: 4
//         }]
//     }
//     const opciones = {
//         mantainAspectRadio : false,
//         responsive: true
//     }

//     return (
//         <div>
//             <Pie data={data} options={opciones} />
//         </div>
//     )
// }

// export default DoughnutChart;

function PieChart(){

    const data = [
        {
            x: 'Center P.', y: '4'
        },
        {
            x: 'Tinker', y: '7'
        },
        {
            x: 'Colors of N.', y: '5'
        },
        {
            
            x: 'Jaquet D.', y: '4'
        }

    ]

    return (
        <div className="pieChart">
            <VictoryPie
            data={data}
            colorScale={['#ff6961','#77dd77','#fdfd96','#84b6f4']}
            radius={100}
            innerRadius={40}
            padAngle={2}
            fill={'white'}
            />
        </div>
    )
}

export default PieChart;
