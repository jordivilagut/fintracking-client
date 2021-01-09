import React from "react";
import "./UserPlan.scss"
import {TransparentButton} from "../button/TransparentButton";

export const UserPlan = ({
                             title,
                             description,
                             imageUrl,
                             titleClassname,
                             textColor,
                             action,
                             buttonText,
                             buttonSecondaryText,
                             buttonColor,
                             buttonTextColor
                         }) => (
    <div
        className="userPlanWrapper light-border"
        style={{
            color: {textColor},
            backgroundImage: `url(${imageUrl})`,
        }}>
        <div className="userPlan">
            <h2 className={titleClassname}>{title}</h2>
            <h3>{description}</h3>
            <TransparentButton
                action={action}
                mainText={buttonText}
                secondaryText={buttonSecondaryText}/>
        </div>
    </div>
);
