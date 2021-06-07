import React,{useContext} from 'react';
import{navigate} from '@reach/router'
import {EmployeeContext} from '../context/employeeContext'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  

function LoginForm() {
    const classes = useStyles();
    const {username,setUsername,password,setPassword} = useContext(EmployeeContext);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const url ='http://localhost:4000/login'
        const user ={
            user: username,
            password: password
        }
        axios.post(url,user,{withCredentials:true})
             .then((res)=>{
                if(res.data){
                    navigate('/dash');
                    setUsername('');
                    setPassword('')
                }
             })
             .catch((err)=>{
                alert('wrong credentials')
             })
  
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
                        label="Username"
                        variant="outlined"
                        color="primary"
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                    />
                    <TextField
                        autoComplete='true'
                        required
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                    >Login</Button>
            </form>
            
        </div>
    )
}

export default LoginForm
