import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {SearchAndAction} from "../search-and-action/SearchAndAction";
import {Transactions} from "../transactions/Transactions";
import {AddTransactionModal} from "../add-transaction-modal/AddTransactionModal";
import {BudgetService} from "../../services/BudgetService";

export const BudgetPaymentsBoard = ({refreshBudget}) => {

    const {t} = useTranslation();
    const [payments, setPayments] = useState([])
    const [searchText, setSearchText] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [showFirstStepModal, setShowFirstStepModal] = useState(true)
    const hideFirstStep = () => setShowFirstStepModal(false)
    const closeModal = () => setShowModal(false)
    const openModal = () => {
        setShowModal(true)
        setShowFirstStepModal(true)
    }

    const searchBoxHandler = e => setSearchText(e.target.value)
    const refreshSubscriptions = () => BudgetService.getCurrentYearBudget().then(response => {
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
        <Transactions
            transactions={filteredPayments}
            refreshTransactions={refreshSubscriptions}/>
        <AddTransactionModal
            firstStepVisible={showFirstStepModal}
            hideFirstStep={hideFirstStep}
            show={showModal}
            closeModal={closeModal}
            refreshTransactions={refreshSubscriptions}/>
    </div>
}
