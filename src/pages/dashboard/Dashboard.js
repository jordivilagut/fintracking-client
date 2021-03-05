import React, {useEffect, useState} from "react";
import {TransactionsBoard} from "../../components/transactions/TransactionsBoard";
import {FinancialSnapshot} from "../../components/financial-snapshot/FinancialSnapshot";
import {FinanceApi} from "../../api/FinanceApi";

export const Dashboard = () => {

    const [monthlySummary, setMonthlySummary] = useState({})
    const [currentFunds, setCurrentFunds] = useState(null)
    const [month, setMonth] = useState(new Date().getMonth())
    const [year] = useState(new Date().getFullYear())

    const refreshSummary = () => {
        FinanceApi.getMonthlySummary(month, year).then(response => setMonthlySummary(response.body))
        FinanceApi.getCurrentFunds().then(response => setCurrentFunds(response.body))
    }

    useEffect(() => {
        FinanceApi.getMonthlySummary(month, year).then(response => setMonthlySummary(response.body))
        FinanceApi.getCurrentFunds().then(response => setCurrentFunds(response.body))
    }, [month, year]);

    return <div>
        <FinancialSnapshot
            month={month}
            setMonth={setMonth}
            currentFunds={currentFunds}
            monthlySummary={monthlySummary}
            refreshSummary={refreshSummary}/>
        <TransactionsBoard refreshSummary={refreshSummary}/>
    </div>
}
