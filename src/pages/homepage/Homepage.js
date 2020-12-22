import React, {Component} from "react";
import {Mosaic} from "../../components/mosaic/Mosaic";
import {StoreApi} from "../../api/StoreApi";

export class Homepage extends Component {

    state = {
        storeDepartments: [],
        allProducts: [],
        productSearchText: ""
    };

    /*searchBoxHandler = e => {
        this.setState({productSearchText: e.target.value})
    };*/

    componentDidMount() {
        StoreApi.getDepartments()
            .then(
                response => this.setState({storeDepartments: response.body}),
                error => this.props.history.push("error"));
    }

    render() {
        return(
            <div>
                <Mosaic tiles={this.state.storeDepartments}/>
            </div>
        );
    }
}
