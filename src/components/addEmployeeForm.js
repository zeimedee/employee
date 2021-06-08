import React,{useContext} from 'react';
import AddEmployee from '../customhooks/useAddEmployee'
import Cookies from 'js-cookie'
import {EmployeeContext} from '../context/employeeContext'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snack from './snack'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


  let token = Cookies.get('token');
function AddEmployeeForm() {

    const classes = useStyles();

    const {name,setName,age,setAge,salary,setSalary,snack,setSnack} = useContext(EmployeeContext);

    const handleSubmit =(e)=>{
      e.preventDefault();

      const employee = {
          name: name,
          age: parseInt(age),
          salary: parseInt(salary)
      };

     AddEmployee(token,employee);
     setName('');
     setAge('');
     setSalary('');
  }
  const handleSnackClose =(e)=>{
      e.preventDefault();
      setSnack(!snack);
  }

    return (
        <div>
            <form 
            style={{paddingTop: '20px'}} 
            className={classes.root} 
            noValidate 
            autoComplete="off"
            onSubmit={handleSubmit}
            >
                    <TextField
                        autoComplete='true'
                        required
                        label="Name"
                        variant="outlined"
                        color="primary"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    <TextField
                        autoComplete='true'
                        required
                        label="Age"
                        // type="number"
                        variant="outlined"
                        value={age}
                        onChange={(e)=>{setAge(e.target.value)}}
                        />
                        <TextField
                        autoComplete='true'
                        required
                        label="Salary"
                        // type="number"
                        variant="outlined"
                        value={salary}
                        onChange={(e)=>{setSalary(e.target.value)}}
                        />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                    >Submit</Button>
            </form>
            <Snack open={snack} handleClose={handleSnackClose} severity={snack ? "success" :"error"}/>
        </div>
    )
}

export default AddEmployeeForm
