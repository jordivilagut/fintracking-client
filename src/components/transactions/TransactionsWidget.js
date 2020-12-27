import React, {Component} from "react";
import {Transactions} from "./Transactions";
import {TransactionsApi} from "../../api/TransactionsApi";
import {AddTransactionModal} from "../add-transaction-modal/AddTransactionModal";
import {SearchAndAction} from "../search-and-action/SearchAndAction";

export class TransactionsWidget extends Component {

    state = {
        transactions: [],
        searchText: "",
        showModal: false
    };

    componentDidMount() {
        this.refreshTransactions();
    }

    refreshTransactions = () => TransactionsApi.getTransactions().then(response => this.setState({transactions: response.body}));

    toggleModal = () => {
        const isDisplayed = this.state.showModal;
        this.setState({showModal: !isDisplayed});
    }

    searchBoxHandler = e => this.setState({searchText: e.target.value});

    transactionsFilter = t => t.description.toLowerCase().includes(this.state.searchText.toLowerCase());

    render() {
        const {transactions} = this.state;
        const filteredTransactions = transactions.filter(this.transactionsFilter);

        return(
            <div id="transactionsWidget">
                <SearchAndAction
                    searchPlaceholder="Search..."
                    searchBoxHandler={this.searchBoxHandler}
                    buttonText="Add Transaction"
                    buttonAction={this.toggleModal}/>
                <Transactions transactions={filteredTransactions}/>
                <AddTransactionModal showModal={this.state.showModal} toggleModal={this.toggleModal} refreshTransactions={this.refreshTransactions}/>
            </div>
        );
    }
}
