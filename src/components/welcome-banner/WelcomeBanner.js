import React from "react";
import {Image} from "../image/Image";
import "./WelcomeBanner.scss"
import {TransparentButton} from "../button/TransparentButton";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router";

export const WelcomeBanner = ({user}) => {

    const {t} = useTranslation();
    const history = useHistory();
    const userIsLogged = user != null;

    const getStartedHandler = e => {
        e.preventDefault()
        history.push("login")
    }

    return userIsLogged ? <div/> :
        <div className="welcomeBannerWrapper">
            <div className="welcomeBanner nightGradient">
                <div className="page">
                    <Image imageUrl=""/>
                    <div className="rightColumn">
                        <h2>{t("app.welcome")}</h2>
                        <h3>{t("app.subtitle")}</h3>
                        <TransparentButton
                            action={getStartedHandler}
                            mainText="Get Started"/>
                    </div>
                </div>
            </div>
        </div>
}
