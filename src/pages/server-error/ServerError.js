import React from "react";
import {BigBanner} from "../../components/big-banner/BigBanner";
import {useTranslation} from "react-i18next";

export const ServerError = () => {

    const {t} = useTranslation();
    return <div>
        <BigBanner
            imageUrl="https://previews.123rf.com/images/pyotr/pyotr1702/pyotr170200117/71184249-explosion-in-the-laboratory-funny-crazy-scientist-boy-working-in-a-laboratory.jpg"
            mainText={t("server.error")}
            secondaryText={t("server.error.detailed")}/>
    </div>
}
