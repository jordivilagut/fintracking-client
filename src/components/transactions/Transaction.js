import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CurrencyUtils} from '../../utils/CurrencyUtils'
import {DateUtils} from '../../utils/DateUtils'
import {IconUtils} from "../../utils/IconUtils";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {TransactionsApi} from "../../api/TransactionsApi";

export const Transaction = ({transaction, refreshTransactions}) => {

        const deleteTransaction = () => {
                TransactionsApi.deleteTransactions(transaction.id).then(
                    response => refreshTransactions(),  //success
                    error => console.log("error"))      //error
        }

        return <div className="transaction">
                <p><FontAwesomeIcon icon={IconUtils.getIconFromExpenseType(transaction.expenseType)} /></p>
                <p className="no-wrap">{CurrencyUtils.formatCurrency(transaction.amount)}</p>
                <p className="ellipsis">{transaction.description}</p>
                <p className="ellipsis">{DateUtils.formatDate(transaction.date)}</p>
                <p className="clickable text-right">
                        <FontAwesomeIcon
                            icon={faTrash}
                            onClick={deleteTransaction}/>
                </p>
        </div>
}

