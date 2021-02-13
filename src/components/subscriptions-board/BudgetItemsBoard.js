import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {SearchAndAction} from "../search-and-action/SearchAndAction";
import {BudgetService} from "../../services/BudgetService";
import {BudgetItems} from "../budget-items/BudgetItems";
import {AddBudgetItemModal} from "../add-budget-item-modal/AddBudgetItemModal";

export const BudgetItemsBoard = ({refreshBudgetChart}) => {

    const {t} = useTranslation();
    const [budgetItems, setBudgetItems] = useState([])
    const [searchText, setSearchText] = useState("")
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const openModal = () => {
        setShowModal(true)
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
            buttonAction={openModal}/>
        <BudgetItems
            budgetItems={filteredBudgetItems}
            refreshBudget={refreshBudgetItems}/>
        <AddBudgetItemModal
            show={showModal}
            closeModal={closeModal}
            refreshBudget={refreshBudgetItems}/>
    </div>
}
