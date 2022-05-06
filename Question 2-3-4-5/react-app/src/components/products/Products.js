import React, {useState} from 'react';
import Product from './product/Product';

import { connect } from 'react-redux';
import {List, Dialog, Button, Slide, DialogContent} from "@mui/material";
import Header from "./Header";
import AddProduct from "./product/AddProduct";


const Products = ({products}) => {
    return (
        <>
            <Header/>
            <List color='primary'>
                { products.map(item=> <Product item={item} key={item.product}/>) }
            </List>
            <AddProduct />
        </>
    );
}
const mapStateToProps = state => {
    return {
        products: state.products.items
    }
}
export default connect(mapStateToProps)(Products);