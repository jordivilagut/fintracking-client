import React from "react";
import {TwoBarChart} from "../charts/TwoBarChart";
import {useTranslation} from "react-i18next";

export function MonthlyBalance({income, expenses}) {

    const {t} = useTranslation();
    const incomeHeight = income/40;
    const expensesHeight = expenses/40;

    return <div className="chartWrapper light-border base-background">
        <h2>{t("this.month")}</h2>
        <TwoBarChart
            height1={incomeHeight}
            height2={expensesHeight}
            title1={t("general.income")}
            title2={t("general.expenses")}
            text1={income}
            text2={expenses}/>
    </div>
}
