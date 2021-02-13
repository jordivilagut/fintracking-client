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
import {CustomCalendar} from "../custom-calendar/CustomCalendar";
import "./AddBudgetItemModal.scss"
import {CustomCalendarWithEndDate} from "../custom-calendar/CustomCalendarWithEndDate";
import {BudgetApi} from "../../api/BudgetApi";
import {BudgetItemForm} from "../../model/BudgetItemForm";
import {DateUtils} from "../../utils/DateUtils";

export const AddBudgetItemModal = ({show, closeModal, refreshBudget}) => {

    const {t} = useTranslation();
    const [validForm] = useState(true)
    const [operations, setOperations] = useState([])
    const [budgetItems, setBudgetItems] = useState([])
    const [expenseTypes, setExpenseTypes] = useState([])
    const [recurrence, setRecurrence] = useState([])
    const [operationFunctions] = useState([])
    const [paymentFunctions] = useState([])
    const [recurrenceFunctions] = useState([])
    const [selectedOperation, setSelectedOperation] = useState("INCOME")
    const [selectedPayment, setSelectedPayment] = useState("RECURRING")
    const [selectedExpenseType, setSelectedExpenseType] = useState(null)
    const [selectedRecurrence, setSelectedRecurrence] = useState(null)
    const [endlessSubscription, setEndlessSubscription] = useState(true)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [amount, setAmount] = useState(0)
    const [description, setDescription] = useState("")

    const expenseTypeChangeHandler = expenseType => setSelectedExpenseType(expenseType)
    const amountChangeHandler = e => setAmount(e.target.value)
    const descriptionChangeHandler = e => setDescription(e.target.value)
    const uniquePayment = selectedPayment !== "RECURRING"

    const handleSubmit = () => {
        closeModal()
        const start = DateUtils.toUTC(Date.parse(startDate.toString()))
        const end = endDate != null ? DateUtils.toUTC(Date.parse(startDate.toString())) : null

        const form = new BudgetItemForm(
            amount,
            description,
            start,
            end,
            selectedExpenseType,
            selectedOperation,
            selectedPayment,
            selectedRecurrence)

        BudgetApi.addPayment(form).then(() => refreshBudget())
    }

    useEffect(() => {
        GeneralApi.getOperationTypes().then(response => {
            const operations = response.body
            operations.forEach(r => {
                operationFunctions.push(() => setSelectedOperation(r))
            })
            setOperations(operations)
            setSelectedOperation(operations[0])
        })
        GeneralApi.getPaymentTypes().then(response => {
            const budgetItems = response.body
            budgetItems.forEach(r => {
                paymentFunctions.push(() => setSelectedPayment(r))
            })
            setBudgetItems(budgetItems)
            setSelectedPayment(budgetItems[0])
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
    }, [operationFunctions, paymentFunctions, recurrenceFunctions]);

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
                    elements={budgetItems}
                    selectedElement={selectedPayment}
                    functions={paymentFunctions}/>
            </div>
            <div className="cashierRow">
                <SwitchButtonGroup
                    hidden={uniquePayment}
                    elements={recurrence}
                    selectedElement={selectedRecurrence}
                    functions={recurrenceFunctions}/>
            </div>
            <div className={uniquePayment ? "hidden" : "checkboxRow"}>
                <input
                    id="paymentDuration"
                    type="checkbox"
                    value={endlessSubscription}
                    checked={endlessSubscription}
                    onChange={() => setEndlessSubscription(!endlessSubscription)}/>
                <label htmlFor="paymentDuration">Endless subscription</label>
            </div>
            <div className="cashierRow calendarRow">
                {endlessSubscription || uniquePayment?
                    <CustomCalendar
                        date={startDate}
                        setDate={setStartDate}/> :
                    <CustomCalendarWithEndDate
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}/>}
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
