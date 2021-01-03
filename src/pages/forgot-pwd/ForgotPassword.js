import React, {useState} from "react";
import "../../styles/UserForm.scss"
import {FormButton} from "../../components/form/form-button/FormButton";
import {EmailInput} from "../../components/form/form-input/EmailInput";
import {UserApi} from "../../api/UserApi";
import {useTranslation} from "react-i18next";

export const ForgotPassword = () => {

    const {t} = useTranslation();
    const [email, setEmail] = useState("")
    const emailChangeHandler = e => setEmail(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();
        UserApi.recoverPassword(email)
            .then(
                () => alert("Email sent"),              //response
                () => alert("Something went wrong"));   //error
    }

    return <div className="userForm">
        <h2>{t("recover.password")}</h2>
        <form onSubmit={handleSubmit}>
            <EmailInput onChangeHandler={emailChangeHandler}/>
            <FormButton text={t("recover.password")}/>
        </form>
    </div>
}
