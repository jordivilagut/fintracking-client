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
import {FintrackingFooter} from "../components/footer/FintrackingFooter";

class App extends React.Component {

    state = {
        user: null,
        languages: ["english ", "spanish"],
        selectedLanguage: null
    }

    languageChangeHandler = lang => {
        this.props.i18n.changeLanguage(lang.toLowerCase())
        this.setState({selectedLanguage: lang})
    }

    componentDidMount() {
        this.setState({selectedLanguage: this.props.i18n.language})
        const authToken = CookiesService.get("authToken")
        if (authToken != null) {
            UserApi.autoLogin()
                .then(
                    response => this.setState({user: response.body}),
                    error => this.logUserOut(null, "home"))
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
            <div id="application">
                <FintrackingNavBar user={this.state.user}/>
                <div className="content">
                    <div className="page">
                        <Route exact path="/" render={() => (
                            <Homepage
                                user={this.state.user}
                                history={this.props.history}/>)}/>
                        <Route exact path="/home" render={() => (
                            <Homepage
                                user={this.state.user}
                                history={this.props.history}/>)}/>
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
                                user={this.state.user}
                                logoutHandler={this.logUserOut}/>)}/>
                        <Route exact path="/error" component={ServerError}/>
                    </div>
                </div>
                <FintrackingFooter
                    languages={this.state.languages}
                    selectedLanguage={this.state.selectedLanguage}
                    languageChangeHandler={this.languageChangeHandler}/>
            </div>
        );
    }
}

export default withRouter(App);
