import React, {Component} from "react";
import {ProductBigImage} from "../../components/products/ProductBigImage";
import {ProductBigDescription} from "../../components/products/ProductBigDescription";
import {PurchaseWidget} from "../../components/purchase-widget/PurchaseWidget";
import {Artist} from "../../components/artist/Artist";
import "./ProductDetail.scss"
import {ProductApi} from "../../api/ProductApi";
export class ProductDetail extends Component {

    state = {
        product: {}
    };

    componentDidMount() {
        ProductApi.get(this.props.match.params.productId)
            .then(response => response.body)
            .then(product => this.setState({product: product}));
    }

    render() {
        const {product} = this.state;
        return(
            <div className="productDetailPage">
                <div className="productDetailMain">
                    <ProductBigImage imageUrl={product.imageUrl}/>
                    <ProductBigDescription title={product.title} description={product.description}/>
                </div>
                <div className="productDetailSidebar">
                    <PurchaseWidget price={product.price}/>
                    <Artist name={product.artistName} description={product.artistDescription} imageUrl={product.artistImageUrl}/>
                </div>
            </div>
        );
    }
}
