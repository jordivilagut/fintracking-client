import React from "react";
import "./RoundImage.scss"

export const RoundImage = ({imageUrl}) => (
    <div
        className="roundImg"
        style={{backgroundImage: `url(${imageUrl})`}}/>
)
