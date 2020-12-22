import React from "react";
import {Image} from "../image/Image";
import "./BigBanner.scss"

export const BigBanner = ({mainText, secondaryText, imageUrl, color, textColor}) => (
    <div className="mainPageElement banner big"
         style={{
             background: `#${color}`,
             color: `#${textColor}`
         }}>
        <Image imageUrl={imageUrl}/>
        <h2>{mainText}</h2>
        <h3>{secondaryText}</h3>
    </div>
);
