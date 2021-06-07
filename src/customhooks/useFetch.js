import { useEffect,useContext } from 'react';
import  { EmployeeContext }from '../context/employeeContext'
import axios from 'axios';

function useFetch(token) {
   const { setData } = useContext(EmployeeContext)
    const url ='http://localhost:4000/employees';

    const fetch =()=>{
        axios.get(url,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
            })
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    useEffect(() => {
      fetch();
    },[])

    return ;
}

export default useFetch
