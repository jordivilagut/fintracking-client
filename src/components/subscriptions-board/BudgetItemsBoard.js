import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {SearchAndAction} from "../search-and-action/SearchAndAction";
import {BudgetService} from "../../services/BudgetService";
import {BudgetItems} from "../budget-items/BudgetItems";
import {ConfirmationModal} from "../confirmation-modal/ConfirmationModal";
import {BudgetApi} from "../../api/BudgetApi";
import {BudgetItemModal} from "../add-budget-item-modal/BudgetItemModal";
import {GeneralApi} from "../../api/GeneralApi";

export const BudgetItemsBoard = ({refreshBudgetChart}) => {

    //TODO 2 - Implement edit and delete buttons for transactions
    //TODO 3 - Get Chart from BE
    //TODO 4 - Add selector to change year on budget / month on transactions

    const {t} = useTranslation();
    const [budgetItems, setBudgetItems] = useState([])
    const itemInitialState = {
        id: null,
        startDate: new Date(),
        endDate: null,
        amount: 0,
        description: "",
        operationType: "EXPENSE",
        endlessSubscription: true,
        expenseType: "CLOTHING",
        paymentType: "SINGLE",
        recurrence: null
    };

    const [item, setItem] = useState(itemInitialState)
    const [searchText, setSearchText] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [showItemModal, setShowItemModal] = useState(false)
    const [showConfirmationModal, setShowConfirmationModal] = useState(false)
    const [operations, setOperations] = useState([])
    const [paymentTypes, setPaymentTypes] = useState([])
    const [expenseTypes, setExpenseTypes] = useState([])
    const [recurrence, setRecurrence] = useState([])
    const formElements = {
        operations: operations,
        paymentTypes: paymentTypes,
        expenseTypes: expenseTypes,
        recurrence: recurrence,
    }

    const closeItemModal = () => setShowItemModal(false)
    const closeDeleteModal = () => setShowConfirmationModal(false)

    const openDeleteModal = (id) => {
        setItem(id)
        setShowConfirmationModal(true)
    }

    const openAddModal = () => {
        setItem(itemInitialState)
        setEditMode(false)
        setShowItemModal(true)
    }

    const openEditModal = (id) => {
        BudgetApi.getItem(id).then(response => {
            const fromDB = response.body
            setItem(
                {
                    id: fromDB.id,
                    startDate: fromDB.start != null ? new Date(fromDB.start) : null,
                    endDate: fromDB.end != null ? new Date(fromDB.end) : null,
                    amount: fromDB.amount,
                    description: fromDB.description,
                    operationType: fromDB.amount > 0 ? "INCOME" : "EXPENSE",
                    endlessSubscription: fromDB.end == null,
                    expenseType: fromDB.expenseType,
                    paymentType: fromDB.paymentType,
                    recurrence: fromDB.recurrence
                }
            )
        })
        setEditMode(true)
        setShowItemModal(true)
    }

    const deletePayment = () => {
        BudgetApi.deleteItem(item).then(
            () => { //success
                closeDeleteModal()
                refreshBudgetItems()
                refreshBudgetChart()
            },
            () => console.log("error"))  //error
    }

    const searchBoxHandler = e => setSearchText(e.target.value)
    const refreshBudgetItems = () => BudgetService.getCurrentYearBudget().then(response => {
        setBudgetItems(response.body)
        //refreshBudgetChart()
    })
    const budgetItemsFilter = p => p.description.toLowerCase().includes(searchText.toLowerCase())
    const filteredBudgetItems = budgetItems.filter(budgetItemsFilter)

    useEffect(() => {
        BudgetService.getCurrentYearBudget().then(response => setBudgetItems(response.body))
        GeneralApi.getOperationTypes().then(response => setOperations(response.body))
        GeneralApi.getPaymentTypes().then(response => setPaymentTypes(response.body))
        GeneralApi.getExpenseTypes().then(response => setExpenseTypes(response.body))
        GeneralApi.getRecurrenceTypes().then(response => setRecurrence(response.body))
    }, []);

    return <div id="transactionsBoard">
        <SearchAndAction
            searchPlaceholder={t("general.search")}
            searchBoxHandler={searchBoxHandler}
            buttonText={t("add.item")}
            buttonAction={openAddModal}/>
        <BudgetItems
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
            budgetItems={filteredBudgetItems}
            refreshBudget={refreshBudgetItems}/>
        <BudgetItemModal
            item={item}
            setItem={setItem}
            editMode={editMode}
            formElements={formElements}
            show={showItemModal}
            closeModal={closeItemModal}
            refreshBudget={refreshBudgetItems}/>
        <ConfirmationModal
            show={showConfirmationModal}
            closeModal={closeDeleteModal}
            action={deletePayment}/>
    </div>
}
