import {Link} from "react-router-dom";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MobileMenuLink = ({uri, text, icon}) => (
    <Link to={uri}>
        <p className="light-border mobileMenuLink">
            <FontAwesomeIcon className="linkIcon" icon={icon}/>
            {text}
        </p>
    </Link>
)
