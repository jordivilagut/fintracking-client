import React from "react";
import {FormInput} from "./FormInput";

export const NameInput = ({value, onChangeHandler}) => (
    <FormInput
        onChangeHandler={onChangeHandler}
        name="name"
        label="Name"
        type="text"
        value={value}
        required={true}/>
)
