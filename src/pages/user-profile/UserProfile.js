import React from "react";
import {BigBannerWithButton} from "../../components/big-banner/BigBannerWithButton";
import {UserApi} from "../../api/UserApi";
import {useTranslation} from "react-i18next";

export const UserProfile = ({logoutHandler, user}) => {

    const {t} = useTranslation();
    const handleLogout = () => {
        UserApi.logout()
            .then(
                response => logoutHandler(null, "/home"),
                error => logoutHandler(null, "/home"))
    }

    return <div>
        <BigBannerWithButton
            action={handleLogout}
            imageUrl="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
            mainText={user?.name}
            secondaryText={user?.email}
            buttonText={t("log.out")}
            buttonColor="d6cac9"
            buttonTextColor="FFFFFF"/>
    </div>
}
