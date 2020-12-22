import React from "react";
import {FormInput} from "./FormInput";

export const PasswordInput = ({value, onChangeHandler}) => (
    <FormInput
        onChangeHandler={onChangeHandler}
        name="password"
        label="Password"
        type="password"
        value={value}
        required={true}/>
)
