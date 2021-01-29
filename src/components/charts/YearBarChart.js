import {ChartBar} from "../chart-bar/ChartBar";
import React from "react";

export const YearBarChart = ({title1, title2, text1, text2, height1, height2}) => (
    <div className="chartWrapper light-border base-background">
        <h2>Budget</h2>
        <div className="chart">
            <ChartBar title="Jan" text="" height={100} extraClass="glass bar bar-xs"/>
            <ChartBar title="Feb" text="" height={60} extraClass="glass bar bar-xs"/>
            <ChartBar title="Mar" text="" height={230} extraClass="glass bar bar-xs"/>
            <ChartBar title="Apr" text="" height={240} extraClass="glass bar bar-xs"/>
            <ChartBar title="May" text="" height={80} extraClass="glass bar bar-xs"/>
            <ChartBar title="Jun" text="" height={60} extraClass="glass bar bar-xs"/>
            <ChartBar title="Jul" text="" height={120} extraClass="glass bar bar-xs"/>
            <ChartBar title="Aug" text="" height={70} extraClass="glass bar bar-xs"/>
            <ChartBar title="Sep" text="" height={280} extraClass="glass bar bar-xs"/>
            <ChartBar title="Oct" text="" height={200} extraClass="glass bar bar-xs"/>
            <ChartBar title="Nov" text="" height={120} extraClass="glass bar bar-xs"/>
            <ChartBar title="Dec" text="" height={145} extraClass="glass bar bar-xs"/>
        </div>
    </div>
)

