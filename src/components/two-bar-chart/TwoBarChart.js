import React from "react";
import "./TwoBarChart.scss"
import {ChartBar} from "../chart-bar/ChartBar";


export const TwoBarChart = ({title1, title2, text1, text2, height1, height2}) => (
    <div className="twoBarChart">
        <ChartBar title={title1} text={text1} height={height1}/>
        <ChartBar title={title2} text={text2} height={height2}/>
    </div>
)
