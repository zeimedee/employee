import {useState} from 'react'
import {Router} from '@reach/router'
import Home from './components/home'
import Dash from "./components/dash";
import {EmployeeContext}  from './context/employeeContext'

function App() {
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [data,setData] = useState(null);
  return (
    
      <EmployeeContext.Provider value={{username,setUsername,password,setPassword,data,setData}}>
      <Router>
      <Home path='/' />
      <Dash path='/dash'/>
      </Router>
      </EmployeeContext.Provider>
  );
}

export default App;
