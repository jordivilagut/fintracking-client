import React, {Component} from "react";
import {Dashboard} from "../dashboard/Dashboard";
import {StaticHomepage} from "../static-homepage/StaticHomepage";

export class Homepage extends Component {

    render() {
        const userIsLogged = this.props.user != null;
        return userIsLogged ? <Dashboard/> : <StaticHomepage {...props}/>;
    }
}
