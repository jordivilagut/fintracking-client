import React from "react";
import {MonthChartBar} from "../chart-bar/MonthChartBar";
import {InvertedMonthChartBar} from "../chart-bar/InvertedMonthChartBar";

export const YearBarChart = ({monthStats}) => {

        let incomeValues = monthStats.map(a => a.budgetIncome);
        let expenseValues = monthStats.map(a => a.budgetExpenses);

        return <div className="chartWrapper light-border base-background">
                <h2>Budget</h2>
                <div className="chart">
                        {monthStats.map(m =>
                            <MonthChartBar
                                key={"c" + m.name}
                                month={m}
                                max={Math.max(...incomeValues)}
                                extraClass="green-glass bar bar-xs"/>)}
                </div>
                <div className="chart-inverted">
                        {monthStats.map(m =>
                            <InvertedMonthChartBar
                                key={"i" + m.name}
                                month={m}
                                max={Math.max(...expenseValues)}
                                extraClass="red-glass bar bar-xs"/>)}
                </div>
        </div>
}

