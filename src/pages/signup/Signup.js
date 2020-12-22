import React, {Component} from "react";
import "../../styles/UserForm.scss"
import {FormButton} from "../../components/form/form-button/FormButton";
import {EmailInput} from "../../components/form/form-input/EmailInput";
import {PasswordInput} from "../../components/form/form-input/PasswordInput";
import {NameInput} from "../../components/form/form-input/NameInput";
import {Link} from "react-router-dom";
import {UserApi} from "../../api/UserApi";

export class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        const {email, password} = this.state
        const {authHandler, authFailedHandler} = this.props
        UserApi.signup(email, password)
            .then(
                response => authHandler(response.body),
                error => authFailedHandler(error.message));
    }

    inputChangeHandler = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="userForm">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <NameInput onChangeHandler={this.inputChangeHandler} value={this.state.name}/>
                    <EmailInput onChangeHandler={this.inputChangeHandler} value={this.state.email}/>
                    <PasswordInput onChangeHandler={this.inputChangeHandler} value={this.state.password}/>
                    <FormButton text="Create Account"/>
                </form>
                <Link to="/login"><h3>I already have an account</h3></Link>
            </div>
        );
    }
}
