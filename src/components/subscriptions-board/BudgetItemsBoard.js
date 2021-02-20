import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {SearchAndAction} from "../search-and-action/SearchAndAction";
import {BudgetService} from "../../services/BudgetService";
import {BudgetItems} from "../budget-items/BudgetItems";
import {AddBudgetItemModal} from "../add-budget-item-modal/AddBudgetItemModal";
import {ConfirmationModal} from "../confirmation-modal/ConfirmationModal";
import {BudgetApi} from "../../api/BudgetApi";
import {EditBudgetItemModal} from "../add-budget-item-modal/EditBudgetItemModal";

export const BudgetItemsBoard = ({refreshBudgetChart}) => {

    //TODO - Get item from itemId and set all the properties
    //TODO 2 - Implement edit and delete buttons for transactions
    //TODO 3 - Get Chart from BE
    //TODO 4 - Add selector to change year on budget / month on transactions

    const {t} = useTranslation();
    const [budgetItems, setBudgetItems] = useState([])
    const [focusedItem, setFocusedItem] = useState({
        id: null,
        startDate: new Date(),
        endDate: null,
        amount: 0,
        description: "",
        operationType: "EXPENSE",
        endlessSubscription: true,
        expenseType: "CLOTHING",
        paymentType: "SINGLE",
        paymentRecurrence: null
    })

    const [searchText, setSearchText] = useState("")
    const [showAddItemModal, setShowAddItemModal] = useState(false)
    const [showEditItemModal, setShowEditItemModal] = useState(false)
    const [showConfirmationModal, setShowConfirmationModal] = useState(false)

    const closeAddItemModal = () => setShowAddItemModal(false)
    const closeEditItemModal = () => setShowEditItemModal(false)
    const closeDeleteModal = () => setShowConfirmationModal(false)
    const openAddItemModal = () => setShowAddItemModal(true)

    const openDeleteModal = (id) => {
        setFocusedItem(id)
        setShowConfirmationModal(true)
    }

    const openEditModal = (id) => {
        BudgetApi.getItem(id).then(response => {
            const fromDB = response.body
            setFocusedItem(
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
                    paymentRecurrence: fromDB.paymentRecurrence
                }
            )
        })
        setShowEditItemModal(true)
    }

    const deletePayment = () => {
        BudgetApi.deleteItem(focusedItem).then(
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
    }, []);

    return <div id="transactionsBoard">
        <SearchAndAction
            searchPlaceholder={t("general.search")}
            searchBoxHandler={searchBoxHandler}
            buttonText={t("add.item")}
            buttonAction={openAddItemModal}/>
        <BudgetItems
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
            budgetItems={filteredBudgetItems}
            refreshBudget={refreshBudgetItems}/>
        <AddBudgetItemModal
            show={showAddItemModal}
            closeModal={closeAddItemModal}
            refreshBudget={refreshBudgetItems}/>
        <EditBudgetItemModal
            item={focusedItem}
            setItem={setFocusedItem}
            show={showEditItemModal}
            closeModal={closeEditItemModal}
            refreshBudget={refreshBudgetItems}/>
        <ConfirmationModal
            show={showConfirmationModal}
            closeModal={closeDeleteModal}
            action={deletePayment}/>
    </div>
}
