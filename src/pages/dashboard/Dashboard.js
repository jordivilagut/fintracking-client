import React, {useEffect, useState} from "react";
import {TransactionsBoard} from "../../components/transactions/TransactionsBoard";
import {FinancialSnapshot} from "../../components/financial-snapshot/FinancialSnapshot";
import {FinanceApi} from "../../api/FinanceApi";

export const Dashboard = () => {

    const [monthlySummary, setMonthlySummary] = useState({})
    const [currentFunds, setCurrentFunds] = useState(null)
    const refreshSummary = () => {
        FinanceApi.getMonthlySummary().then(response => setMonthlySummary(response.body))
        FinanceApi.getCurrentFunds().then(response => setCurrentFunds(response.body))
    }
    useEffect(() => {refreshSummary()}, []);

    return <div>
        <FinancialSnapshot
            currentFunds={currentFunds}
            monthlySummary={monthlySummary}
            refreshSummary={refreshSummary}/>
        <TransactionsBoard refreshSummary={refreshSummary}/>
    </div>
}
