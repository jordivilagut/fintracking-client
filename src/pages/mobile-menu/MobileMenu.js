import {useTranslation} from "react-i18next";
import React from "react";
import {MobileMenuLink} from "./MobileMenuLink";
import "./MobileMenu.scss"
import {faChartLine, faHome, faMoneyBill, faUser} from "@fortawesome/free-solid-svg-icons";

export const MobileMenu = ({user}) => {
    const {t} = useTranslation();
    return <div className="mobileMenu">
        <MobileMenuLink uri="/home" text={t("menu.home")} icon={faHome}/>
        <MobileMenuLink uri="/finance" text={t("menu.finance")} icon={faMoneyBill}/>
        <MobileMenuLink uri="/budget" text={t("menu.budget")} icon={faChartLine}/>
        <MobileMenuLink uri={user != null ? "/profile" : "/login"} text={t("menu.profile")} icon={faUser}/>
    </div>
}
