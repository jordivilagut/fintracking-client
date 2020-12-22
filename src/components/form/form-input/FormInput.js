import React from "react";

export const FormInput = ({name, label, type, value, required, onChangeHandler}) => (
    <div className="formInput formItem">
        <input
            onChange={onChangeHandler}
            placeholder={label}
            name={name}
            type={type}
            value={value}
            required={required}/>
    </div>
)
