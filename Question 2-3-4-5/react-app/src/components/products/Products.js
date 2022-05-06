import React from 'react';
import Product from './product/Product';

import { connect } from 'react-redux';
import { List } from "@mui/material";
import Header from "./Header";
const Products = ({products}) => {
    return (
        <>
            <Header/>
            <List color='primary'>
                { products.map(item=> <Product item={item} key={item.product}/>) }
            </List>
        </>
    );
}
const mapStateToProps = state => {
    return {
        products: state.products.items
    }
}
export default connect(mapStateToProps)(Products);