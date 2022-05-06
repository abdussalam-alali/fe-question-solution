import React from 'react';
import Product from './product/Product';

import {connect} from 'react-redux';
import {Collapse, List} from "@mui/material";
import Header from "./Header";
import AddProduct from "./product/AddProduct";
import Typography from "@mui/material/Typography";
import { TransitionGroup } from 'react-transition-group';

const Products = ({products}) => {
    return (
        <>
            <Header/>
                <List color='primary'>
                    <TransitionGroup>
                        { products.map(item=>
                            <Collapse>
                                <Product item={item} key={item.product}/>
                            </Collapse>
                        ) }
                    </TransitionGroup>

                </List>
            <Typography>
            Total is : { products.reduce((sum,item)=> sum+item.quantity*item.unitPrice ,0) }
            </Typography>
            <AddProduct />
        </>
    );
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(Products);