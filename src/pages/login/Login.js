import React, {useState} from "react";
import "../../styles/UserForm.scss"
import {FormButton} from "../../components/form/form-button/FormButton";
import {EmailInput} from "../../components/form/form-input/EmailInput";
import {PasswordInput} from "../../components/form/form-input/PasswordInput";
import {Link} from "react-router-dom";
import {UserApi} from "../../api/UserApi";
import {useTranslation} from "react-i18next";
import {GoogleLogin} from "react-google-login"

export const Login = props => {

    const {t} = useTranslation();
    const googleClientId = "294916012259-ocmapd0vo300beuhnqn8st9pd6k0jg1n.apps.googleusercontent.com"
    const {authHandler, authFailedHandler} = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailChangeHandler = e => setEmail(e.target.value)
    const passwordChangeHandler = e => setPassword(e.target.value)
    const handleSubmit = e => {
        e.preventDefault();
        UserApi.login(email, password)
            .then(
                response => authHandler(response.body),
                error => authFailedHandler(error.message));
    }

    const handleSuccessfulGoogleLogin = response => {
        console.log("Successful login: ", response.profileObj)
    }

    const handleFailedGoogleLogin = response => {
        console.log("Failed login: ", response)
    }

    return <div className="userForm">
        <h2>{t("log.in")}</h2>
        <form onSubmit={handleSubmit}>
            <EmailInput onChangeHandler={emailChangeHandler}/>
            <PasswordInput
                placeHolder={t("general.password")}
                onChangeHandler={passwordChangeHandler}/>
            <FormButton text={t("log.in")}/>
            <GoogleLogin
                clientId={googleClientId}
                buttonText="Sign In with Google"
                onSuccess={handleSuccessfulGoogleLogin}
                onFailure={handleFailedGoogleLogin}
                cookiePolicy={"single_host_origin"}/>
        </form>
        <Link to="/signup"><h3 className="link">{t("dont.have.account")}</h3></Link>
        <Link to="/forgotpwd"><h3 className="link">{t("forgot.password")}</h3></Link>
    </div>
}
