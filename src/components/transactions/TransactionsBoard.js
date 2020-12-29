import React, {useEffect, useState} from "react";
import {Transactions} from "./Transactions";
import {TransactionsApi} from "../../api/TransactionsApi";
import {AddTransactionModal} from "../add-transaction-modal/AddTransactionModal";
import {SearchAndAction} from "../search-and-action/SearchAndAction";
import {useTranslation} from "react-i18next";

export const TransactionsBoard = () => {

    const {t} = useTranslation();
    const [transactions, setTransactions] = useState([])
    const [searchText, setSearchText] = useState("")
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => setShowModal(!showModal)
    const searchBoxHandler = e => setSearchText(e.target.value)
    const refreshTransactions = () => TransactionsApi.getTransactions().then(response => setTransactions(response.body))
    const transactionsFilter = t => t.description.toLowerCase().includes(searchText.toLowerCase())
    const filteredTransactions = transactions.filter(transactionsFilter)

    useEffect(() => {refreshTransactions()}, []);

    return <div id="transactionsBoard">
        <SearchAndAction
            searchPlaceholder={t("general.search")}
            searchBoxHandler={searchBoxHandler}
            buttonText={t("add.transaction")}
            buttonAction={toggleModal}/>
        <Transactions transactions={filteredTransactions}/>
        <AddTransactionModal
            showModal={showModal}
            toggleModal={toggleModal}
            refreshTransactions={refreshTransactions}/>
    </div>
}
