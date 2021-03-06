import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
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
import {BudgetApi} from "../../api/BudgetApi";

export const BudgetItemModal = ({item, setItem, editMode, formElements, show, closeModal, refreshBudget}) => {

    const {t} = useTranslation();
    const [validForm] = useState(true)
    const expenseTypeChangeHandler = expenseType => setItem({...item, expenseType: expenseType})
    const amountChangeHandler = e => setItem({...item, amount: e.target.value})
    const descriptionChangeHandler = e => setItem({...item, description: e.target.value})
    const uniquePayment = item.paymentType === "SINGLE"

    const handleSubmit = () => {
        closeModal()
        const start = DateUtils.toUTC(Date.parse(item.startDate.toString()))
        const end = item.endDate != null ? DateUtils.toUTC(Date.parse(item.endDate.toString())) : null
        const form = new BudgetItemForm(item, start, end)

        if (editMode) {
            BudgetApi.updateItem(item.id, form).then(() => refreshBudget())
        } else {
            BudgetApi.addItem(form).then(() => refreshBudget())
        }
    }

    useEffect(() => {
        const unique = item.paymentType === "SINGLE"
        if (!unique && item.recurrence == null) setItem({...item, recurrence: "MONTHLY"})
        if (unique && item.recurrence != null) setItem({...item, recurrence: null})
    },[item, setItem])

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
                    item={item}
                    setItem={setItem}
                    field="operationType"
                    elements={formElements.operations}
                    selectedElement={item.operationType}/>
            </div>
            <div className="cashierRow">
                <SwitchButtonGroup
                    item={item}
                    setItem={setItem}
                    field="paymentType"
                    elements={formElements.paymentTypes}
                    selectedElement={item.paymentType}/>
            </div>
            <div className="cashierRow">
                <SwitchButtonGroup
                    item={item}
                    setItem={setItem}
                    field="recurrence"
                    hidden={uniquePayment}
                    elements={formElements.recurrence}
                    selectedElement={item.recurrence}/>
            </div>
            <div className={uniquePayment ? "hidden" : "checkboxRow"}>
                <input
                    id="paymentDuration"
                    type="checkbox"
                    value={item.endlessSubscription}
                    checked={item.endlessSubscription}
                    onChange={() => setItem({...item, endDate: null, endlessSubscription: !item.endlessSubscription})}/>
                <label htmlFor="paymentDuration">{t("endless.subscription")}</label>
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
                    values={formElements.expenseTypes}
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
