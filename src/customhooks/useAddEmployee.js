import {useContext} from 'react'
import axios from 'axios';
import {EmployeeContext} from '../context/employeeContext'
function AddEmployee(token, employee) {
    const {setSnack} = useContext(EmployeeContext);

    const url = 'http://localhost:4000/employee';

        axios.post(url,employee,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
            })
            .then((res)=>{
                setSnack(true)
            })
            .catch((err)=>{
                // console.log(err.response)
                setSnack(false)
            })

}

export default AddEmployee;
