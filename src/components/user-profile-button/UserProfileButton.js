import React from "react";
import {LoggedUserButton} from "./LoggedUserButton";
import {UserIcon} from "./UserIcon";

export const UserProfileButton = ({user}) => {
    const userIsLogged = user != null;
    return userIsLogged ? <LoggedUserButton user={user}/> : <UserIcon/>
}
