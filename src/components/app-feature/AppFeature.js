import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const AppFeature = ({title, description, icon}) => (

    <div className="appFeature">
        <h3 className="icon">
            <FontAwesomeIcon icon={icon}/>
        </h3>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
);
