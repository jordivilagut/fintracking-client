import React from "react";
import {MonthChartBar} from "../chart-bar/MonthChartBar";
import {InvertedMonthChartBar} from "../chart-bar/InvertedMonthChartBar";
import {TextCarousel} from "../text-carousel/TextCarousel";
import {useTranslation} from "react-i18next";
import {StringUtils} from "../../utils/StringUtils";

export const YearBarChart = ({monthStats, year, setYear}) => {

        const {t} = useTranslation();
        const incomeValues = monthStats.map(a => a.budgetIncome);
        const expenseValues = monthStats.map(a => a.budgetExpenses);
        const monthPlusOne = () => setYear(year + 1);
        const monthMinusOne = () => setYear(year - 1);

        return <div className="bigChartWrapper light-border base-background">
                <div className="topBar">
                        <h2>{StringUtils.capitalise(t("menu.budget").toLowerCase())}</h2>
                        <TextCarousel
                            text={year}
                            actionLeft={monthMinusOne}
                            actionRight={monthPlusOne}/>
                </div>
                <div className="chart hScrollable">
                        {monthStats.map(m =>
                            <div key={"id" + m.name}>
                                    <MonthChartBar
                                        month={m}
                                        max={Math.max(...incomeValues)}
                                        extraClass="green-glass bar bar-xs"/>
                                    <InvertedMonthChartBar
                                        month={m}
                                        max={Math.max(...expenseValues)}
                                        extraClass="red-glass bar bar-xs"/>
                            </div>
                        )}
                </div>
        </div>
}

