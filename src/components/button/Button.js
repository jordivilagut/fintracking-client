import React from "react";
import "./Button.scss"

export const Button = ({action, mainText, secondaryText, color, textColor}) => (
    <div>
        <button
            onClick={action}
            className="action-button"
            style={{
                background: `#${color}`,
                color: `#${textColor}`
            }}>
            <p>{mainText}</p>
        </button>
    </div>
);
