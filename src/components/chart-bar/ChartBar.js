import React from "react";
import "./ChartBar.scss"

export const ChartBar = ({color, title, text, height, extraClass}) => (
    <div className="barFrame">
        <h3>{title}</h3>
        <div className={extraClass}
             style={{height: `${height}px`}}/>
        <p>{text}</p>
    </div>
)
