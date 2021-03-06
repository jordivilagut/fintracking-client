import {useTranslation} from "react-i18next";
import React from "react";
import Modal from "react-bootstrap/Modal";
import {AmountInput} from "../amount-input/AmountInput";
import Button from "react-bootstrap/Button";

export const AddFundsModal = ({funds, setFunds, modalTitle, showModal, toggleModal, handleSubmit}) => {

    const {t} = useTranslation();
    const amountChangeHandler = e => setFunds(e.target.value)

    return <Modal show={showModal} centered>
        <Modal.Header>
            <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="cashierRow">
                <AmountInput
                    value={funds}
                    handler={amountChangeHandler}/>
            </div>
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant="secondary"
                onClick={toggleModal}>
                {t("general.close")}
            </Button>
            <Button
                id="submitButton"
                variant="primary"
                onClick={handleSubmit}>
                {t("general.save")}
            </Button>
        </Modal.Footer>
    </Modal>
}
