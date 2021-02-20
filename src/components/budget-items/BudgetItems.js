import React from "react";
import {BudgetItem} from "./BudgetItem";
import "./BudgetItems.scss"

export const BudgetItems = ({budgetItems, refreshBudget, openEditModal, openDeleteModal}) => (
    <div id="budgetItems">
        {budgetItems.map(i  => <BudgetItem
            key={i.id} item={i}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
            refreshBudget={refreshBudget}/>)}
    </div>
);
