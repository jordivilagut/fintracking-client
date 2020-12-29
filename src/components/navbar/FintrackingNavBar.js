import React from 'react';
import "./NavBar.scss"
import {NavBarIcons} from "./NavBarIcons";
import {Link} from "react-router-dom";
import {Logo} from "../logo/Logo";

export const FintrackingNavBar = ({user}) => (
    <div className="navBarWrapper">
        <div id="navBar" className="page">
            <Link to="/">
                <Logo/>
            </Link>
            <NavBarIcons user={user}/>
        </div>
    </div>
);
