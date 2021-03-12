import React from "react";

export const InvertedMonthChartBar = ({month, max}) => {

    const firstBar = 5 + Math.min(month.budgetExpenses, month.expenses)/max * 140
    const secondBar = 5 + Math.abs(month.budgetExpenses - month.expenses)/max * 140
    const exceedsBudget = month.expenses > month.budgetExpenses

    const firstBarHeight = Number.isNaN(firstBar) ? 5 : firstBar;
    const secondBarHeight = Number.isNaN(secondBar) ? 5 : secondBar;

    console.log(firstBar)
    console.log(secondBar)

    return <div className="barFrame inverted">
        <div className="month-bar second red" style={{height: `${firstBarHeight}px`}}/>
        <div className="month-bar middle transparent" style={{height: `2px`}}/>
        <div className={exceedsBudget ? "month-bar first red" : "month-bar first yellow translucid"} style={{height: `${secondBarHeight}px`}}/>
        <p>{month.expenses} / {month.budgetExpenses}</p>
    </div>
}
