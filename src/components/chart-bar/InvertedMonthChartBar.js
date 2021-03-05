import React from "react";

export const InvertedMonthChartBar = ({month, max, extraClass}) => {
    const value = month.budgetExpenses/max * 140
    return <div className="barFrame inverted">
        <div className={extraClass}
             style={{height: `${value}px`}}/>
        <p>{month.budgetExpenses}</p>
    </div>
}
