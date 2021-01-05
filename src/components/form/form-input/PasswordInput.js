import React from "react";
import {FormInput} from "./FormInput";

export const PasswordInput = ({placeHolder, value, onChangeHandler}) => (
    <FormInput
        onChangeHandler={onChangeHandler}
        name="password"
        label={placeHolder}
        type="password"
        value={value}
        required={true}/>
)
