import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    crewTitle: {
        position: 'relative',
        bottom: '35px',
        paddingLeft: '43px'
    }
    ,
    castingWrapper: {
        padding: '5px 75px',
        gap: '10px'
    },
}));



export default function MovieCrew({ crewObj }) {
    const classes = useStyles();
    const colorList = ["#bb0a0a", "#04b33f", "#3874ad", "#783a8e", "#88ad0b", "#ecb912", "#425458", "#f10a40", "#98f10a", "#080c00", "#920b0ba8"]
    const crew = crewObj && crewObj.crew && crewObj.crew.map((crew, index) => {
        return <Grid key={index + crew.id} xs={12} sm={3}>
            <Avatar style={{ background: colorList[Math.floor(Math.random() * colorList.length)] }}>{crew.name.charAt(0)}</Avatar>
            <Typography variant="h6" className={classes.crewTitle}>{crew.name} - {crew.known_for_department}</Typography>
        </Grid>
    })
    return (
        <>
            <Box flexDirection="row">

                <Box className={classes.castingWrapper} display='flex' p={3} flexWrap="wrap">
                    {crew}
                </Box>
            </Box>

        </>
    )
}
