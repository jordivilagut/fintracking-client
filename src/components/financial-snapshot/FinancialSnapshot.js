import React from 'react';
import {MonthlyBalance} from "../monthly-balance/MonthlyBalance";
import "./FinancialSnapshot.scss";
import {CurrentFunds} from "../current-funds/CurrentFunds";

export const FinancialSnapshot = ({month, setMonth, funds, submitFunds, showModal, toggleModal, monthlySummary, refreshSummary}) => (
    <section id="financialSnapshot">
        <CurrentFunds
            funds={funds}
            showModal={showModal}
            toggleModal={toggleModal}
            submitFunds={submitFunds}
            refreshSummary={refreshSummary}/>
        <MonthlyBalance
            month={month}
            setMonth={setMonth}
            income={monthlySummary.income}
            expenses={monthlySummary.expenses}/>
    </section>
)
