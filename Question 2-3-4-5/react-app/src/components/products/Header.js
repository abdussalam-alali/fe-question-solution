import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const Header = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={4} sm={3}>
                    <Typography color='primary' variant='h6'>
                        Product
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={3}>
                    <Typography color='primary' variant='h6'>
                        Quantity
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={3}>
                    <Typography color='primary' variant='h6'>
                        Unit Price
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={3} display={{xs: 'none', sm: 'block'}}>
                    <Typography color='primary' variant='h6'>
                        Type
                    </Typography>
                </Grid>

            </Grid>
        </>
    );
};

export default Header;
