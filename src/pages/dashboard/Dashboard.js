import React, {Component} from "react";
import {BigBanner} from "../../components/big-banner/BigBanner";

export class Dashboard extends Component {
    
    render() {
        return(
            <div>
                <BigBanner
                    imageUrl="https://pbs.twimg.com/profile_images/1138504682865926144/Km7uuVsw_400x400.png"
                    mainText="Yout Dashboard"
                    secondaryText="Your transactions appear here."/>
            </div>
        );
    }
}
