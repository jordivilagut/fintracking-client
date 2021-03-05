import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";
import './AddTransactionModal.scss';
import {CustomDropdown} from "../custom-dropdown/CustomDropdown";
import {AmountInput} from "../amount-input/AmountInput";
import {CustomInput} from "../custom-input/CustomInput";
import {TransactionForm} from "../../model/TransactionForm";
import {TransactionsApi} from "../../api/TransactionsApi";
import {useTranslation} from "react-i18next";
import {SwitchButtonGroup} from "../switch-button-group/SwitchButtonGroup";

export const TransactionModal = ({transaction, setTransaction, editMode, formElements, show, closeModal, refreshTransactions}) => {

    const {t} = useTranslation();
    const [validForm] = useState(true)
    const expenseTypeChangeHandler = expenseType => setTransaction({...transaction, expenseType: expenseType})
    const amountChangeHandler = e => setTransaction({...transaction, amount: e.target.value})
    const descriptionChangeHandler = e => setTransaction({...transaction, description: e.target.value})

    const handleSubmit = () => {
        closeModal()
        const form = new TransactionForm(
            transaction.amount,
            transaction.description,
            transaction.expenseType,
            transaction.operationType)

        if (editMode) {
            TransactionsApi.updateTransaction(transaction.id, form).then(() => refreshTransactions())
        } else {
            TransactionsApi.addTransaction(form).then(() => refreshTransactions())
        }
    }

    return <Modal show={show} centered onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>{t("new.transaction")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Alert
                className={validForm ? "d-none" : "d-block"}
                variant={validForm ? "success" : "danger"}>
                <p>This is an alert message.</p>
            </Alert>
            <div>
                <div className="cashierRow">
                    <SwitchButtonGroup
                        item={transaction}
                        setItem={setTransaction}
                        field="operationType"
                        elements={formElements.operations}
                        selectedElement={transaction.operationType}/>
                </div>
                <div className="cashierRow">
                    <CustomDropdown
                        values={formElements.expenseTypes}
                        selected={transaction.expenseType}
                        handler={expenseTypeChangeHandler}/>
                    <AmountInput
                        value={transaction.amount}
                        handler={amountChangeHandler}/>
                </div>
                <div className="cashierRow">
                    <CustomInput
                        placeHolder={t("budget.description.placeholder")}
                        name="description"
                        value={transaction.description}
                        handler={descriptionChangeHandler}/>
                </div>
            </div>
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant="secondary"
                onClick={closeModal}>
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
