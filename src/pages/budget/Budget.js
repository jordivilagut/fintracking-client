import React, {useEffect} from "react";
import {YearGraph} from "../../components/charts/YearGraph";
import {YearBarChart} from "../../components/charts/YearBarChart";
import {BudgetPaymentsBoard} from "../../components/subscriptions-board/BudgetPaymentsBoard";
import "./Budget.scss"

export const Budget = ({user}) => {

    const refreshCharts = () => {}

    useEffect(() => {refreshCharts()}, []);

    return <div>
        <YearGraph/>
        <YearBarChart/>
        <BudgetPaymentsBoard/>
    </div>
}
