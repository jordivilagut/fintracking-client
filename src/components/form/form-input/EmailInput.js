import React from "react";
import {FormInput} from "./FormInput";

export const EmailInput = ({value, onChangeHandler}) => (
    <FormInput
        onChangeHandler={onChangeHandler}
        name="email"
        label="Email"
        type="email"
        value={value}
        required={true}/>
)
