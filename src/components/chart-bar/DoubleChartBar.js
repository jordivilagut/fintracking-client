import React from "react";

export const InvertedChartBar = ({color, title, text, height, extraClass}) => (
    <div className="barFrame inverted">
        <div className={extraClass}
             style={{height: `${height}px`}}/>
        <p>{text}</p>
    </div>
)
