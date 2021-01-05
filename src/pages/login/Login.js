import React, {useState} from "react";
import "../../styles/UserForm.scss"
import {FormButton} from "../../components/form/form-button/FormButton";
import {EmailInput} from "../../components/form/form-input/EmailInput";
import {PasswordInput} from "../../components/form/form-input/PasswordInput";
import {Link} from "react-router-dom";
import {UserApi} from "../../api/UserApi";
import {useTranslation} from "react-i18next";

export const Login = props => {

    const {t} = useTranslation();
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

    return <div className="userForm">
        <h2>{t("log.in")}</h2>
        <form onSubmit={handleSubmit}>
            <EmailInput onChangeHandler={emailChangeHandler}/>
            <PasswordInput
                placeHolder={t("general.password")}
                onChangeHandler={passwordChangeHandler}/>
            <FormButton text={t("log.in")}/>
        </form>
        <Link to="/signup"><h3 className="link">{t("dont.have.account")}</h3></Link>
        <Link to="/forgotpwd"><h3 className="link">{t("forgot.password")}</h3></Link>
    </div>
}
