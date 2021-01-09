import {UserPlan} from "./UserPlan";
import React from "react";
import {useTranslation} from "react-i18next";

export const UserPlans = ({getStartedHandler}) => {
    const {t} = useTranslation();
    return  <div className="userPlans">
        <UserPlan
            action={getStartedHandler}
            imageUrl="https://cdn02.visitbarcelona.com/files/5445-8234-Imagen/Nit_Barcelona_h1.jpg"
            title="Investor"
            titleClassname="zelda"
            buttonText={t("get.started")}
            buttonColor="#dddddd"
            buttonTextColor="#000000"/>
        <UserPlan
            imageUrl="https://jw-webmagazine.com/wp-content/uploads/2019/06/jw-5d1448522b66d3.01045017.jpeg"
            title="Start-Up"
            titleClassname="dakwart"
            buttonText={t("coming.soon")}
            buttonColor="#dddddd"
            buttonTextColor="#000000"/>
        <UserPlan
            imageUrl="https://static.billboard.com/files/media/nyc-skyline-2016-billboard-1548-compressed.jpg"
            title="Enterprise"
            titleClassname="cyberpunk"
            buttonText={t("coming.soon")}
            buttonColor="#dddddd"
            buttonTextColor="#000000"/>
    </div>
}
