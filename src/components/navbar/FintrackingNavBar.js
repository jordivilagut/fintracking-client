import React from 'react';
import "./NavBar.scss"
import {NavBarIcons} from "./NavBarIcons";
import {Link} from "react-router-dom";

export const FintrackingNavBar = ({user}) => (
    <div id="navBar">
        <Link to="/">
            <h2>Fintracking</h2>
        </Link>
        <NavBarIcons user={user}/>
    </div>
);
