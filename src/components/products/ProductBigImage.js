import React from "react";

export const ProductBigImage = ({imageUrl}) => (
    <div
        className="productImg big"
        style={{backgroundImage: `url(${imageUrl})`}}/>
)
