import {AppFeature} from "./AppFeature";
import {faChartLine, faCoins, faRobot} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useTranslation} from "react-i18next";
import "./AppFeatures.scss"

export const AppFeatures = () => {
    const {t} = useTranslation();
    return <div className="appFeatures">
        <AppFeature
            title={t("app.feature.expenses")}
            description={t("app.feature.expenses.description")}
            icon={faCoins}/>
        <AppFeature
            title={t("app.feature.budget")}
            description={t("app.feature.budget.description")}
            icon={faRobot}/>
        <AppFeature
            title={t("app.feature.investments")}
            description={t("app.feature.investments.description")}
            icon={faChartLine}/>
    </div>
}
