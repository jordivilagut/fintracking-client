import React from "react";

export const MonthChartBar = ({month, max, extraClass}) => {
    const budgetValue = month.budgetIncome/max * 140
    const budgetHeight = Number.isNaN(budgetValue) ? 0 : budgetValue;
    //const value = month.income/max * 140
    //const height = Number.isNaN(value) ? 0 : value;

    return <div className="barFrame">
        <h3>{month.name}</h3>
        <div className={extraClass}
             style={{height: `${budgetHeight}px`}}/>
        <p>{month.budgetIncome}</p>
    </div>
}
