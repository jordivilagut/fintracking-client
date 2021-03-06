import React, {useState} from "react";
import "../../styles/UserForm.scss"
import {FormButton} from "../../components/form/form-button/FormButton";
import {EmailInput} from "../../components/form/form-input/EmailInput";
import {PasswordInput} from "../../components/form/form-input/PasswordInput";
import {Link} from "react-router-dom";
import {UserApi} from "../../api/UserApi";
import {useTranslation} from "react-i18next";
import {GoogleLogin} from "react-google-login"
import {Spinner} from "react-bootstrap";

export const Login = ({authHandler, authFailedHandler, loading, setLoading}) => {

    const {t} = useTranslation();
    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailChangeHandler = e => setEmail(e.target.value)
    const passwordChangeHandler = e => setPassword(e.target.value)
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true)
        UserApi.login(email, password)
            .then(
                response => authHandler(response.body),
                error => authFailedHandler(error.message));
    }

    const handleSuccessfulGoogleLogin = response => {
        const idToken = response.getAuthResponse().id_token
        setLoading(true)
        UserApi.googleLogin(idToken)
            .then(
                response => authHandler(response.body),
                error => authFailedHandler(error.message));
    }

    const handleFailedGoogleLogin = response => authFailedHandler(response.details)

    return <div className="userForm">
        <div className="formTop">
            <h2>{t("log.in")}</h2>
            <Spinner
                className={loading? "" : "hidden"}
                animation="grow"
                variant="primary" />
        </div>
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
                style={{width: `100%`}}
                cookiePolicy={"single_host_origin"}/>
        </form>
        <Link to="/signup"><h3 className="link">{t("dont.have.account")}</h3></Link>
        <Link to="/forgotpwd"><h3 className="link">{t("forgot.password")}</h3></Link>
    </div>
}
