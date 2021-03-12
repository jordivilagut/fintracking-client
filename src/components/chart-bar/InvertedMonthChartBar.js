import React from "react";

export const InvertedMonthChartBar = ({month, max}) => {

    const firstBar = 5 + Math.min(month.budgetExpenses, month.expenses)/max * 140
    const secondBar = 5 + Math.abs(month.budgetExpenses - month.expenses)/max * 140
    const exceedsBudget = month.expenses > month.budgetExpenses

    return <div className="barFrame inverted">
        <div className="month-bar second red" style={{height: `${firstBar}px`}}/>
        <div className="month-bar middle transparent" style={{height: `2px`}}/>
        <div className={exceedsBudget ? "month-bar first red" : "month-bar first yellow"} style={{height: `${secondBar}px`}}/>
        <p>{month.expenses} / {month.budgetExpenses}</p>
    </div>
}
