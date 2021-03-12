import React from "react";

export const MonthChartBar = ({month, max}) => {

    const firstBar = 5 + Math.min(month.budgetIncome, month.income)/max * 140
    const secondBar = 5 + Math.abs(month.budgetIncome - month.income)/max * 140
    const exceedsBudget = month.income > month.budgetIncome

    const firstBarHeight = Number.isNaN(firstBar) ? 5 : firstBar;
    const secondBarHeight = Number.isNaN(secondBar) ? 5 : secondBar;

    return <div className="barFrame">
        <h3>{month.name}</h3>
        <div className="month-bar first green" style={{height: `${firstBarHeight}px`}}/>
        <div className="month-bar middle transparent" style={{height: `2px`}}/>
        <div className={exceedsBudget ? "month-bar second green" : "month-bar second yellow translucid"} style={{height: `${secondBarHeight}px`}}/>
        <p>{month.income} / {month.budgetIncome}</p>
    </div>
}
