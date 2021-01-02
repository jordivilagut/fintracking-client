import React from 'react';
import {MonthlyBalance} from "../monthly-balance/MonthlyBalance";
import "./FinancialSnapshot.scss";
import {CurrentFunds} from "../current-funds/CurrentFunds";

export const FinancialSnapshot = ({currentFunds, monthlySummary, refreshSummary}) => (
    <section id="financialSnapshot">
        <CurrentFunds
            currentFunds={currentFunds}
            refreshSummary={refreshSummary}/>
        <MonthlyBalance
            income={monthlySummary.income}
            expenses={monthlySummary.expenses}/>
    </section>
)
