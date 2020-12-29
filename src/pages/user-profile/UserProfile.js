import React from "react";
import {BigBannerWithButton} from "../../components/big-banner/BigBannerWithButton";
import {UserApi} from "../../api/UserApi";
import {useTranslation} from "react-i18next";

export const UserProfile = (props) => {

    const {t} = useTranslation();
    const {logoutHandler, user} = props
    const handleLogout = () => {
        UserApi.logout()
            .then(
                response => logoutHandler(null, "/home"),
                error => logoutHandler(null, "/home"))
    }

    return <div>
        <BigBannerWithButton
            action={handleLogout}
            imageUrl="https://pbs.twimg.com/profile_images/1138504682865926144/Km7uuVsw_400x400.png"
            mainText="Tom Nook"
            secondaryText={user?.email}
            buttonText={t("log.out")}
            buttonColor="d6cac9"
            buttonTextColor="FFFFFF"/>
    </div>
}
