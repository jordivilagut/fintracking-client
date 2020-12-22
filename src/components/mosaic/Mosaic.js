import React from 'react';
import {Tile} from "./Tile";
import "./Mosaic.scss"

export const Mosaic = ({tiles}) => (
    <div className="mosaic">
        {tiles.map(({id, ...tileProps})  =>
            <Tile key={id}{...tileProps}/>
        )}
    </div>
);
