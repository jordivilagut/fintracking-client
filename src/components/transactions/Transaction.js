import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CurrencyUtils} from '../../utils/CurrencyUtils'
import {DateUtils} from '../../utils/DateUtils'
import {IconUtils} from "../../utils/IconUtils";

export const Transaction = ({transaction}) => (
    <div id="transaction">
        <p><FontAwesomeIcon icon={IconUtils.getIconFromExpenseType(transaction.expenseType)} /></p>
        <p className="no-wrap">{CurrencyUtils.formatCurrency(transaction.amount)}</p>
        <p className="ellipsis">{transaction.description}</p>
        <p className="text-right ellipsis">{DateUtils.formatDate(transaction.date)}</p>
    </div>
);
