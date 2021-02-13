import React, {useEffect} from "react";
import {YearGraph} from "../../components/charts/YearGraph";
import {YearBarChart} from "../../components/charts/YearBarChart";
import {BudgetItemsBoard} from "../../components/subscriptions-board/BudgetItemsBoard";
import "./Budget.scss"

export const Budget = ({user}) => {

    const refreshCharts = () => {}

    useEffect(() => {refreshCharts()}, []);

    return <div>
        <YearGraph/>
        <YearBarChart/>
        <BudgetItemsBoard/>
    </div>
}
