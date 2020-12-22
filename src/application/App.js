import React from 'react';
import {FintrackingNavBar} from "../components/navbar/FintrackingNavBar";
import {Route, withRouter} from "react-router-dom";
import {Login} from "../pages/login/Login";
import {Signup} from "../pages/signup/Signup";
import {CookiesService} from "../services/CookiesService";
import {User} from "../model/User";
import {ServerError} from "../pages/server-error/ServerError";
import {UserProfile} from "../pages/user-profile/UserProfile";
import {UserApi} from "../api/UserApi";
import {Homepage} from "../pages/homepage/Homepage";

class App extends React.Component {

    state = {
        user: null
    }

    componentDidMount() {
        const authToken = CookiesService.get("authToken")
        if (authToken != null) {
            UserApi.autoLogin()
                .then(response => this.setState({user: response.body}))
        }
    }

    authenticateUser = (auth) => {
        const user = new User(auth.email, auth.token)
        this.setState({user: user})
        CookiesService.storeCookie("authToken", auth.token)
        this.redirectTo("home")
    }

    logUserOut = (errorMessage, redirectUrl) => {
        this.setState({user: null})
        CookiesService.removeCookie("authToken")
        if (errorMessage != null) alert(errorMessage)
        if (redirectUrl != null) this.redirectTo(redirectUrl)
    }

    redirectTo = (url) => this.props.history.push(url)

    render() {
        return (
            <div className="page">
                <FintrackingNavBar user={this.state.user}/>
                <Route exact path="/" render={() => (
                    <Homepage user={this.state.user}/>)}/>
                <Route exact path="/home" render={() => (
                    <Homepage user={this.state.user}/>)}/>
                <Route exact path="/login" render={() => (
                    <Login
                        authHandler={this.authenticateUser}
                        authFailedHandler={this.logUserOut}/>)}/>
                <Route exact path="/signup" render={() => (
                    <Signup
                        authHandler={this.authenticateUser}
                        authFailedHandler={this.logUserOut}/>)}/>
                <Route exact path="/profile" render={() => (
                    <UserProfile
                        logoutHandler={this.logUserOut}/>)}/>
                <Route exact path="/error" component={ServerError}/>
            </div>
        );
    }
}

export default withRouter(App);
