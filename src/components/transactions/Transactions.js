import React from 'react';
import {Transaction} from "./Transaction";
import './Transactions.scss'

export const Transactions = ({transactions, refreshTransactions, openEditModal, openDeleteModal}) => (
    <div id="transactions">
        {transactions.map(t  => <Transaction
            key={t.id}
            transaction={t}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
            refreshTransactions={refreshTransactions}/>)}
    </div>
);
