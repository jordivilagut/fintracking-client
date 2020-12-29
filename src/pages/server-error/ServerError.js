import React, {Component} from "react";
import {BigBanner} from "../../components/big-banner/BigBanner";

export class ServerError extends Component {

    render() {
        return(
            <div>
                <BigBanner
                    imageUrl="https://previews.123rf.com/images/pyotr/pyotr1702/pyotr170200117/71184249-explosion-in-the-laboratory-funny-crazy-scientist-boy-working-in-a-laboratory.jpg"
                    mainText="Oops! Something went wrong"
                    secondaryText="We're working hard to provide you with the best experience possible, please catch us up on Twitter for information and status updates."/>
            </div>
        );
    }
}
