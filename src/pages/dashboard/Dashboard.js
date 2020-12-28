import React, {Component} from "react";
import {TransactionsWidget} from "../../components/transactions/TransactionsWidget";
import {FinancialSnapshot} from "../../components/financial-snapshot/FinancialSnapshot";

export class Dashboard extends Component {

    render() {
        return(
            <div>
                <FinancialSnapshot/>
                <TransactionsWidget/>
            </div>
        );
    }
}
