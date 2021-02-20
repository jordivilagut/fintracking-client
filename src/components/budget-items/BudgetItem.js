import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconUtils} from "../../utils/IconUtils";
import {CurrencyUtils} from "../../utils/CurrencyUtils";
import {DateUtils} from "../../utils/DateUtils";
import {faDiceOne, faEdit, faInfinity, faTrash} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const BudgetItem = ({item, refreshBudget, openEditModal, openDeleteModal}) => {

    const recurrenceBlock = item.paymentType === "SINGLE" ?
        <div className="together">
            <p><FontAwesomeIcon icon={faDiceOne}/></p>
            <p className="ellipsis">{DateUtils.dayMonthFormat(item.start)}</p>
        </div> :
        <div className="together">
            <p><FontAwesomeIcon icon={faInfinity}/></p>
            <p className="ellipsis">{item.recurrence}</p>
        </div>

    return <div className="budgetItem">
        <p><FontAwesomeIcon icon={IconUtils.getIconFromExpenseType(item.expenseType)} /></p>
        <p className="no-wrap">{CurrencyUtils.formatCurrency(item.amount)}</p>
        <p className="ellipsis">{item.description}</p>
        {recurrenceBlock}
        <div className="together">
            <p className="clickable">
                <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => openEditModal(item.id)}/>
            </p>
            <p className="clickable">
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => openDeleteModal(item.id)}/>
            </p>
        </div>
    </div>
}
