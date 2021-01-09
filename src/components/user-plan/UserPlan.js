import {Button} from "../button/Button";
import React from "react";
import "./UserPlan.scss"

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
            <Button
                action={action}
                mainText={buttonText}
                secondaryText={buttonSecondaryText}
                color={buttonColor}
                textColor={buttonTextColor}/>
        </div>
    </div>
);
