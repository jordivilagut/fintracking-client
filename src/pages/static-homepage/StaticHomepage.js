import React from "react";
import {BigBannerWithButton} from "../../components/big-banner/BigBannerWithButton";
import {useTranslation} from 'react-i18next';
import {useHistory} from "react-router";

export const StaticHomepage = () => {

    const {t} = useTranslation();
    const history = useHistory();

    const getStartedHandler = e => {
        e.preventDefault()
        history.push("login")
    }

    return <div>
        <BigBannerWithButton
            action={getStartedHandler}
            imageUrl="https://pbs.twimg.com/profile_images/1138504682865926144/Km7uuVsw_400x400.png"
            mainText={t("app.welcome")}
            secondaryText={t("app.subtitle")}
            buttonText={t("get.started")}
            buttonColor="3cc249"
            buttonTextColor="FFFFFF"/>
    </div>
}
