import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconUtils} from "../../utils/IconUtils";
import {CurrencyUtils} from "../../utils/CurrencyUtils";
import {DateUtils} from "../../utils/DateUtils";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {BudgetApi} from "../../api/BudgetApi";

export const Payment = ({payment, refreshPayments}) => {

    const deletePayment = () => {
        BudgetApi.deletePayment(payment.id).then(
            () => refreshPayments(),  //success
            () => console.log("error"))  //error
    }

    return  <div id="payment">
        <p><FontAwesomeIcon icon={IconUtils.getIconFromExpenseType(payment.expenseType)} /></p>
        <p className="no-wrap">{CurrencyUtils.formatCurrency(payment.amount)}</p>
        <p className="ellipsis">{payment.description}</p>
        <p className="text-right ellipsis">{DateUtils.formatDate(payment.date)}</p>
        <p className="clickable">
            <FontAwesomeIcon
                icon={faTrash}
                onClick={deletePayment}/>
        </p>
    </div>
}
