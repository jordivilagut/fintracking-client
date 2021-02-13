import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconUtils} from "../../utils/IconUtils";
import {CurrencyUtils} from "../../utils/CurrencyUtils";
import {DateUtils} from "../../utils/DateUtils";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {BudgetApi} from "../../api/BudgetApi";

export const BudgetItem = ({payment, refreshBudget}) => {

    const deletePayment = () => {
        BudgetApi.deletePayment(payment.id).then(
            () => refreshBudget(),  //success
            () => console.log("error"))  //error
    }

    return  <div id="budgetItem">
        <p><FontAwesomeIcon icon={IconUtils.getIconFromExpenseType(payment.expenseType)} /></p>
        <p className="no-wrap">{CurrencyUtils.formatCurrency(payment.amount)}</p>
        <p className="ellipsis">{payment.description}</p>
        <p className="text-right ellipsis">{DateUtils.formatDate(payment.start)}</p>
        <p className="clickable">
            <FontAwesomeIcon
                icon={faTrash}
                onClick={deletePayment}/>
        </p>
    </div>
}
