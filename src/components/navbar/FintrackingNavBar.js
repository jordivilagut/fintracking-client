import React from 'react';
import "./NavBar.scss"
import {NavBarIcons} from "./NavBarIcons";
import {Link} from "react-router-dom";
import {Logo} from "../logo/Logo";
import {useTranslation} from "react-i18next";

export const FintrackingNavBar = ({user}) => {
    const {t} = useTranslation();
    return <div className="navBarWrapper">
        <div id="navBar" className="page">
            <div className="desktopLinks">
                <Link to="/">
                    <Logo/>
                </Link>
                <Link to="/finance"><p hidden={user == null}>{t("menu.finance")}</p></Link>
                <Link to="/budget"><p hidden={user == null}>{t("menu.budget")}</p></Link>
            </div>
            <NavBarIcons user={user}/>
        </div>
    </div>
}
