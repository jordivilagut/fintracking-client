import React from "react";
import "./Button.scss"

export const TransparentButton = ({action, mainText, secondaryText, hidden}) => {
    const visibility = hidden? "none" : "block"
    return <div className="buttonWrapper">
        <button
            onClick={action}
            className="transparentActionButton"
            style={{
                display: visibility
            }}>
            <p>{mainText}</p>
        </button>
    </div>
}
