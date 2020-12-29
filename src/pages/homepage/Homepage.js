import React from "react";
import {Dashboard} from "../dashboard/Dashboard";
import {StaticHomepage} from "../static-homepage/StaticHomepage";

export const Homepage = ({user}) => {
    const userIsLogged = user != null;
    return userIsLogged ? <Dashboard/> : <StaticHomepage/>
}

