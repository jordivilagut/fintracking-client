import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";
import './AddTransactionModal.scss';
import {GeneralApi} from "../../api/GeneralApi";
import {CustomDropdown} from "../custom-dropdown/CustomDropdown";
import {AmountInput} from "../amount-input/AmountInput";
import {CustomInput} from "../custom-input/CustomInput";
import {EnumUtils} from "../../utils/enumUtils";
import {TransactionForm} from "../../model/TransactionForm";
import {TransactionsApi} from "../../api/TransactionsApi";

export class AddTransactionModal extends Component {

    state = {
        isValidForm: true,
        operations: [],
        expenseTypes: [],
        selectedOperation: null,
        selectedExpenseType: null,
        amount: 0,
        description: ""
    }

    handleSubmit = () => {
        this.props.toggleModal()
        const form = new TransactionForm(
            this.state.amount,
            this.state.description,
            EnumUtils.valueToEnumValue(this.state.selectedExpenseType))
        TransactionsApi.addTransaction(form).then(response => this.props.refreshTransactions())
    }

    inputChangeHandler = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    operationChangeHandler = operation => this.setState({selectedOperation: operation})
    expenseTypeChangeHandler = expenseType => this.setState({selectedExpenseType: expenseType})

    componentDidMount() {
        GeneralApi.getOperationTypes().then(response => {
            const operations = EnumUtils.enumListToList(response.body)
            this.setState({
                operations: operations,
                selectedOperation: operations[0]
            })
        })
        GeneralApi.getExpenseTypes().then(response => {
            const expenseTypes = EnumUtils.enumListToList(response.body)
            this.setState({
                expenseTypes: expenseTypes,
                selectedExpenseType: expenseTypes[0]
            })
        })
    }

    render() {

        const validForm = this.state.isValidForm;

        return (
            <Modal show={this.props.showModal} centered>
                <Modal.Header>
                    <Modal.Title>New Transaction</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Alert
                        className={validForm ? "d-none" : "d-block"}
                        variant={validForm ? "success" : "danger"}>
                        <p>This is an alert message.</p>
                    </Alert>
                    <div className="cashierRow">
                        <CustomDropdown
                            values={this.state.operations}
                            selected={this.state.selectedOperation}
                            handler={this.operationChangeHandler}/>
                        <AmountInput
                            value={this.state.amount}
                            handler={this.inputChangeHandler}/>
                    </div>
                    <div className="cashierRow">
                        <CustomInput
                            placeholder="Description: e.g. &quot;Grocery Shopping&quot;"
                            name="description"
                            value={this.state.description}
                            handler={this.inputChangeHandler}/>
                        <CustomDropdown
                            values={this.state.expenseTypes}
                            selected={this.state.selectedExpenseType}
                            handler={this.expenseTypeChangeHandler}/>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={this.props.toggleModal}>
                        Close
                    </Button>
                    <Button
                        id="submitButton"
                        variant="primary"
                        onClick={this.handleSubmit}>
                        Add Transaction
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };
}
