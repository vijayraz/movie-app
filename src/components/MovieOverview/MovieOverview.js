import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import CategoryIcon from '@material-ui/icons/Category';
import CustLinearProgress from '../BorderLinebar/CustLinearProgress'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    flexContainer: {
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "center",
        position: "relative",
        alignItems: "center",
        top: '30px',
    },
    root: {
        minWidth: 275,
        marginTop: '30px'
    },
    media: {
        height: 500,
    },
    root1: {
        width: '172px',
        padding: '9px'
        //marginTop: '30px'
    },
    media1: {
        height: 200,
    },
    overlay: {
        background: '#16090ae8',
        // backgroundImage: 'linear-gradient(to right, rgb(10 6 0) 150px, rgb(119 113 106 / 84%) 100%)',
        width: '100%',
        height: '100%'
    },
    backgroundBanner: {
        background: '#16090a',
        height: 560
    },
    movieInfo: {
        zIndex: 2
    },
    movieTitle: {
        color: '#fff',
        position: 'relative',
        paddingLeft: '50px',
        top: '70px'
    },
    overview: {
        color: '#fff',
        position: 'relative',
        paddingLeft: '50px',
        top: '60px'
    },
    overviewInfo: {
        color: '#fff',
        position: 'relative',
        paddingLeft: '50px',
        fontSize: 'initial',
        top: '45px'
    },
    genreList: {
        display: 'inline',
        paddingLeft: '2px',
    },
    tagLine: {
        color: '#ecb912',
        fontSize: 'small',
        fontWeight: 'bold',
        top: '52px',
        paddingLeft: '50px',
        position: 'relative'
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
    }
}));


export default function MovieOverview({ movieObj }) {
    console.log(movieObj)
    const classes = useStyles();
    const posterPath = process.env.REACT_APP_MOVIEDB_IMGURL + movieObj.poster_path
    const backdropPath = process.env.REACT_APP_MOVIEDB_IMGURL + movieObj.backdrop_path
    return (
        <Box flexDirection="row" display="flex" className={classes.backgroundBanner}>
            <Grid container>
                <Grid sm={1} item></Grid>
                <Grid sm={3} item>
                    {/* <img src={process.env.REACT_APP_MOVIEDB_IMGURL + 'kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg'} /> */}
                    <Box order={1}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={posterPath}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
                <Grid sm={8} item>
                    <Box order={2} >
                        <div className={classes.flexContainer} style={{ backgroundImage: `url(${backdropPath})` }}>

                            <div className={classes.overlay}>

                                <Box className={classes.movieInfo}>
                                    <Typography variant="h4" align='left' className={classes.movieTitle}>
                                        {movieObj.title}
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row">
                                    <Box p={1}>
                                        <Typography variant="h6" align='left' className={classes.movieTitle}>
                                            <CalendarTodayRoundedIcon fontSize='small' /> {movieObj.release_date}
                                        </Typography>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" align='left' className={classes.movieTitle}>
                                            <CategoryIcon fontSize='small' />   {movieObj.genres && movieObj.genres.map((g, idx) => {
                                                return <li key={g.id} className={classes.genreList}>{g.name}
                                                    {movieObj.genres.length === Number(idx) + 1 ? '' : ','}
                                                </li>
                                            })}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="column">
                                    <Box p={1}>
                                        <CustLinearProgress percentage={movieObj.vote_average} p={1} />
                                    </Box>
                                </Box>
                                <Box flexDirection="column" display="flex" >
                                    <Box p={1}>
                                        <Typography variant="h6" align='left' className={classes.tagLine}>
                                            {movieObj.tagline}
                                        </Typography>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" align='left' className={classes.overview}>
                                            Overview
                                        </Typography>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" align='left' className={classes.overviewInfo}>
                                            {movieObj.overview}
                                        </Typography>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" align='left' className={classes.overviewInfo}>
                                            <PlayCircleFilledWhiteIcon fontSize='small' />Play time:
                                            {Math.floor(Number(movieObj.runtime) / 60)}h{Math.floor(Number(movieObj.runtime) % 60)}m
                                        </Typography>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    )
}
