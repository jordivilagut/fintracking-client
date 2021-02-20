import React from "react";
import {ButtonGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";

export const SwitchButtonGroup = ({hidden, field, item, setItem, elements, selectedElement}) => {

    const {t} = useTranslation();
    return <ButtonGroup size="sm" className={hidden? "hidden" : ""}>
        {elements.map(e => (
            <Button
                key={e}
                variant={selectedElement === e ? "primary" : "light"}
                onClick={() => setItem({...item, [field]: e})}>
                {t(e)}
            </Button>
        ))}
    </ButtonGroup>
}
