import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {AmountInput} from "../amount-input/AmountInput";
import Button from "react-bootstrap/Button";
import {FinanceApi} from "../../api/FinanceApi";

export const AddFundsModal = ({modalTitle, showModal, toggleModal, refreshSummary}) => {

    const {t} = useTranslation();
    const [amount, setAmount] = useState(0) //TODO - getCurrentFunds
    const amountChangeHandler = e => setAmount(e.target.value)

    const handleSubmit = () => {
        toggleModal()
        FinanceApi.setCurrentFunds(amount).then(response => refreshSummary())
    }

    return <Modal show={showModal} centered>
        <Modal.Header>
            <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="cashierRow">
                <AmountInput
                    value={amount}
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
