import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    getUserFromToken()
  }, [])

  const getUserFromToken = () => {
    const token = localStorage.getItem('token')

    if (token) {
      const userId = jwtDecode(localStorage.getItem('token'))._id
 
      axios.get(`http://localhost:5000/api/users/${userId}`, 
        {headers: { 'x-auth-token': token }})
        .then(response => {setUser(response.data)})
        .catch(error => {console.log(`Axios error: `, error)})
    } else {
      return;
    }
  }
  
  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext