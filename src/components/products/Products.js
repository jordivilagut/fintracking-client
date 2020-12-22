import React from 'react';
import {Product} from "./Product";
import "./Products.scss"

export const Products = ({products}) => (
    <div className="productsGrid">
        {products.map(({id, ...productProps})  =>
            <Product key={id} productId={id} {...productProps}/>
        )}
    </div>
);
