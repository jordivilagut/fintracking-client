import React from 'react';
import {MonthlyBalance} from "../monthly-balance/MonthlyBalance";
import "./FinancialSnapshot.scss";

export const FinancialSnapshot = props => (
    <section id="financialSnapshot">
        <div className="scoreboard light-border">
            <h1>17.438,00€</h1>
            <p>Current Funds</p>
        </div>
        <MonthlyBalance/>
    </section>
)
