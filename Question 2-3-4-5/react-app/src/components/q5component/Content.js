import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import photo from '../../assets/chart.PNG';

const Content = () => {
    return (
        <Grid container spacing={3} justifyContent='space-between'>
            <Grid item xs={6}>
                <img src={photo} alt='chart' />
            </Grid>
            <Grid item xs={6}>
                <Typography>
                    Similarity measures between molecules
                </Typography>
                125% <ArrowDropUpIcon color='success'/>

                <span style={{color: "#009900"}}>10%</span>
            </Grid>
        </Grid>
    );
};

export default Content;
