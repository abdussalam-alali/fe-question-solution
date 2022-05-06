import React,{useState} from 'react';
import {Button, Modal, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from '@mui/icons-material/Save';
import { connect } from 'react-redux';
import { addToProducts } from "../../../redux/products/products-actions";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: '#fff',
    boxShadow: 24,
    padding: '20px',
    borderRadius: '5px'
};

const AddProduct = ( {addProduct}) => {
    const [open,setOpen] = useState(false);
    const [formData,setFormData] = useState({
        product: '',
        quantity: 0,
        unitPrice: 0,
        type: 'Drinks',
    });

    const handleSave = () => {
        addProduct(formData);
        setOpen(false);
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData);
    }
    return (
        <>
            <Modal
                open={open}
                onClose={ () => setOpen(false)}
            >
                <Box
                    component="form"
                    style={style}
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        required
                        color='secondary'
                        name='product'
                        onChange={(e)=> handleChange(e)}
                        id="outlined-required"
                        value={formData.product}
                        label="Name"
                        defaultValue="Hello World"
                        helperText='Please enter the product name'
                    />
                    <TextField
                        required
                        color='secondary'
                        name='quantity'
                        value={formData.quantity}
                        id="outlined-required"
                        label="Quantity"
                        onChange={(e)=> handleChange(e)}
                        type='number'
                        defaultValue={0}
                        helperText='Please enter the type of product'
                    />
                    <TextField
                        required
                        color='secondary'
                        name='unitPrice'
                        value={formData.unitPrice}
                        onChange={(e)=> handleChange(e)}
                        id="outlined-required"
                        label="Unit Price"
                        type='number'
                        defaultValue="0"
                        helperText="Please enter unit price"
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        name='type'
                        color='secondary'
                        value={formData.type}
                        onChange={(e)=> handleChange(e)}
                        label="Select"
                        helperText="Please select your currency"

                    >
                        <MenuItem value='Drinks'>Drinks</MenuItem>
                        <MenuItem value='Food'>Food</MenuItem>
                        <MenuItem value='Equipment'>Equipment</MenuItem>
                        <MenuItem value='other'>Other</MenuItem>
                    </TextField>
                    <Button onClick={handleSave} variant='contained' color='secondary' endIcon={<SaveIcon />}>Save</Button>
                </Box>
            </Modal>
            <Button color='primary' variant='outlined' onClick={ ()=> setOpen(!open)}>Add</Button>

        </>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (item) => dispatch(addToProducts(item))
    }
}
export default connect(null,mapDispatchToProps)(AddProduct);
