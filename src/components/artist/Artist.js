import React from "react";
import {RoundImage} from "../round-image/RoundImage";
import "./Artist.scss"

export const Artist = ({name, description, imageUrl}) => (
    <div className="artist">
        <RoundImage imageUrl={imageUrl}/>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
)
