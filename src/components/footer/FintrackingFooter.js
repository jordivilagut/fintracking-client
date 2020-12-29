import React from "react";
import "./FintrackingFooter.scss"
import {SitemapLink} from "../sitemap-link/SitemapLink";
import {CustomDropdown} from "../custom-dropdown/CustomDropdown";
import {StringUtils} from "../../utils/StringUtils";

export const FintrackingFooter = ({languages, selectedLanguage, languageChangeHandler}) => (
    <footer className="footer">
        <div id="sitemap" className="page">
            <ul>
                <SitemapLink text="About" url="/"/>
                <SitemapLink text="The Team" url="/"/>
                <SitemapLink text="Support" url="/"/>
                <SitemapLink text="Terms of Service" url="/"/>
            </ul>
        </div>
        <div id="footerBottom" className="page">
            <p>© 2020 Fintracking, Inc. All rights reserved</p>
            <CustomDropdown
                size="sm"
                values={languages.map(l => StringUtils.capitalise(l))}
                selected={StringUtils.capitalise(selectedLanguage)}
                handler={languageChangeHandler}/>
        </div>
    </footer>
)


