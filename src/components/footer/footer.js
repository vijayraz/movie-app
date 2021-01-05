import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function Footer() {
    return (
        <AppBar position="static" color="transparent" style={{marginTop:'10px'}}>
            <Toolbar>
                <Typography variant="h6" >
                    MOVIE DB - &#169; 2020
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

