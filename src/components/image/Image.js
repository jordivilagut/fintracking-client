import React from "react";
import "./Image.scss"

export const Image = ({imageUrl}) => (
    <div
        className="img"
        style={{backgroundImage: `url(${imageUrl})`}}/>
)
