import React, {Component} from "react";
import "./MonthlyBalance.scss"
import {TwoBarChart} from "../two-bar-chart/TwoBarChart";

export class MonthlyBalance extends Component {

    render() {

        const incomeHeight = 100;
        const expensesHeight = 60;

        return (
            <div className="monthlyBalance light-border">
                <h2>This Month</h2>
                <TwoBarChart
                    height1={incomeHeight}
                    height2={expensesHeight}
                    title1="Income"
                    title2="Expenses"
                    text1="1.879€"
                    text2="852€"/>
            </div>
        );
    }
}
