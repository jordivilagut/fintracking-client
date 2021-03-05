import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CurrencyUtils} from '../../utils/CurrencyUtils'
import {DateUtils} from '../../utils/DateUtils'
import {IconUtils} from "../../utils/IconUtils";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

export const Transaction = ({transaction, openEditModal, openDeleteModal}) => {

        return <div className="transaction">
                <p><FontAwesomeIcon icon={IconUtils.getIconFromExpenseType(transaction.expenseType)} /></p>
                <p className="no-wrap">{CurrencyUtils.formatCurrency(transaction.amount)}</p>
                <p className="ellipsis">{transaction.description}</p>
                <p className="ellipsis">{DateUtils.formatDate(transaction.date)}</p>
                <div className="together">
                        <p className="clickable">
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    onClick={() => openEditModal(transaction.id)}/>
                        </p>
                        <p className="clickable">
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => openDeleteModal(transaction.id)}/>
                        </p>
                </div>
        </div>
}

