import React from "react";
import {Link} from "react-router-dom";

export const ProductText = ({title, text, url}) => (
    <Link to={url} className="productText">
        <h3>{title}</h3>
        <p>{text}</p>
    </Link>
)
