import React from "react";
import "./PurchaseWidget.scss"


export const PurchaseWidget = ({price}) => (
    <div className="purchase">
        <p className="price">{price}</p>
        <p className="terms">*Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Add to Cart</button>
    </div>
)
