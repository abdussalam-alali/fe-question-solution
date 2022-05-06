import React from 'react';
import {Paper} from "@mui/material";

function ContentBox(props) {
    return (
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            { props.children }
        </Paper>
    );
}

export default ContentBox;