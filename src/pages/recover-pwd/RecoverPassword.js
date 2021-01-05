import React, {useState} from "react";
import "../../styles/UserForm.scss"
import {FormButton} from "../../components/form/form-button/FormButton";
import {UserApi} from "../../api/UserApi";
import {useTranslation} from "react-i18next";
import {PasswordInput} from "../../components/form/form-input/PasswordInput";
import {useHistory} from "react-router";

export const RecoverPassword = (props) => {

    const {t} = useTranslation();
    const history = useHistory();
    const token = props.match.params.token
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const passwordChangeHandler = e => setPassword(e.target.value)
    const passwordConfirmationChangeHandler = e => setPasswordConfirmation(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();
        if (password === passwordConfirmation) {
            UserApi.changePassword(token, password)
                .then(
                    () => {
                        alert(t("password.changed"))
                        history.replace("login")
                    },
                    error => alert(error.message));
        } else {
            alert("Passwords do not match.")
        }
    }

    return <div className="userForm">
        <h2>{t("recover.password")}</h2>
        <form onSubmit={handleSubmit}>
            <PasswordInput
                placeHolder={t("general.password")}
                onChangeHandler={passwordChangeHandler}/>
            <PasswordInput
                placeHolder={t("general.password.confirmation")}
                onChangeHandler={passwordConfirmationChangeHandler}/>
            <FormButton text={t("recover.password")}/>
        </form>
    </div>
}
