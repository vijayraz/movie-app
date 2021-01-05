import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Route } from "react-router-dom";
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import MovieCrew from '../MovieCrew/MovieCrew';

const useStyles = makeStyles((theme) => ({
    root1: {
        width: '172px',
        padding: '9px'
        //marginTop: '30px'
    },
    media1: {
        height: 200,
    },
    castingTitle: {
        margin: '35px 35px 5px'
    },
    castingWrapper: {
        padding: '5px 75px',
        gap: '10px'
    },
    crewTitle: {
        position: 'relative',
        bottom: '35px',
        paddingLeft: '43px'
    },
    character: {
        fontSize: '15px',
        color: '#000'
    }
}));
const routeToPersonProfile = (history,personId)=>{
    console.log(personId)
    history.push(`/person/${personId}`)
}
export default function MovieCast({ movieObj}) {

    const classes = useStyles();
    const casting = movieObj.casting && movieObj.casting.cast && movieObj.casting.cast.map(cast => {
        return <Route key={cast.id} render={({ history }) => (
            <Card className={classes.root1}  onClick={() => routeToPersonProfile(history,cast.id) }>
                <CardActionArea>
                    <CardMedia
                        className={classes.media1}
                        image={`${process.env.REACT_APP_MOVIEDB_IMGURL}${cast.profile_path}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {cast.name}
                        </Typography>
                        <Typography variant="h6" component="div" className={classes.character}>
                            {cast.character}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )} />
    })
    const crewing = movieObj.casting && (<MovieCrew crewObj={movieObj.casting} />)
    return (
        <>
            <Box flexDirection="column" display="flex" >
                <Box className={classes.castingTitle}>
                    <Typography variant="h4" align='left' >
                        Movie Cast
                    </Typography>
                </Box>
                <Box flexDirection="row">
                    <Grid container>
                        <Box className={classes.castingWrapper} display='flex' p={3} flexWrap="wrap">
                            {casting}
                        </Box>
                    </Grid>
                </Box>
                <Box className={classes.castingTitle}>
                    <Typography variant="h4" align='left' >
                        Crew
                    </Typography>
                </Box>
                {crewing}
            </Box>
        </>
    )
}
