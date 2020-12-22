import React, {Component} from "react";
import {BigBannerWithButton} from "../../components/big-banner/BigBannerWithButton";
import {UserApi} from "../../api/UserApi";

export class UserProfile extends Component {

    handleLogout = () => {
        const {logoutHandler} = this.props
        UserApi.logout()
            .then(
                response => logoutHandler(null, "/home"),
                error => logoutHandler(null, "/home"))
    }

    render() {
        return(
            <div className="page">
                <BigBannerWithButton
                    action={this.handleLogout}
                    imageUrl="https://pbs.twimg.com/profile_images/1138504682865926144/Km7uuVsw_400x400.png"
                    mainText="Tom Nook"
                    secondaryText="tom.nook@animalcrossing.com"
                    buttonText="Log Out"
                    buttonColor="d6cac9"
                    buttonTextColor="FFFFFF"/>
            </div>
        );
    }
}
