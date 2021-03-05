import React from "react";
import {TwoBarChart} from "../charts/TwoBarChart";
import {useTranslation} from "react-i18next";
import {DateUtils} from "../../utils/DateUtils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export function MonthlyBalance({setMonth, month, income, expenses}) {

    const {t} = useTranslation();
    const incomeHeight = income/40;
    const expensesHeight = expenses/40;

    const monthPlusOne = () => setMonth(month === 11? 0 : month + 1);
    const monthMinusOne = () => setMonth(month === 0? 11 : month - 1);

    return <div className="chartWrapper light-border base-background">
        <div className="topBar">
            <h2>{t("this.month")}</h2>
            <h2>
                <span className="clickable">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        onClick={monthMinusOne}/>
                </span>
                <span className="monthName">{DateUtils.getMonthNames()[month]}</span>
                <span className="clickable">
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        onClick={monthPlusOne}
                /></span>
            </h2>
        </div>
        <TwoBarChart
            height1={incomeHeight}
            height2={expensesHeight}
            title1={t("general.income")}
            title2={t("general.expenses")}
            text1={income}
            text2={expenses}/>
    </div>
}
