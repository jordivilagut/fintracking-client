import {ChartBar} from "../chart-bar/ChartBar";
import React from "react";
import {InvertedChartBar} from "../chart-bar/DoubleChartBar";

export const YearBarChart = ({monthStats}) => {

        let incomeValues = monthStats.map(a => a.income);
        let expenseValues = monthStats.map(a => a.expenses);
        const maxIncome = Math.max(...incomeValues)
        const maxExpense = Math.max(...expenseValues)

        return <div className="chartWrapper light-border base-background">
                <h2>Budget</h2>
                <div className="chart">
                        {monthStats.map(m =>
                            <ChartBar title={m.title} text="" height={m.income/maxIncome * 140} extraClass="green-glass bar bar-xs"/>
                        )}
                </div>
                <div className="chart-inverted">
                        {monthStats.map(m =>
                            <InvertedChartBar title={m.title} text="" height={m.expenses/maxExpense * 140}
                                              extraClass="red-glass bar bar-xs"/>
                        )}
                </div>
        </div>
}

