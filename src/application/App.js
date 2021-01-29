import React, {useEffect, useState} from 'react';
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
import {DateUtils as LanguageUtils} from "../utils/LanguageUtils";
import {MobileMenu} from "../pages/mobile-menu/MobileMenu";
import {ForgotPassword} from "../pages/forgot-pwd/ForgotPassword";
import {RecoverPassword} from "../pages/recover-pwd/RecoverPassword";
import {WelcomeBanner} from "../components/welcome-banner/WelcomeBanner";
import {Budget} from "../pages/budget/Budget";

const App = (props) => {

    const [user, setUser] = useState(null)
    const [languages] = useState(["english ", "spanish"])
    const [language, setLanguage] = useState(null)
    const redirectTo = (url) => props.history.push(url)

    const languageChangeHandler = lang => {
        props.i18n.changeLanguage(lang.toLowerCase())
        setLanguage(lang)
    }

    const authenticateUser = (auth) => {
        const user = new User(auth.name, auth.email, auth.token)
        setUser(user)
        CookiesService.storeCookie("authToken", auth.token)
        redirectTo("home")
    }

    const logUserOut = (errorMessage, redirectUrl) => {
        setUser(null)
        CookiesService.removeCookie("authToken")
        if (errorMessage != null) alert(errorMessage)
        if (redirectUrl != null) redirectTo(redirectUrl)
    }

    useEffect(() => {
        let lang = LanguageUtils.getLanguageFromSymbol(props.i18n.language);
        props.i18n.changeLanguage(lang)
        setLanguage(lang)
        const authToken = CookiesService.get("authToken")
        if (authToken != null) {
            UserApi.autoLogin()
                .then(
                    response => setUser(response.body),
                    error => {
                        setUser(null)
                        CookiesService.removeCookie("authToken")
                        props.history.push("home")
                    })
        }
    }, [props.i18n, props.history]);

    return <div id="application">
        <FintrackingNavBar user={user}/>
        <div className="content">
            <Route exact path="/" render={() => (<WelcomeBanner user={user}/>)}/>
            <Route exact path="/home" render={() => (<WelcomeBanner user={user}/>)}/>
            <div className="page">
                <Route exact path="/" render={() => (<Homepage user={user}/>)}/>
                <Route exact path="/home" render={() => (<Homepage user={user}/>)}/>
                <Route exact path="/budget" render={() => (<Budget user={user}/>)}/>
                <Route exact path="/login" render={() => (
                    <Login
                        authHandler={authenticateUser}
                        authFailedHandler={logUserOut}/>)}/>
                <Route exact path="/signup" render={() => (
                    <Signup
                        authHandler={authenticateUser}
                        authFailedHandler={logUserOut}/>)}/>
                <Route exact path="/profile" render={() => (
                    <UserProfile
                        user={user}
                        logoutHandler={logUserOut}/>)}/>
                <Route exact path="/error" component={ServerError}/>
                <Route exact path="/forgotpwd" component={ForgotPassword}/>
                <Route exact path="/recoverpwd/:token" component={RecoverPassword}/>
                <Route exact path="/menu" render={() => (
                    <MobileMenu
                        user={user}/>)}/>
            </div>
        </div>
        <FintrackingFooter
            languages={languages}
            selectedLanguage={language}
            languageChangeHandler={languageChangeHandler}/>
    </div>
}

export default withRouter(App);
