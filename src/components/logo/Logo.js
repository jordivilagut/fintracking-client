import React from 'react';
import Badge from 'react-bootstrap/Badge';
import "./Logo.scss"
import {useTranslation} from "react-i18next";

export const Logo = () => {
    const {t} = useTranslation();
    return <div className="logo">
        <div className="appTitle">
            <h1>Fintracking</h1><Badge variant="secondary">Beta</Badge>
        </div>
        <h4>{t("app.subtitle")}</h4>
    </div>
}
