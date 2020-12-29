import React from "react";
import "./MonthlyBalance.scss"
import {TwoBarChart} from "../two-bar-chart/TwoBarChart";
import {useTranslation} from "react-i18next";

export function MonthlyBalance() {

    const {t} = useTranslation();
    const incomeHeight = 100;
    const expensesHeight = 60;

    return <div className="monthlyBalance light-border">
        <h2>{t("this.month")}</h2>
        <TwoBarChart
            height1={incomeHeight}
            height2={expensesHeight}
            title1={t("general.income")}
            title2={t("general.expenses")}
            text1="1.879€"
            text2="852€"/>
    </div>
}
