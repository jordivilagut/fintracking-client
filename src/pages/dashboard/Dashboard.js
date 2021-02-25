import React, {useEffect, useState} from "react";
import {TransactionsBoard} from "../../components/transactions/TransactionsBoard";
import {FinancialSnapshot} from "../../components/financial-snapshot/FinancialSnapshot";
import {FinanceApi} from "../../api/FinanceApi";

export const Dashboard = () => {

    const [monthlySummary, setMonthlySummary] = useState({})
    const [currentFunds, setCurrentFunds] = useState(null)
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())

    const refreshSummary = () => {
        FinanceApi.getMonthlySummary(month, year).then(response => setMonthlySummary(response.body))
        FinanceApi.getCurrentFunds().then(response => setCurrentFunds(response.body))
    }

    useEffect(() => {refreshSummary()}, []);

    return <div>
        <p>{month}</p>
        <p>{year}</p>
        <FinancialSnapshot
            currentFunds={currentFunds}
            monthlySummary={monthlySummary}
            refreshSummary={refreshSummary}/>
        <TransactionsBoard refreshSummary={refreshSummary}/>
    </div>
}
