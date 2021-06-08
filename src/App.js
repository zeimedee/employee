import {useState} from 'react'
import {Router} from '@reach/router'
import Home from './components/home'
import Dash from "./components/dash";
import {EmployeeContext}  from './context/employeeContext'

function App() {
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [data,setData] = useState(null);

const [name,setName] = useState('');
const [age,setAge] = useState('');
const [salary,setSalary] = useState('');
const [snack,setSnack] = useState(false);

let context = {
  username,setUsername,
  password,setPassword,
  data,setData, 
  name,setName,
  age,setAge,
  salary,setSalary,
  snack,setSnack
}

  return (
    
      <EmployeeContext.Provider value={context}>
      <Router>
      <Home path='/' />
      <Dash path='/dash'/>
      </Router>
      </EmployeeContext.Provider>
  );
}

export default App;
