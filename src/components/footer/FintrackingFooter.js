import React from "react";
import "./FintrackingFooter.scss"
import {SitemapLink} from "../sitemap-link/SitemapLink";
import {CustomDropdown} from "../custom-dropdown/CustomDropdown";
import {StringUtils} from "../../utils/StringUtils";
import {useTranslation} from 'react-i18next';

export function FintrackingFooter({languages, selectedLanguage, languageChangeHandler}) {

    const {t} = useTranslation();
    return <footer className="footer">
        <div id="sitemap" className="page">
            <ul>
                <SitemapLink text={t("general.about")} url="/"/>
                <SitemapLink text={t("general.team")} url="/"/>
                <SitemapLink text={t("general.support")} url="/"/>
                <SitemapLink text={t("general.tos")} url="/"/>
            </ul>
        </div>
        <div id="footerBottom" className="page">
            <p>{t("copyright.text")}</p>
            <CustomDropdown
                size="sm"
                values={languages.map(l => StringUtils.capitalise(l))}
                selected={StringUtils.capitalise(selectedLanguage)}
                handler={languageChangeHandler}/>
        </div>
    </footer>
}

