import React, {useEffect, useState} from "react";
import {Transactions} from "./Transactions";
import {TransactionModal} from "../add-transaction-modal/TransactionModal";
import {SearchAndAction} from "../search-and-action/SearchAndAction";
import {useTranslation} from "react-i18next";
import {TransactionsService} from "../../services/TransactionsService";
import {TransactionsApi} from "../../api/TransactionsApi";
import {ConfirmationModal} from "../confirmation-modal/ConfirmationModal";
import {GeneralApi} from "../../api/GeneralApi";

export const TransactionsBoard = ({refreshSummary}) => {

    const {t} = useTranslation();
    const [transactions, setTransactions] = useState([])
    const transactionInitialState = {
        id: null,
        date: new Date(),
        amount: 0,
        description: "",
        operationType: "EXPENSE",
        expenseType: "CLOTHING",
    };

    const [transaction, setTransaction] = useState(transactionInitialState)
    const [searchText, setSearchText] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [showTransactionModal, setShowTransactionModal] = useState(false)
    const [showConfirmationModal, setShowConfirmationModal] = useState(false)
    const [operations, setOperations] = useState([])
    const [expenseTypes, setExpenseTypes] = useState([])
    const formElements = {
        operations: operations,
        expenseTypes: expenseTypes,
    }

    const closeTransactionsModal = () => setShowTransactionModal(false)
    const closeDeleteModal = () => setShowConfirmationModal(false)

    const openDeleteModal = (id) => {
        TransactionsApi.getTransaction(id).then(response => { setTransaction(response.body) })
        setShowConfirmationModal(true)
    }

    const openAddModal = () => {
        setTransaction(transactionInitialState)
        setEditMode(false)
        setShowTransactionModal(true)
    }

    const openEditModal = (id) => {
        TransactionsApi.getTransaction(id).then(response => {
            const fromDB = response.body
            setTransaction(
                {
                    id: fromDB.id,
                    date: fromDB.start != null ? new Date(fromDB.start) : null,
                    amount: fromDB.amount,
                    description: fromDB.description,
                    operationType: fromDB.operationType,
                    expenseType: fromDB.expenseType,
                }
            )
        })
        setEditMode(true)
        setShowTransactionModal(true)
    }

    const deleteTransaction = () => {
        TransactionsApi.deleteTransaction(transaction.id).then(
            () => { //success
                closeDeleteModal()
                refreshTransactions()
            },
            () => console.log("error"))  //error
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
        GeneralApi.getOperationTypes().then(response => setOperations(response.body))
        GeneralApi.getExpenseTypes().then(response => setExpenseTypes(response.body))
    }, []);

    return <div id="transactionsBoard">
        <SearchAndAction
            searchPlaceholder={t("general.search")}
            searchBoxHandler={searchBoxHandler}
            buttonText={t("add.transaction")}
            buttonAction={openAddModal}/>
        <Transactions
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
            transactions={filteredTransactions}
            refreshTransactions={refreshTransactions}/>
        <TransactionModal
            transaction={transaction}
            setTransaction={setTransaction}
            editMode={editMode}
            formElements={formElements}
            show={showTransactionModal}
            closeModal={closeTransactionsModal}
            refreshTransactions={refreshTransactions}/>
        <ConfirmationModal
            show={showConfirmationModal}
            closeModal={closeDeleteModal}
            action={deleteTransaction}/>
    </div>
}
