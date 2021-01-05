import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    position:'relative',
    top:60,
    left:20,
    width:'40%',
    left:'50px'
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#ecb912ff',
      },
}))(LinearProgress);
const CustLinearProgress = ({percentage}) => {
  const votePer   = Number(percentage)*10;
  return (
    <>
      <BorderLinearProgress color='primary' variant='determinate' value={votePer} p={1}/> 
    </>
  )
}
export default CustLinearProgress;
