import React from "react";
import {useTranslation} from 'react-i18next';
import {useHistory} from "react-router";
import "./StaticHomepage.scss"
import {UserPlan} from "../../components/user-plan/UserPlan";

export const StaticHomepage = () => {

    const {t} = useTranslation();
    const history = useHistory();

    const getStartedHandler = e => {
        e.preventDefault()
        history.push("login")
    }

    return <div className="userPlans">
        <UserPlan
            action={getStartedHandler}
            imageUrl="https://cdn02.visitbarcelona.com/files/5445-8234-Imagen/Nit_Barcelona_h1.jpg"
            title="Investor"
            titleClassname="zelda"
            buttonText={t("get.started")}
            buttonColor="3cc249"
            buttonTextColor="FFFFFF"/>
        <UserPlan
            action={getStartedHandler}
            imageUrl="https://jw-webmagazine.com/wp-content/uploads/2019/06/jw-5d1448522b66d3.01045017.jpeg"
            title="Start-Up"
            titleClassname="dakwart"
            buttonText={t("coming.soon")}
            buttonColor="dddddd"
            buttonTextColor="FFFFFF"/>
        <UserPlan
            action={getStartedHandler}
            imageUrl="https://static.billboard.com/files/media/nyc-skyline-2016-billboard-1548-compressed.jpg"
            title="Enterprise"
            titleClassname="cyberpunk"
            buttonText={t("coming.soon")}
            buttonColor="dddddd"
            buttonTextColor="FFFFFF"/>
    </div>
}
