import React from "react";
import {ProductText} from "./ProductText";
import {Link} from "react-router-dom";

export const Product = ({productId, name, subtitle, imageUrl}) => (
    <div className="product">
        <Link to={`/product-detail/${productId}`}>
            <div
                className="productImg"
                style={{backgroundImage: `url(${imageUrl})`}}/>
        </Link>
        <ProductText title={name} text={subtitle} url={`/product-detail/${productId}`}/>
    </div>
);
