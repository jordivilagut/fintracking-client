import React from "react";
import {Link} from "react-router-dom";
import "./SitemapLink.scss"

export const SitemapLink = ({text, url}) => (
    <li>
        <Link to={url}>
            <p>{text}</p>
        </Link>
    </li>
);
