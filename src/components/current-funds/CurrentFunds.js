import {Button} from "../button/Button";
import React from "react";
import {useTranslation} from "react-i18next";

export const CurrentFunds = ({currentFunds}) => {
    const {t} = useTranslation();
    return <div className="scoreboard light-border">
        <div>
            <h1>{currentFunds != null ? currentFunds : "???"}€</h1>
            <p>{t("current.funds")}</p>
        </div>
        <Button mainText={t("add.current.funds")}/>
    </div>
}
