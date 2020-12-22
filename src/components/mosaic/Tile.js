import React from 'react';
import {TileText} from "./TileText";
import {Link} from "react-router-dom";

export const Tile = ({title, text, imageUrl, size}) => (
    <Link to="/store"
          className={`${size} tile`}
          style={{backgroundImage: `url(${imageUrl})`}}>

        <TileText
            title={title.toUpperCase()}
            text={text}/>
    </Link>
);
