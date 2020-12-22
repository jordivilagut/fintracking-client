import React, {Component} from "react";
import {BigBannerWithButton} from "../../components/big-banner/BigBannerWithButton";
import {SecuredApi} from "../../api/SecuredApi";

export class Checkout extends Component {


    state = {
        secretMessage: ""
    };

    displayMessage = e => {
        e.preventDefault();
        const {authFailedHandler} = this.props
        SecuredApi.getSecretMessage()
            .then(
                response => this.setState({secretMessage: response.body.message}),
                error => authFailedHandler(null, "login"));
    }

    render() {
        return(
            <div>
                <BigBannerWithButton
                    action={this.displayMessage}
                    imageUrl="https://pbs.twimg.com/profile_images/1138504682865926144/Km7uuVsw_400x400.png"
                    mainText="This is the checkout."
                    secondaryText={this.state.secretMessage}
                    buttonText="See secret message"
                    buttonColor="3cc249"
                    buttonTextColor="FFFFFF"/>
            </div>
        );
    }
}
