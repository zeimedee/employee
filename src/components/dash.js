import React,{useContext} from 'react';
import {EmployeeContext} from '../context/employeeContext'
import {Redirect} from '@reach/router'
import Navbar from './navbar'
import Cookies from 'js-cookie'
import Dashboard from './dashboard'
import useFetch from '../customhooks/useFetch'


let token = Cookies.get('token');

function Dash() { 
    useFetch(token)
    const {data} = useContext(EmployeeContext)
    if(!token){
       return (
         <Redirect 
             noThrow
             from='/dash'
             to='/'
         />
           )
    }
    
        return (
            <div>
            <Navbar/>
                {data ==  null ? 'Loading' : <Dashboard />}
            
            </div>
        )   

    
}

export default Dash
