import React from "react";
import {UserProfileButton} from "../user-profile-button/UserProfileButton";
import {MobileMenuIcon} from "../mobile-menu-icon/MobileMenuIcon";

export const NavBarIcons = ({user}) => (
    <div id="icons">
        <MobileMenuIcon/>
        <UserProfileButton user={user}/>
    </div>
);
