import React, {Component} from "react";
import "../../styles/UserForm.scss"
import {FormButton} from "../../components/form/form-button/FormButton";
import {EmailInput} from "../../components/form/form-input/EmailInput";
import {PasswordInput} from "../../components/form/form-input/PasswordInput";
import {Link} from "react-router-dom";
import {UserApi} from "../../api/UserApi";

export class Login extends Component {

    state = {
        email: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        const {email, password} = this.state
        const {authHandler, authFailedHandler} = this.props
        UserApi.login(email, password)
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
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <EmailInput onChangeHandler={this.inputChangeHandler} value={this.state.email}/>
                    <PasswordInput onChangeHandler={this.inputChangeHandler} value={this.state.password}/>
                    <FormButton text="Log In"/>
                </form>
                <Link to="/signup"><h3 className="link">I don't have an account</h3></Link>
            </div>
        );
    }
}
