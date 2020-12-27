import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {formatCurrency} from '../../utils/currencyUtils'
import {formatDate} from '../../utils/dateUtils'

export const Transaction = ({transaction}) => (
    <div id="transaction">
        <p><FontAwesomeIcon icon={faCoffee} /></p>
        <p className="no-wrap">{formatCurrency(transaction.amount)}</p>
        <p className="ellipsis">{transaction.description}</p>
        <p className="text-right ellipsis">{formatDate(transaction.date)}</p>
    </div>
);
