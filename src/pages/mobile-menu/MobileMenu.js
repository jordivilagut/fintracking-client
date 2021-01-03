import {useTranslation} from "react-i18next";
import React from "react";
import {MobileMenuLink} from "./MobileMenuLink";
import "./MobileMenu.scss"
import {faHome, faMoneyBill, faUser} from "@fortawesome/free-solid-svg-icons";

export const MobileMenu = ({user}) => {
    const {t} = useTranslation();
    return <div className="mobileMenu">
        <MobileMenuLink uri="/home" text={t("menu.home")} icon={faHome}/>
        <MobileMenuLink uri="/budget" text={t("menu.budget")} icon={faMoneyBill}/>
        <MobileMenuLink uri={user != null ? "/profile" : "/login"} text={t("menu.profile")} icon={faUser}/>
    </div>
}
