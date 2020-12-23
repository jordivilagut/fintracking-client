import React from "react";
import {UserProfileButton} from "../user-profile-button/UserProfileButton";

export const NavBarIcons = ({user}) => (
    <div id="icons">
        <UserProfileButton user={user}/>
    </div>
);
