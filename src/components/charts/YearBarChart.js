import {ChartBar} from "../chart-bar/ChartBar";
import React from "react";
import {InvertedChartBar} from "../chart-bar/DoubleChartBar";

export const YearBarChart = ({title1, title2, text1, text2, height1, height2}) => (
    <div className="chartWrapper light-border base-background">
        <h2>Budget</h2>
        <div className="chart">
            <ChartBar title="Jan" text="" height={200} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Feb" text="" height={210} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Mar" text="" height={230} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Apr" text="" height={240} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="May" text="" height={230} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Jun" text="" height={212} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Jul" text="" height={198} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Aug" text="" height={200} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Sep" text="" height={280} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Oct" text="" height={200} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Nov" text="" height={220} extraClass="green-glass bar bar-xs"/>
            <ChartBar title="Dec" text="" height={203} extraClass="green-glass bar bar-xs"/>
        </div>
        <div className="chart-inverted">
            <InvertedChartBar title="" text="" height={100} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={60} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={230} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={240} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={80} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={60} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={120} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={70} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={280} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={200} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={120} extraClass="red-glass bar bar-xs"/>
            <InvertedChartBar title="" text="" height={145} extraClass="red-glass bar bar-xs"/>
        </div>
    </div>
)

