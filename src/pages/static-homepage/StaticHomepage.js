import React from "react";
import {useTranslation} from 'react-i18next';
import {useHistory} from "react-router";
import "./StaticHomepage.scss"
import {AppFeatures} from "../../components/app-feature/AppFeatures";
import {UserPlans} from "../../components/user-plan/UserPlans";

export const StaticHomepage = () => {

    const {t} = useTranslation();
    const history = useHistory();

    const getStartedHandler = e => {
        e.preventDefault()
        history.push("login")
    }

    return <div className="homepage">
        <div className="homepageText">
            <h2>{t("how.it.works")}</h2>
            <p>{t("how.it.works.description")}</p>
        </div>
        <AppFeatures/>
        <div className="homepageText">
            <h2>{t("our.products")}</h2>
            <p>{t("our.products.description")}</p>
        </div>
        <UserPlans getStartedHandler={getStartedHandler}/>
        <div className="homepageText">
            <p>{t("homepage.closure")}</p>
        </div>
    </div>
}
