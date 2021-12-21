import React, { useState, Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm(props) {
   
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const navigate = useNavigate()
  
    const api = `http://localhost:8000/api/auth/login`
  
    const refreshPage = () => {
      window.location.reload()
    }
  
    const handleSubmit = async e => {
      e.preventDefault()
  
      const user = {
        email: userEmail,
        password: userPassword
      }
      axios
        .post(api, user)
        .then(response => {
          localStorage.setItem('token', response.data)
          setOpenPopup(false)
          navigate('/home')
          refreshPage()
        })
        .catch(error => {
          console.log(`Axios error: `, error)
        })
    }

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div class="col-md-6">
          <div class="col-12">
            <label for="inputFirstName" class="form-label">
              FirstName
            </label>
            <input
              type="text"
              class="form-control"
              id="inputFirstName"
              placeholder="John...."
            />
          </div>
          <div class="col-12">
            <label for="inputLastName" class="form-label">
              LastName
            </label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              placeholder="Johnson....."
            />
          </div>

          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>

        <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
      </form>
    </div>
  );
}
