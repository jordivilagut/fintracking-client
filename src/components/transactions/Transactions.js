import React from 'react';
import {Transaction} from "./Transaction";
import './Transactions.scss'

export const Transactions = ({transactions}) => (
    <div id="transactions">
        {transactions.map(t  => <Transaction key={t.id} transaction={t} />)}
    </div>
);
