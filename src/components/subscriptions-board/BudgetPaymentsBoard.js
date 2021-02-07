import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {SearchAndAction} from "../search-and-action/SearchAndAction";
import {BudgetService} from "../../services/BudgetService";
import {RecurringPayments} from "../recurring-payments/RecurringPayments";
import {AddPaymentModal} from "../add-payment-modal/AddPaymentModal";

export const BudgetPaymentsBoard = ({refreshBudget}) => {

    const {t} = useTranslation();
    const [payments, setPayments] = useState([])
    const [searchText, setSearchText] = useState("")
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const openModal = () => {
        setShowModal(true)
    }

    const searchBoxHandler = e => setSearchText(e.target.value)
    const refreshPayments = () => BudgetService.getCurrentYearBudget().then(response => {
        setPayments(response.body)
        refreshBudget()
    })
    const paymentsFilter = p => p.description.toLowerCase().includes(searchText.toLowerCase())
    const filteredPayments = payments.filter(paymentsFilter)

    useEffect(() => {
        //BudgetService.getCurrentYearBudget().then(response => setPayments(response.body))
    }, []);

    return <div id="transactionsBoard">
        <SearchAndAction
            searchPlaceholder={t("general.search")}
            searchBoxHandler={searchBoxHandler}
            buttonText={t("add.item")}
            buttonAction={openModal}/>
        <RecurringPayments
            payments={filteredPayments}
            refreshPayments={refreshPayments}/>
        <AddPaymentModal
            show={showModal}
            closeModal={closeModal}
            refreshPayments={refreshPayments}/>
    </div>
}
