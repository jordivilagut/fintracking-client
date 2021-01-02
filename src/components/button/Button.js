import React from "react";
import "./Button.scss"

export const Button = ({action, mainText, secondaryText, visible, color, textColor}) => {
    const visibility = visible? "block" : "none";
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
