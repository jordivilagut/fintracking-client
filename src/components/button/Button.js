import React from "react";
import "./Button.scss"

export const Button = ({action, mainText, secondaryText, hidden, color, textColor}) => {
    const visibility = hidden? "none" : "block"
    return <div>
        <button
            onClick={action}
            className="action-button"
            style={{
                background: `#${color}`,
                color: `#${textColor}`,
                display: visibility
            }}>
            <p>{mainText}</p>
        </button>
    </div>
}
