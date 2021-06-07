import React from 'react'
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import StaffItem from './staffItem'


const useStyles = makeStyles({
    root: {
      maxWidth: 150,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Staff({count, employees}) {

    const classes = useStyles();
    

    return (
        <div style={{paddingTop: '20px'}} >
                <Card className={classes.root} variant="outlined">
                <CardContent>
                    
                    <Typography variant="h5" component="h2">
                    {count}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Employees
                    </Typography>
                </CardContent>
                </Card>
                <br />
                <Divider />
                {employees.map((val, index)=>(
                    <StaffItem key={index} name={val.name} names={val.name} id={val.id} age={val.age} salary={val.salary}/>
                ))}
                
                
        </div>
    )
}

Staff.propTypes ={
    count: PropTypes.number,
    employees: PropTypes.array,
}

export default Staff
