import React from 'react';
import {MonthlyBalance} from "../monthly-balance/MonthlyBalance";
import "./FinancialSnapshot.scss";
import {useTranslation} from 'react-i18next';

export function FinancialSnapshot() {
    const {t} = useTranslation();
    return <section id="financialSnapshot">
        <div className="scoreboard light-border">
            <h1>17.438,00€</h1>
            <p>{t("current.funds")}</p>
        </div>
        <MonthlyBalance/>
    </section>
}
