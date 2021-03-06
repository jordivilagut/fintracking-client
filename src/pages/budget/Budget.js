import React, {useEffect, useState} from "react";
import {YearGraph} from "../../components/charts/YearGraph";
import {YearBarChart} from "../../components/charts/YearBarChart";
import {BudgetItemsBoard} from "../../components/subscriptions-board/BudgetItemsBoard";
import "./Budget.scss"
import {FinanceApi} from "../../api/FinanceApi";

export const Budget = () => {

    const [year, setYear] = useState(new Date().getFullYear())
    const [monthStats, setMonthStats] = useState([])

    const refreshCharts = () => {
        FinanceApi.getYearlySummary(year).then(response => setMonthStats(response.body.months))
    }

    useEffect(() => {
        FinanceApi.getYearlySummary(year).then(response => setMonthStats(response.body.months))
    }, [year]);

    return <div>
        <YearGraph/>
        <YearBarChart
            year={year}
            setYear={setYear}
            monthStats={monthStats} />
        <BudgetItemsBoard
            year={year}
            refreshBudgetChart={refreshCharts}/>
    </div>
}
