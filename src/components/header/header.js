import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MovieIcon from '@material-ui/icons/Movie'
import { useHistory, withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold"
    },
}));
const Header = withRouter(({history})  => {
    /**
     * const history = useHistory(); 
     * we can use useHistory hook as an alternate to withRouter  get history object 
     *  */ 
    console.log(history)
    const classes = useStyles();

    const routeToHome = () => history && history.push('/home');
    console.log(classes);
    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary">
                <Toolbar>               
                    <IconButton edge="start" onClick={() => routeToHome(history)} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MovieIcon fontSize="large" />
                    </IconButton>            
                    <Typography variant="h6" className={classes.title} align="left">
                        MOVIE DB
                     </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
})
export default Header;
