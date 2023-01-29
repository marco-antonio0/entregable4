import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForm from './componentes/UsersForm'
import UsersList from './componentes/UsersList'
import axios from 'axios'

function App() {

  const [usersList, setUsersList] = useState([]);
  const [userSelect, setUserSelect] = useState(null);

  useEffect(() => {
    axios.get("https://users-crud.academlo.tech/users/")
      .then(res => setUsersList(res.data));
  }, [])

  const getUsers = () => {
    axios.get("https://users-crud.academlo.tech/users/")
      .then(res => setUsersList(res.data));
  }

  const selectUser = (user) => {
    setUserSelect(user)
  }

  console.log(userSelect);

  return (
    <div className="App">
      < UsersForm 
      getUsers={getUsers} 
      userSelect={userSelect} 
      selectUser={selectUser}
      />
      <UsersList 
      usersList={usersList} 
      selectUser={selectUser} 
      getUsers={getUsers}
      />
    </div>
  )
}

export default App
