import React from "react";
import {TransactionsBoard} from "../../components/transactions/TransactionsBoard";
import {FinancialSnapshot} from "../../components/financial-snapshot/FinancialSnapshot";

export const Dashboard = () => {
    return <div>
        <FinancialSnapshot/>
        <TransactionsBoard/>
    </div>
}
