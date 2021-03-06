import React from "react";

export const InvertedMonthChartBar = ({month, max, extraClass}) => {
    const value = month.budgetExpenses/max * 140
    const height = Number.isNaN(value) ? 0 : value;

    return <div className="barFrame inverted">
        <div className={extraClass}
             style={{height: `${height}px`}}/>
        <p>{month.budgetExpenses}</p>
    </div>
}
