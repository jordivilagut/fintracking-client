import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export const MobileMenuIcon = () => (
    <Link to="/menu">
        <p className="iconButton mobileMenuIcon">
            <FontAwesomeIcon icon={faBars}/>
        </p>
    </Link>
)
