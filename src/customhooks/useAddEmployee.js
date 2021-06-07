import axios from 'axios';

function AddEmployee(token, employee) {
    const url = 'http://localhost:4000/employee';

        axios.post(url,employee,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
            })
            .then((res)=>{
                return 'success'
            })
            .catch((err)=>{
                console.log(err.response)
            })

}

export default AddEmployee;
