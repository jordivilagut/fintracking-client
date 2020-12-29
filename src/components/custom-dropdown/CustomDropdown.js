import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownButton from "react-bootstrap/DropdownButton";
import React from "react";

export const CustomDropdown = ({values, selected, handler, size}) => (
    <DropdownButton
        variant="light"
        id="operationDropdown"
        value={selected}
        title={selected}
        size={size}>

        {values.map((val, index) => (
            <DropdownItem
                key={index}
                eventKey={val}
                value={val}
                onSelect={handler}>{val}</DropdownItem>
        ))}
    </DropdownButton>
)
