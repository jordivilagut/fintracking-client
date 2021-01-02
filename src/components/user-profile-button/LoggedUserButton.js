import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";

export const LoggedUserButton = ({user}) => (
    <Link className="iconButton userProfileButton" to="/profile">
        <FontAwesomeIcon icon={faUser} />
        <p>{user?.email}</p>
    </Link>
)
