import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {CurrencyUtils} from '../../utils/currencyUtils'
import {DateUtils} from '../../utils/dateUtils'

export const Transaction = ({transaction}) => (
    <div id="transaction">
        <p><FontAwesomeIcon icon={faCoffee} /></p>
        <p className="no-wrap">{CurrencyUtils.formatCurrency(transaction.amount)}</p>
        <p className="ellipsis">{transaction.description}</p>
        <p className="text-right ellipsis">{DateUtils.formatDate(transaction.date)}</p>
    </div>
);
