import React from 'react';
import {Divider, Grid, ListItem, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeProduct } from "../../../redux/products/products-actions";
import {connect} from "react-redux";
const Product = (props) => {

    return (
        <>
                <ListItem
                    secondaryAction={
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            title="Delete"
                            onClick={() => { props.deleteProduct(props.item.product)} }
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemText>
                        <Grid container spacing={6} justify='center'>
                            <Grid item xs={4} sm={3}>
                                { props.item.product }
                            </Grid>
                            <Grid item xs={4} sm={3}>
                                { props.item.unitPrice }
                            </Grid>
                            <Grid item xs={4} sm={3}>
                                { props.item.quantity }
                            </Grid>
                            <Grid item sm={3} display={{xs: 'none', sm: 'block'}}>
                                { props.item.type }
                            </Grid>
                        </Grid>
                    </ListItemText>
                </ListItem>
            <Divider />
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (name) => dispatch(removeProduct(name))
    }
}
export default connect(null,mapDispatchToProps) (Product);
