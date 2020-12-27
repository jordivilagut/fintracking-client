import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";

export const CustomInput = ({value, name, placeHolder, handler}) => (
    <InputGroup id="customInput">
        <FormControl
            placeholder={placeHolder}
            name={name}
            value={value}
            onChange={handler}
            type='text'
            aria-label={name}
            aria-describedby="basic-addon1"/>
    </InputGroup>
)
