import { Box, Grid, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import { fetchPersonRequest, fetchExternalLinkRequest, fetchPersonMovieCreditRequest } from '../../redux/PersonType';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ImageIcon from '@material-ui/icons/Image';
import Avatar from '@material-ui/core/Avatar';

import { compose } from 'redux';

const styles = ((theme) => ({
    root: {
        marginTop: '35px',
        marginLeft: '60px'
    },
    cardWidth: {
        width: '300px',
    },
    media: {
        height: '450px',
    },
    personInfoHeading: {
        padding: '10px 0 0 0',
    },
    personInfo: {
        color: '#524e4e',
        fontWeight: 'bold',
        fontSize: '14px',
        paddingBottom: '10px'
    },
    personInfoTitle: {
        fontSize: '15px',
        fontWeight: 'bold',
    },
    biographyTitle: {
        paddingBottom: '10px',
        paddingTop: '10px',
        fontSize: '19px',
    },
    personName: {
        fontWeight: '500'
    },
    biography: {
        fontSize: '17px',
        color: '#3c3a3a',
    },
    personalInfoBox: {
        borderRight: '1px solid #efeeee'
    },
    root1: {
        width: '138px',
        padding: '0px'
        //marginTop: '30px'
    },
    media1: {
        height: 200,
    },
    knownForBox:{     
        overflow: 'auto',
        maxWidth:'1000px'
    },
    noImage:{
    width: '100%',
    height: '200px'
    },
    noImageAvatar:{        
    fontSize:'79px',
    opacity: '0.4'
    }
}));
export class Person extends Component {

    componentDidMount(props) {
        const { fetchPersonById, externalLinkById, fetchPersonMovieCreditById, match } = this.props;
        const personId = match.params.personId;
        fetchPersonById(personId);
        externalLinkById(personId);
        fetchPersonMovieCreditById(personId);
    }
    dob(birthday) {
        var dob = new Date(birthday);
        //calculate month difference from current date in time  
        var month_diff = Date.now() - dob.getTime();
        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);
        //extract year from date      
        var year = age_dt.getUTCFullYear();
        //now calculate the age of the user  
        return Math.abs(year - 1970);
    }
    extLinkNavigation(socialId) {
        const { extLinks } = this.props.extLinkData;
        if (socialId === 'facebook_id') {
            window.open(`https://www.facebook.com/${extLinks.facebook_id}`, '_blank');
        }
        if (socialId === 'instagram_id') {
            window.open(`https://www.instagram.com/${extLinks.instagram_id}`, '_blank');
        }
        if (socialId === 'twitter_id') {
            window.open(`https://www.twitter.com/${extLinks.twitter_id}`, '_blank');
        }
    }

    navigateToMovie(history,movieId){
        history.push(`/movie/${movieId}`)
    }
    render(props) {
        console.log(this.props)
        const { personData, extLinkData, movieCredits ,history ,classes } = this.props;
        const { person } = personData;
        const knownForInfo = movieCredits && movieCredits.loading ?"":(
            movieCredits.movieCredits.cast.map((movieObj)=>{
                return <Box p={1} key={movieObj.id}>
                            <Card className={classes.root1}  onClick={() => this.navigateToMovie(history,movieObj.id)}> 
                                <CardActionArea>{
                                    movieObj.poster_path == null? (
                                        <Avatar  variant="square" className={classes.noImage}>
                                        <ImageIcon  className={classes.noImageAvatar}/>
                                    </Avatar>
                                    ):(
                                        <CardMedia
                                        className={classes.media1}
                                        image={ImageIcon}
                                        image={`${process.env.REACT_APP_MOVIEDB_IMGURL}${movieObj.poster_path}`}                                        
                                        title={movieObj.title}
                                    /> 
                                    )
                                }                              
                                </CardActionArea>
                            </Card>
                            <Typography>{movieObj.title}</Typography>
                        </Box>
                }
            )
        )
        const extLinkInfo = extLinkData && extLinkData.loading ? "" : (
            Object.keys(extLinkData.extLinks).map((socialId, idx) => {
                const { extLinks } = extLinkData;
                if (socialId === 'facebook_id' && extLinks.facebook_id != null) {
                    return <Box><IconButton aria-label="facebook" onClick={() => this.extLinkNavigation(socialId)}>
                        <FacebookIcon fontSize='large' />
                    </IconButton>
                    </Box>
                }
                if (socialId === 'instagram_id' && extLinks.instagram_id != null) {
                    return <Box>
                        <IconButton aria-label="Instgram" onClick={() => this.extLinkNavigation(socialId)}>
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                    </Box>
                }
                if (socialId === 'twitter_id' && extLinks.twitter_id != null) {
                    return <Box><IconButton aria-label="Twitter" onClick={() => this.extLinkNavigation(socialId)}>
                        <TwitterIcon fontSize='large' />
                    </IconButton>
                    </Box>
                }
            }))

        const personInfo = personData && personData.loading ? (<h1>loading</h1>) :
            personData.error ? (<h1>{personData.error}</h1>) :
                (
                    <Box className={classes.root}>
                        <Box>
                            <Card className={classes.cardWidth}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={`${process.env.REACT_APP_MOVIEDB_IMGURL}${person.profile_path}`}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            </Card>
                        </Box>
                        <Box>
                            <Typography variant="h5" align="left" className={classes.personInfoHeading}>Personal Info</Typography>
                            <Box display="flex">
                                {extLinkInfo}
                            </Box>
                            <Box className={classes.personalInfoBox}>
                                <Typography variant="h6" align="left" className={classes.personInfoTitle}>Known For</Typography>
                                <Typography align="left" className={classes.personInfo}>{person.known_for_department}</Typography>
                                <Typography variant="h6" align="left" className={classes.personInfoTitle}>Gender</Typography>
                                <Typography align="left" className={classes.personInfo}>{person.gender === 1 ? 'Female' : person.gender === 2 ? 'Male' : 'Other'}</Typography>
                                <Typography variant="h6" align="left" className={classes.personInfoTitle}>Birthday</Typography>
                                <Typography align="left" className={classes.personInfo}>{person.birthday}&nbsp;({this.dob(person.birthday)} Years Old)</Typography>
                                <Typography align="left" className={classes.personInfoTitle}>Place of birth</Typography>
                                <Typography variant="h6" align="left" className={classes.personInfo}>{person.place_of_birth}</Typography>
                                <Typography align="left" className={classes.personInfoTitle}>Also Known As</Typography>
                                {
                                    person.also_known_as.map((value, index) => {
                                        return (
                                            <Typography variant="h6" key={index} align="left" className={classes.personInfo}>{value}</Typography>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>

                );

        const biography = personData && personData.loading ? '' :
            personData.error ? (<h1>{personData.error}</h1>) : (
                <Box className={classes.root}>
                    <Typography variant="h4" align="left" className={classes.personName}>{person.name}</Typography>
                    <Typography variant="h5" align="left" className={classes.biographyTitle}>Biograph</Typography>
                    <Typography variant="h6" align="left" className={classes.biography}>{person.biography}</Typography>
                    <Typography variant="h5" align="left" className={classes.biographyTitle}>Known For</Typography>
                    <Box  display="flex" className={classes.knownForBox}>
                        {knownForInfo}             
                    </Box>
                </Box>

            );
        return (
            <Grid container>
                <Grid item md={3}>
                    {personInfo}
                </Grid>
                <Grid item md={9}>
                    {biography}
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = state => {
    return {
        personData: state.personInfo,
        extLinkData: state.externalLinks,
        movieCredits: state.personMovieCredits
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPersonById: (personId) => dispatch(fetchPersonRequest(personId)),
        externalLinkById: (personId) => dispatch(fetchExternalLinkRequest(personId)),
        fetchPersonMovieCreditById: (personId) => dispatch(fetchPersonMovieCreditRequest(personId))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(Person);
