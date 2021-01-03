import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";

export const UserIcon = () => (
    <Link className="icon userProfileButton" to="/login">
        <FontAwesomeIcon icon={faUser} />
    </Link>
)
