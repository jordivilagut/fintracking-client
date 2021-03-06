import React from "react";
import "./Charts.scss"
import {ChartBar} from "../chart-bar/ChartBar";


export const TwoBarChart = ({title1, title2, text1, text2, height1, height2}) => (
    <div className="chart small">
        <ChartBar title={title1} text={text1} height={height1} extraClass="glass bar bar-md"/>
        <ChartBar title={title2} text={text2} height={height2} extraClass="glass bar bar-md"/>
    </div>
)
