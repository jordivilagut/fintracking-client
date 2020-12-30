import React from 'react';
import {Transaction} from "./Transaction";
import './Transactions.scss'

export const Transactions = ({transactions, refreshTransactions}) => (
    <div id="transactions">
        {transactions.map(t  => <Transaction
            key={t.id} transaction={t}
            refreshTransactions={refreshTransactions}/>)}
    </div>
);
