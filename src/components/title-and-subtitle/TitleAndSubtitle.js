import React from "react";
import "./TitleAndSubtitle.scss"

export const TitleAndSubtitle = ({title, subtitle}) => {

    return <div className="titleAndSubtitle">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
}
