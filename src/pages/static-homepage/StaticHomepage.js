import React, {Component} from "react";
import {BigBannerWithButton} from "../../components/big-banner/BigBannerWithButton";


export class StaticHomepage extends Component {

    getStartedHandler = e => {
        e.preventDefault()
        this.props.history.push("login")
    }

    render() {
        return(
            <div>
                <BigBannerWithButton
                    action={this.getStartedHandler}
                    imageUrl="https://pbs.twimg.com/profile_images/1138504682865926144/Km7uuVsw_400x400.png"
                    mainText="Fintracking App"
                    secondaryText="Your Pocket Finance Advisor"
                    buttonText="Get Started"
                    buttonColor="3cc249"
                    buttonTextColor="FFFFFF"/>
            </div>
        );
    }
}
