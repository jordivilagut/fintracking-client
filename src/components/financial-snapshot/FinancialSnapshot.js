import React, {useEffect, useState} from 'react';
import {MonthlyBalance} from "../monthly-balance/MonthlyBalance";
import "./FinancialSnapshot.scss";
import {useTranslation} from 'react-i18next';
import {FinanceApi} from "../../api/FinanceApi";

export function FinancialSnapshot() {

    const {t} = useTranslation();
    const [income, setIncome] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [balance, setBalance] = useState(0)
    const getMonthlySummary = () => FinanceApi.getMonthlySummary().then(response => {
        setIncome(response.body.income)
        setExpenses(response.body.expenses)
        setBalance(response.body.balance)
    })

    useEffect(() => {getMonthlySummary()}, []);

    return <section id="financialSnapshot">
        <div className="scoreboard light-border">
            <h1>{balance}€</h1>
            <p>{t("current.funds")}</p>
        </div>
        <MonthlyBalance
            income={income}
            expenses={expenses}/>
    </section>
}
