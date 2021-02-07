import React from "react";
import {ButtonGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";

export const SwitchButtonGroup = ({hidden, elements, selectedElement, functions}) => {

    const {t} = useTranslation();
    return <ButtonGroup size="sm" className={hidden? "hidden" : ""}>
        {elements.map((e,i) => (
            <Button
                key={e}
                variant={selectedElement === e ? "primary" : "light"}
                onClick={functions[i]}>
                {t(e)}
            </Button>
        ))}
    </ButtonGroup>
}
