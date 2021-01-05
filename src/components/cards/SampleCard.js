import React from 'react'
// import axios from 'axios'
import {  Switch, Route } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import LinesEllipsis from 'react-lines-ellipsis';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { FullMovieInfo } from '../Movies';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  author: {
    display: "flex"
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  viewMoreIcon: {
    flex: 1
  }
}));
const getFormatedReleaseDate = (date) => {

  const today = new Date(date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return today.toLocaleDateString("en-US", options);

}

const SampleCard = ({ movieObj }) => {
  // console.log(movieObj)
  const classes = useStyles();
  const backdropPath = process.env.REACT_APP_MOVIEDB_IMGURL + movieObj.backdrop_path
  const posterPath = process.env.REACT_APP_MOVIEDB_IMGURL + movieObj.poster_path
  const releaseDate = getFormatedReleaseDate(movieObj.release_date);
  return (
    <>
      
        <Card >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={posterPath}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movieObj.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                <LinesEllipsis
                  text={movieObj.overview}
                  maxLine='4'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                  component="p"
                />

              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Box className={classes.author}>
              <Avatar src={backdropPath} />
              {/* <Avatar>H</Avatar> */}
              <Box ml={2}>
                <Typography variant="subtitle2" component="p">
                  Rating: {Number(movieObj.vote_average) * 10}%
                    </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  {releaseDate}
                </Typography>
              </Box>
            </Box>
            <Box>
              <IconButton aria-label="delete" component={RouterLink} to={`/movie/${movieObj.id}`}>
                <MoreVertTwoToneIcon fontSize="large" className={classes.viewMoreIcon} />
              </IconButton>

            </Box>
          </CardActions>
        </Card>
        <Switch>
          <Route exact path="/test" component={FullMovieInfo} />
        </Switch>
      
    </>
  )
}

export default (SampleCard);