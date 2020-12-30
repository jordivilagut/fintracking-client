import React from 'react';
import {MonthlyBalance} from "../monthly-balance/MonthlyBalance";
import "./FinancialSnapshot.scss";
import {useTranslation} from 'react-i18next';

export const FinancialSnapshot = ({monthlySummary}) => {

    const {t} = useTranslation();
    return <section id="financialSnapshot">
        <div className="scoreboard light-border">
            <h1>{monthlySummary.balance}€</h1>
            <p>{t("current.funds")}</p>
        </div>
        <MonthlyBalance
            income={monthlySummary.income}
            expenses={monthlySummary.expenses}/>
    </section>
}
