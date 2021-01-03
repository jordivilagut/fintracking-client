import React, {useState} from "react";
import "../../styles/UserForm.scss"
import {FormButton} from "../../components/form/form-button/FormButton";
import {EmailInput} from "../../components/form/form-input/EmailInput";
import {PasswordInput} from "../../components/form/form-input/PasswordInput";
import {NameInput} from "../../components/form/form-input/NameInput";
import {Link} from "react-router-dom";
import {UserApi} from "../../api/UserApi";
import {useTranslation} from "react-i18next";

export const Signup = props => {

    const {t} = useTranslation();
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

    return <div className="userForm">
        <h2>{t("sign.up")}</h2>
        <form onSubmit={handleSubmit}>
            <NameInput onChangeHandler={nameChangeHandler}/>
            <EmailInput onChangeHandler={emailChangeHandler}/>
            <PasswordInput onChangeHandler={passwordChangeHandler}/>
            <p className="remark">*{t("password.about")}</p>
            <FormButton text={t("create.account")}/>
        </form>
        <Link to="/login"><h3>{t("have.account")}</h3></Link>
    </div>
}
