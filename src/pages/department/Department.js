import React, {Component} from "react";
import {Products} from "../../components/products/Products";
import "./Department.scss"
import {StoreApi} from "../../api/StoreApi";

export class Department extends Component {

    state = {
        products: []
    };

    componentDidMount() {
        StoreApi.getProducts("test")
            .then(response => response.body)
            .then(products => this.setState({products: products}));
    }

    render() {
        return(
            <div className="department">
                <Products products={this.state.products}/>
            </div>
        );
    }
}
