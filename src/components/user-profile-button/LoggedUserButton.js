import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";

export const LoggedUserButton = ({user}) => (
    <Link className="iconButton" to="/profile">
        <FontAwesomeIcon icon={faUser} />
        <p>{user?.email}</p>
    </Link>
)
