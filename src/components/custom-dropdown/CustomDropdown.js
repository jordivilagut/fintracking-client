import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownButton from "react-bootstrap/DropdownButton";
import React from "react";
import {useTranslation} from "react-i18next";

export const CustomDropdown = ({values, selected, handler, size}) => {
    const {t} = useTranslation();
    return <DropdownButton
        variant="light"
        id="operationDropdown"
        value={selected}
        title={t(selected)}
        size={size}>

        {values.map((val, index) => (
            <DropdownItem
                key={index}
                eventKey={val}
                value={val}
                onSelect={handler}>{t(val)}</DropdownItem>
        ))}
    </DropdownButton>
}
