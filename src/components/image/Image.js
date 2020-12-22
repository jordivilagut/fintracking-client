import React from "react";

export const Image = ({imageUrl}) => (
    <div
        className="roundImg"
        style={{backgroundImage: `url(${imageUrl})`}}/>
)
