import React from "react";
import {FormInput} from "./FormInput";
import {useTranslation} from "react-i18next";

export const NameInput = ({value, onChangeHandler}) => {
    const {t} = useTranslation();
    return <FormInput
        onChangeHandler={onChangeHandler}
        name="name"
        label={t("general.name")}
        type="text"
        value={value}
        required={true}/>
}
