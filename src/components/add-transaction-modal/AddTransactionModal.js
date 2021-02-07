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

export const AddTransactionModal = ({show, closeModal, firstStepVisible, hideFirstStep, refreshTransactions}) => {

    const {t} = useTranslation();
    const [validForm] = useState(true)
    const [operations, setOperations] = useState([])
    const [expenseTypes, setExpenseTypes] = useState([])
    const [selectedOperation, setSelectedOperation] = useState("INCOME")
    const [selectedExpenseType, setSelectedExpenseType] = useState(null)
    const [amount, setAmount] = useState(0)
    const [description, setDescription] = useState("")

    const expenseTypeChangeHandler = expenseType => setSelectedExpenseType(expenseType)
    const amountChangeHandler = e => setAmount(e.target.value)
    const descriptionChangeHandler = e => setDescription(e.target.value)

    const setIncomeTransaction = () => {
        hideFirstStep()
        setSelectedOperation(operations[1])
        setSelectedExpenseType("SALARY")
    }

    const setExpenseTransaction = () => {
        hideFirstStep()
        setSelectedOperation(operations[0])
        setSelectedExpenseType("CLOTHING")
    }

    const handleSubmit = () => {
        closeModal()
        const form = new TransactionForm(
            amount,
            description,
            selectedExpenseType,
            selectedOperation)

        TransactionsApi.addTransaction(form).then(() => refreshTransactions())
    }

    const fillTransactionModal = () => {
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

    useEffect(() => {fillTransactionModal()}, []);

    return <Modal show={show} centered onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>{t(firstStepVisible ? "new.transaction" : selectedOperation)}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Alert
                className={validForm ? "d-none" : "d-block"}
                variant={validForm ? "success" : "danger"}>
                <p>This is an alert message.</p>
            </Alert>
            <div className="incomeOrExpense" style={{display: firstStepVisible? "flex" : "none"}}>
                <Button
                    variant="primary"
                    onClick={setIncomeTransaction}>
                    {t("INCOME")}
                </Button>
                <Button
                    variant="dark"
                    onClick={setExpenseTransaction}>
                    {t("EXPENSE")}
                </Button>
            </div>
            <div style={{display: firstStepVisible? "none" : "block"}}>
                <div className="cashierRow">
                    <CustomDropdown
                        values={expenseTypes}
                        selected={selectedExpenseType}
                        handler={expenseTypeChangeHandler}/>
                    <AmountInput
                        value={amount}
                        handler={amountChangeHandler}/>
                </div>
                <div className="cashierRow">
                    <CustomInput
                        placeHolder={t("description.placeholder")}
                        name="description"
                        value={description}
                        handler={descriptionChangeHandler}/>
                </div>
            </div>
        </Modal.Body>

        <Modal.Footer style={{display: firstStepVisible? "none" : "flex"}}>
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
