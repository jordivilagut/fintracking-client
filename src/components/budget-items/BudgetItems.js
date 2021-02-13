import React from "react";
import {BudgetItem} from "./BudgetItem";
import "./BudgetItems.scss"

export const BudgetItems = ({budgetItems, refreshBudget}) => (
    <div id="budgetItems">
        {budgetItems.map(t  => <BudgetItem
            key={t.id} payment={t}
            refreshBudget={refreshBudget}/>)}
    </div>
);
