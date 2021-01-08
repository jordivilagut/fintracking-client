import React, {useState} from "react";
import "../../styles/UserForm.scss"
import {FormButton} from "../../components/form/form-button/FormButton";
import {EmailInput} from "../../components/form/form-input/EmailInput";
import {PasswordInput} from "../../components/form/form-input/PasswordInput";
import {NameInput} from "../../components/form/form-input/NameInput";
import {Link} from "react-router-dom";
import {UserApi} from "../../api/UserApi";
import {useTranslation} from "react-i18next";
import {GoogleLogin} from "react-google-login";

export const Signup = props => {

    const {t} = useTranslation();
    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const {authHandler, authFailedHandler} = props
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nameChangeHandler = e => setName(e.target.value)
    const emailChangeHandler = e => setEmail(e.target.value)
    const passwordChangeHandler = e => setPassword(e.target.value)
    const handleSubmit = e => {
        e.preventDefault();
        UserApi.signup(email, password, name)
            .then(
                response => authHandler(response.body),
                error => authFailedHandler(error.message));
    }

    const handleSuccessfulGoogleSignup = response => {
        const idToken = response.getAuthResponse().id_token
        UserApi.googleSignup(idToken)
            .then(
                response => authHandler(response.body),
                error => authFailedHandler(error.message));
    }

    const handleFailedGoogleSignup = response => authFailedHandler(response.details)

    return <div className="userForm">
        <h2>{t("sign.up")}</h2>
        <form onSubmit={handleSubmit}>
            <NameInput onChangeHandler={nameChangeHandler}/>
            <EmailInput onChangeHandler={emailChangeHandler}/>
            <PasswordInput
                placeHolder={t("general.password")}
                onChangeHandler={passwordChangeHandler}/>
            <p className="remark">*{t("password.about")}</p>
            <FormButton text={t("create.account")}/>
            <GoogleLogin
                clientId={googleClientId}
                buttonText="Sign Up with Google"
                onSuccess={handleSuccessfulGoogleSignup}
                onFailure={handleFailedGoogleSignup}
                style={{width: `100%`}}
                cookiePolicy={"single_host_origin"}/>
        </form>
        <Link to="/login"><h3>{t("have.account")}</h3></Link>
    </div>
}
