import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCreditCard, faUser} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {Link} from "react-router-dom";

export const NavBarIcons = ({user}) => (
    <div id="icons">
        <Link className="icon" to={user != null ? "/profile" : "/login"}><FontAwesomeIcon icon={faUser} />
            {user?.email}
        </Link>
        <Link className="icon" to="/checkout"><FontAwesomeIcon icon={faCreditCard} /></Link>
    </div>
);
