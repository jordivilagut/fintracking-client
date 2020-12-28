import React from "react";
import "./ChartBar.scss"

export const ChartBar = ({color, title, text, height}) => (
    <div className="barFrame">
        <h3>{title}</h3>
        <div className="green bar"
             style={{height: `${height}px`}}/>
        <p>{text}</p>
    </div>
)
