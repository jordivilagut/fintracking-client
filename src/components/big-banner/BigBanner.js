import React from "react";
import "./BigBanner.scss"
import {RoundImage} from "../round-image/RoundImage";

export const BigBanner = ({mainText, secondaryText, imageUrl, color, textColor}) => (
    <div className="banner big"
         style={{
             background: {color},
             color: {textColor}
         }}>
        <RoundImage imageUrl={imageUrl}/>
        <h2>{mainText}</h2>
        <h3>{secondaryText}</h3>
    </div>
);
