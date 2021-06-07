import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Staff from "./staff"
import AddEmployeeForm from './addEmployeeForm'
import {EmployeeContext} from '../context/employeeContext'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

function Dashboard() {
    const [view,setView]  = useState('employees');
    const {data} = useContext(EmployeeContext) ;
    const classes = useStyles();
    const switchView=(view)=>{
        switch(view){
            case "employees":
                return <Staff count={data.length} employees={data}  />;
            case "Add":
                return <AddEmployeeForm />;
            case "Update":
                return "update employees";
            case "Delete":
                return "delete employee"
            default:
                return "Loading"
        }
    }
    return (
        <div className={classes.root}>
        <Grid container spacing={2}>

            <Grid item xs>
            <ButtonGroup
                style={{paddingTop: '20px'}} 
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
            >
                <Button onClick={()=>{setView("employees")}}>Employees</Button>
                <Button onClick={()=>{setView("Add")}}>Add new employee</Button>
                <Button onClick={()=>{setView("Update")}}>Update employee</Button>
                <Button onClick={()=>{setView("Delete")}}>Remove employee</Button>
            </ButtonGroup>
            </Grid>
            <Grid item xs={9}>
                {switchView(view)}
            </Grid>

        </Grid>
            
        </div>
    )
}

export default Dashboard
