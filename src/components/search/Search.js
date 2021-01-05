import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonMargin: {
        marginBottom: '35px',
        height: '55px'
    },
    '& .MuiInputBase-input':{
        
        color: 'white'
    } 
}));

export default function Search() {
    const classes = useStyles();
    return (
        <div style={{ display: 'inline-flex' }}>
            <div>
                <TextField id="outlined-full-width"
                    style={{ margin: 8, width: 500 }}
                    placeholder="Search for movie,tv show,person,cast..."
                    margin="normal"
                    variant="filled"
                    className={classes.textField}
                    InputProps={{
                        className: classes.input,
                    }} />
            </div>
            <div style={{ alignSelf: 'center' }}>
                <Button variant="contained" color="primary" size="large" className={classes.buttonMargin}>
                    Search
                </Button>
            </div>
        </div>

    )
}
