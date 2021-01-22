import React, {useEffect, useState} from "react";
import {Transactions} from "./Transactions";
import {AddTransactionModal} from "../add-transaction-modal/AddTransactionModal";
import {SearchAndAction} from "../search-and-action/SearchAndAction";
import {useTranslation} from "react-i18next";
import {TransactionsService} from "../../services/TransactionsService";

export const TransactionsBoard = ({refreshSummary}) => {

    const {t} = useTranslation();
    const [transactions, setTransactions] = useState([])
    const [searchText, setSearchText] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [showFirstStepModal, setShowFirstStepModal] = useState(true)
    const hideFirstStep = () => setShowFirstStepModal(false)
    const toggleModal = () => {
        setShowModal(!showModal)
        setShowFirstStepModal(!showModal)
    }
    const searchBoxHandler = e => setSearchText(e.target.value)
    const refreshTransactions = () => TransactionsService.getCurrentMonthTransactions().then(response => {
        setTransactions(response.body)
        refreshSummary()
    })
    const transactionsFilter = t => t.description.toLowerCase().includes(searchText.toLowerCase())
    const filteredTransactions = transactions.filter(transactionsFilter)

    useEffect(() => {
        TransactionsService.getCurrentMonthTransactions().then(response => setTransactions(response.body))
    }, []);

    return <div id="transactionsBoard">
        <SearchAndAction
            searchPlaceholder={t("general.search")}
            searchBoxHandler={searchBoxHandler}
            buttonText={t("add.transaction")}
            buttonAction={toggleModal}/>
        <Transactions
            transactions={filteredTransactions}
            refreshTransactions={refreshTransactions}/>
        <AddTransactionModal
            firstStepVisible={showFirstStepModal}
            hideFirstStep={hideFirstStep}
            showModal={showModal}
            toggleModal={toggleModal}
            refreshTransactions={refreshTransactions}/>
    </div>
}
