import React from "react";
import {BudgetItem} from "./BudgetItem";
import "./BudgetItems.scss"

export const BudgetItems = ({budgetItems, refreshBudget}) => (
    <div id="budgetItems">
        {budgetItems.map(i  => <BudgetItem
            key={i.id} item={i}
            refreshBudget={refreshBudget}/>)}
    </div>
);
