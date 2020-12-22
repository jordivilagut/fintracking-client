import React from "react";

export const RoundImage = ({imageUrl}) => (
    <div
        className="roundImg"
        style={{backgroundImage: `url(${imageUrl})`}}/>
)
