import React from "react";

export const MonthChartBar = ({month, max, extraClass}) => {
    const value = month.budgetIncome/max * 140
    return <div className="barFrame">
        <h3>{month.name}</h3>
        <div className={extraClass}
             style={{height: `${value}px`}}/>
        <p>{month.budgetIncome}</p>
    </div>
}
