import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";
import './AddTransactionModal.scss';
import {GeneralApi} from "../../api/GeneralApi";
import {CustomDropdown} from "../custom-dropdown/CustomDropdown";
import {AmountInput} from "../amount-input/AmountInput";
import {CustomInput} from "../custom-input/CustomInput";
import {TransactionForm} from "../../model/TransactionForm";
import {TransactionsApi} from "../../api/TransactionsApi";
import {useTranslation} from "react-i18next";

export const AddTransactionModal = props => {

    const {t} = useTranslation();
    const {showModal, toggleModal, refreshTransactions} = props
    const [validForm] = useState(true)
    const [operations, setOperations] = useState([])
    const [expenseTypes, setExpenseTypes] = useState([])
    const [selectedOperation, setSelectedOperation] = useState(null)
    const [selectedExpenseType, setSelectedExpenseType] = useState(null)
    const [amount, setAmount] = useState(0)
    const [description, setDescription] = useState("")

    const operationChangeHandler = operation => setSelectedOperation(operation)
    const expenseTypeChangeHandler = expenseType => setSelectedExpenseType(expenseType)
    const amountChangeHandler = e => setAmount(e.target.value)
    const descriptionChangeHandler = e => setDescription(e.target.value)

    const handleSubmit = () => {
        toggleModal()
        const form = new TransactionForm(
            amount,
            description,
            selectedExpenseType,
            selectedOperation)

        TransactionsApi.addTransaction(form).then(response => refreshTransactions())
    }

    const fetchModalData = () => {
        GeneralApi.getOperationTypes().then(response => {
            const operations = response.body
            setOperations(operations)
            setSelectedOperation(operations[0])
        })
        GeneralApi.getExpenseTypes().then(response => {
            const expenseTypes = response.body
            setExpenseTypes(expenseTypes)
            setSelectedExpenseType(expenseTypes[0])
        })
    }

    useEffect(() => {fetchModalData()}, []);

    return <Modal show={showModal} centered>
        <Modal.Header>
            <Modal.Title>{t("new.transaction")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Alert
                className={validForm ? "d-none" : "d-block"}
                variant={validForm ? "success" : "danger"}>
                <p>This is an alert message.</p>
            </Alert>
            <div className="cashierRow">
                <CustomDropdown
                    values={operations}
                    selected={selectedOperation}
                    handler={operationChangeHandler}/>
                <AmountInput
                    value={amount}
                    handler={amountChangeHandler}/>
            </div>
            <div className="cashierRow">
                <CustomInput
                    placeholder={t("description.placeholder")}
                    name="description"
                    value={description}
                    handler={descriptionChangeHandler}/>
                <CustomDropdown
                    values={expenseTypes}
                    selected={selectedExpenseType}
                    handler={expenseTypeChangeHandler}/>
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
                {t("add.transaction")}
            </Button>
        </Modal.Footer>
    </Modal>
}
