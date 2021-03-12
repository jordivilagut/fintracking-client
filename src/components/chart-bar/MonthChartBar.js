import React from "react";

export const MonthChartBar = ({month, max}) => {

    const firstBar = 5 + Math.min(month.budgetIncome, month.income)/max * 140
    const secondBar = 5 + Math.abs(month.budgetIncome - month.income)/max * 140
    const exceedsBudget = month.income > month.budgetIncome

    return <div className="barFrame">
        <h3>{month.name}</h3>
        <div className="month-bar first green" style={{height: `${firstBar}px`}}/>
        <div className="month-bar middle transparent" style={{height: `2px`}}/>
        <div className={exceedsBudget ? "month-bar second green" : "month-bar second yellow"} style={{height: `${secondBar}px`}}/>
        <p>{month.income} / {month.budgetIncome}</p>
    </div>
}
