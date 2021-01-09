import React from "react";
import {Image} from "../image/Image";
import "./WelcomeBanner.scss"
import {TransparentButton} from "../button/TransparentButton";
import {useTranslation} from "react-i18next";

export const WelcomeBanner = ({user}) => {
    const {t} = useTranslation();
    const userIsLogged = user != null;
    return userIsLogged ? <div/> :
        <div className="welcomeBannerWrapper">
            <div className="welcomeBanner nightGradient">
                <div className="page">
                    <Image imageUrl=""/>
                    <div className="rightColumn">
                        <h2>{t("app.welcome")}</h2>
                        <h3>{t("app.subtitle")}</h3>
                        <TransparentButton
                            action={() => console.log("hi")}
                            mainText="Get Started"/>
                    </div>
                </div>
            </div>
        </div>
}
