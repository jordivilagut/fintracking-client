import React from "react";

export const MonthChartBar = ({month, max, extraClass}) => {
    const value = month.budgetIncome/max * 140
    const height = Number.isNaN(value) ? 0 : value;

    return <div className="barFrame">
        <h3>{month.name}</h3>
        <div className={extraClass}
             style={{height: `${height}px`}}/>
        <p>{month.budgetIncome}</p>
    </div>
}
