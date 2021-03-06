import React, {useEffect, useState} from "react";
import {TransactionsBoard} from "../../components/transactions/TransactionsBoard";
import {FinancialSnapshot} from "../../components/financial-snapshot/FinancialSnapshot";
import {FinanceApi} from "../../api/FinanceApi";

export const Dashboard = () => {

    const [monthlySummary, setMonthlySummary] = useState({})
    const [currentFunds, setCurrentFunds] = useState(0)
    const [month, setMonth] = useState(new Date().getMonth())
    const [showFundsModal, setShowFundsModal] = useState(false)
    const [year] = useState(new Date().getFullYear())
    function baseOneMonth(m) { return m + 1 }

    const toggleFundsModal = () => setShowFundsModal(!showFundsModal)

    const submitFunds = () => {
        toggleFundsModal()
        FinanceApi.setCurrentFunds(currentFunds).then(() => refreshSummary())
    }

    const refreshSummary = () => {
        FinanceApi.getMonthlySummary(baseOneMonth(month), year).then(response => setMonthlySummary(response.body))
        FinanceApi.getCurrentFunds().then(response => setCurrentFunds(response.body))
    }

    useEffect(() => {
        FinanceApi.getMonthlySummary(baseOneMonth(month), year).then(response => setMonthlySummary(response.body))
        FinanceApi.getCurrentFunds().then(response => setCurrentFunds(response.body))
    }, [month, year]);

    return <div>
        <FinancialSnapshot
            month={month}
            setMonth={setMonth}
            funds={currentFunds}
            showModal={showFundsModal}
            toggleModal={toggleFundsModal}
            setFunds={setCurrentFunds}
            submitFunds={submitFunds}
            monthlySummary={monthlySummary}
            refreshSummary={refreshSummary}/>
        <TransactionsBoard
            month={month}
            refreshSummary={refreshSummary}/>
    </div>
}
