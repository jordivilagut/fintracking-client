import React, {useEffect, useState} from "react";
import {TransactionsBoard} from "../../components/transactions/TransactionsBoard";
import {FinancialSnapshot} from "../../components/financial-snapshot/FinancialSnapshot";
import {FinanceApi} from "../../api/FinanceApi";

export const Dashboard = () => {

    const [monthlySummary, setMonthlySummary] = useState({})
    const getMonthlySummary = () => FinanceApi.getMonthlySummary().then(response => setMonthlySummary(response.body))
    useEffect(() => {getMonthlySummary()}, []);

    return <div>
        <FinancialSnapshot monthlySummary={monthlySummary}/>
        <TransactionsBoard refreshSummary={getMonthlySummary}/>
    </div>
}
