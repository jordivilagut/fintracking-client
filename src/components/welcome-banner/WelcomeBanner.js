import React from "react";
import {Image} from "../image/Image";
import "./WelcomeBanner.scss"
import {TransparentButton} from "../button/TransparentButton";

export const WelcomeBanner = ({user}) => {
    const userIsLogged = user != null;
    return userIsLogged ? <div/> :
        <div className="welcomeBannerWrapper">
            <div className="welcomeBanner nightGradient">
                <div className="page">
                    <Image imageUrl=""/>
                    <div className="rightColumn">
                        <h2>Welcome to Fintracking</h2>
                        <h3>Finance made easy</h3>
                        <TransparentButton
                            action={() => console.log("hi")}
                            mainText="Get Started"/>
                    </div>
                </div>
            </div>
        </div>
}
