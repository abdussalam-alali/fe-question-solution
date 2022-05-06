import React,{useState} from 'react';
import {Button, FormControl, InputLabel, Modal, Select, Slide, Slider, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from '@mui/icons-material/Save';

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

const AddProduct = () => {
    const [open,setOpen] = useState(false);

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
                        onChange={(e)=> console.log(e.target.value)}
                        id="outlined-required"
                        label="Name"
                        defaultValue="Hello World"
                        helperText='Please enter the product name'
                    />
                    <TextField
                        required
                        color='secondary'
                        onChange={(e)=> console.log(e.target.value)}
                        id="outlined-required"
                        label="Quantity"
                        type='number'
                        defaultValue={0}
                        helperText='Please enter the type of product'
                    />
                    <TextField
                        required
                        color='secondary'
                        onChange={(e)=> console.log(e.target.value)}
                        id="outlined-required"
                        label="Unit Price"
                        type='number'
                        defaultValue="0"
                        helperText="Please enter unit price"
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        color='secondary'
                        label="Select"
                        helperText="Please select your currency"

                    >
                        <MenuItem value='Drinks'>Drinks</MenuItem>
                        <MenuItem value='Food'>Food</MenuItem>
                        <MenuItem value='Equipment'>Equipment</MenuItem>
                        <MenuItem value='other'>Other</MenuItem>
                    </TextField>
                    <Button variant='contained' color='secondary' endIcon={<SaveIcon />}>Save</Button>
                </Box>
            </Modal>
            <Button color='primary' variant='outlined' onClick={ ()=> setOpen(!open)}>Add</Button>

        </>
    );
};

export default AddProduct;
