import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export const AmountInput = ({value, handler}) => (
    <InputGroup id="amountInput">
        <InputGroup.Prepend>
            <InputGroup.Text>€</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            aria-label="Amount (to the nearest dollar)"
            name="amount"
            onChange={handler}
            type='number'
            value={value}/>
        <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
    </InputGroup>
)
