import React from 'react';
import {Avatar, Card, CardContent, CardHeader, Grid, LinearProgress, Paper} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {PersonOutlineOutlined} from "@mui/icons-material";
import Content from "./Content";

const Q5C = () => {
    return (
        <Card sx={{ maxWidth: 400, background: '#eeeeee'}} >
            <CardHeader
                avatar={
                    <Avatar variant='square' style={{ background:'#fff' }}         sx={{ width: 56, height: 56 }}
                    >
                        <PersonOutlineOutlined color='primary' fontSize='large' />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    </IconButton>
                }
                title={
                    <Typography>
                        Adverse effect and contraindication
                    </Typography>
                }
                subheader={
                    <>
                        <br />
                        <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <Typography style={{ marginTop:'-10px' }} variant='h6'>
                                    546
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <LinearProgress variant="determinate" value={92} style={{borderRadius: '5px',height: '5px'}} />
                            </Grid>
                            <Grid item xs={4}>
                                <LinearProgress variant="determinate" color='warning' value={25} style={{borderRadius: '5px',height: '5px'}} />
                            </Grid>
                        </Grid>
                    </>
                }
            />
            <CardContent>
                <Paper style={{padding: '15px'}}>
                    <Content />
                </Paper>
            </CardContent>
        </Card>
    );
};

export default Q5C;
