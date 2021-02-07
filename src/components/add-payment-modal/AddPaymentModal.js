import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {GeneralApi} from "../../api/GeneralApi";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import {CustomDropdown} from "../custom-dropdown/CustomDropdown";
import {AmountInput} from "../amount-input/AmountInput";
import {CustomInput} from "../custom-input/CustomInput";
import {SwitchButtonGroup} from "../switch-button-group/SwitchButtonGroup";

export const AddPaymentModal = ({show, closeModal, refreshPayments}) => {

    const {t} = useTranslation();
    const [validForm] = useState(true)
    const [operations, setOperations] = useState([])
    const [payments, setPayments] = useState([])
    const [expenseTypes, setExpenseTypes] = useState([])
    const [recurrence, setRecurrence] = useState([])
    const [operationFunctions] = useState([])
    const [paymentFunctions] = useState([])
    const [recurrenceFunctions] = useState([])
    const [selectedOperation, setSelectedOperation] = useState("INCOME")
    const [selectedPayment, setSelectedPayment] = useState("RECURRING")
    const [selectedExpenseType, setSelectedExpenseType] = useState(null)
    const [selectedRecurrence, setSelectedRecurrence] = useState(null)
    const [amount, setAmount] = useState(0)
    const [description, setDescription] = useState("")

    const expenseTypeChangeHandler = expenseType => setSelectedExpenseType(expenseType)
    const amountChangeHandler = e => setAmount(e.target.value)
    const descriptionChangeHandler = e => setDescription(e.target.value)

    const handleSubmit = () => {
        closeModal()
        /*const form = new PaymentForm(
            amount,
            description,
            selectedExpenseType,
            selectedPayment)

        PaymentsApi.addPayment(form).then(() => refreshPayments())*/
    }

    const fetchModalData = () => {
        GeneralApi.getOperationTypes().then(response => {
            const operations = response.body
            operations.forEach(r => {
                operationFunctions.push(() => setSelectedOperation(r))
            })
            setOperations(operations)
            setSelectedOperation(operations[0])
        })
        GeneralApi.getPaymentTypes().then(response => {
            const payments = response.body
            payments.forEach(r => {
                paymentFunctions.push(() => setSelectedPayment(r))
            })
            setPayments(payments)
            setSelectedPayment(payments[0])
        })
        GeneralApi.getExpenseTypes().then(response => {
            const expenseTypes = response.body
            setExpenseTypes(expenseTypes)
            setSelectedExpenseType(expenseTypes[0])
        })
        GeneralApi.getRecurrenceTypes().then(response => {
            const recurrence = response.body
            recurrence.forEach(r => {
                recurrenceFunctions.push(() => setSelectedRecurrence(r))
            })
            setRecurrence(recurrence)
            setSelectedRecurrence(recurrence[0])
        })
    }

    useEffect(() => {fetchModalData()}, []);

    return <Modal show={show} centered onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>{t("new.payment")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Alert
                className={validForm ? "d-none" : "d-block"}
                variant={validForm ? "success" : "danger"}>
                <p>This is an alert message.</p>
            </Alert>
            <div className="cashierRow">
                <SwitchButtonGroup
                    elements={operations}
                    selectedElement={selectedOperation}
                    functions={operationFunctions}/>
            </div>
            <div className="cashierRow">
                <SwitchButtonGroup
                    elements={payments}
                    selectedElement={selectedPayment}
                    functions={paymentFunctions}/>
            </div>
            <div className="cashierRow">
                <SwitchButtonGroup
                    elements={recurrence}
                    selectedElement={selectedRecurrence}
                    functions={recurrenceFunctions}/>
            </div>
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
