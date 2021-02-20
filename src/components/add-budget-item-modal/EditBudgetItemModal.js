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
import {BudgetItemForm} from "../../model/BudgetItemForm";
import {DateUtils} from "../../utils/DateUtils";

export const EditBudgetItemModal = ({item, setItem, show, closeModal, refreshBudget}) => {

    //TODO - Get item from itemId and set all the properties
    //TODO 2 - Implement edit and delete buttons for transactions
    //TODO 3 - Get Chart from BE
    //TODO 4 - Add selector to change year on budget / month on transactions

    const {t} = useTranslation();
    const [validForm] = useState(true)
    const [operations, setOperations] = useState([])
    const [paymentTypes, setPaymentTypes] = useState([])
    const [expenseTypes, setExpenseTypes] = useState([])
    const [recurrence, setRecurrence] = useState([])
    const [operationFunctions] = useState([])
    const [paymentFunctions] = useState([])
    const [recurrenceFunctions] = useState([])

    const expenseTypeChangeHandler = expenseType => setItem({...item, expenseType: expenseType})
    const amountChangeHandler = e => setItem({...item, amount: e.target.value})
    const descriptionChangeHandler = e => setItem({...item, description: e.target.value})
    const uniquePayment = item.paymentType === "SINGLE"

    const handleSubmit = () => {
        closeModal()
        const start = DateUtils.toUTC(Date.parse(item.startDate.toString()))
        const end = item.endDate != null ? DateUtils.toUTC(Date.parse(item.endDate.toString())) : null

        const form = new BudgetItemForm(
            item.amount,
            item.description,
            start,
            end,
            item.expenseType,
            item.operationType,
            item.paymentType,
            item.paymentRecurrence)

        console.log("Edit payment", form)
    }

    useEffect(() => {
        GeneralApi.getOperationTypes().then(response => {
            const operations = response.body
            operations.forEach(r => {
                operationFunctions.push(() => setItem({...item, operationType: r}))
            })
            setOperations(operations)
            setItem({...item, operationType: operations[0]})
        })
        GeneralApi.getPaymentTypes().then(response => {
            const paymentTypes = response.body
            paymentTypes.forEach(r => {
                paymentFunctions.push(() => setItem({...item, paymentType: r}))
            })
            setPaymentTypes(paymentTypes)
            setItem({...item, paymentType: paymentTypes[0]})
        })
        GeneralApi.getExpenseTypes().then(response => {
            const expenseTypes = response.body
            setExpenseTypes(expenseTypes)
            setItem({...item, expenseType: expenseTypes[0]})
        })
        GeneralApi.getRecurrenceTypes().then(response => {
            const recurrence = response.body
            recurrence.forEach(r => {
                recurrenceFunctions.push(() => setItem({...item, description: r}))
            })
            setRecurrence(recurrence)
            setItem({...item, description: recurrence[0]})
        })

    }, [operationFunctions, paymentFunctions, recurrenceFunctions]);

    return <Modal show={show} centered onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>{t("new.budget.item")}</Modal.Title>
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
                    selectedElement={item.operationType}
                    functions={operationFunctions}/>
            </div>
            <div className="cashierRow">
                <SwitchButtonGroup
                    elements={paymentTypes}
                    selectedElement={item.paymentType}
                    functions={paymentFunctions}/>
            </div>
            <div className="cashierRow">
                <SwitchButtonGroup
                    hidden={uniquePayment}
                    elements={recurrence}
                    selectedElement={item.paymentRecurrence}
                    functions={recurrenceFunctions}/>
            </div>
            <div className={uniquePayment ? "hidden" : "checkboxRow"}>
                <input
                    id="paymentDuration"
                    type="checkbox"
                    value={item.endlessSubscription}
                    checked={item.endlessSubscription}
                    onChange={() => setItem({...item, endlessSubscription: !item.endlessSubscription})}/>
                <label htmlFor="paymentDuration">Endless subscription</label>
            </div>
            <div className="cashierRow calendarRow">
                {item.endlessSubscription || uniquePayment?
                    <CustomCalendar
                        date={item.startDate}
                        setDate={d => setItem({...item, startDate: d})}/> :
                    <CustomCalendarWithEndDate
                        startDate={item.startDate}
                        setStartDate={d => setItem({...item, startDate: d})}
                        endDate={item.endDate}
                        setEndDate={d => setItem({...item, endDate: d})}/>}
            </div>
            <div className="cashierRow">
                <CustomDropdown
                    values={expenseTypes}
                    selected={item.expenseType}
                    handler={expenseTypeChangeHandler}/>
                <AmountInput
                    value={item.amount}
                    handler={amountChangeHandler}/>
            </div>
            <div className="cashierRow">
                <CustomInput
                    placeHolder={t("budget.description.placeholder")}
                    name="description"
                    value={item.description}
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
