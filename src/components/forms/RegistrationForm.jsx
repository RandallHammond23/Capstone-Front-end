import React, { useState, Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const [value, setvalue] = useState("")

  const api = `http://localhost:5000/api/addUser/register`;

  const refreshPage = () => {
    window.location.reload();
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: userEmail,
      password: userPassword,
    };
    axios
      .post(api, user)
      .then((response) => {
        localStorage.setItem('token', response.data)

        navigate("/home");
        refreshPage();
      })
      .catch((error) => {
        console.log(`Axios error: `, error);
      });
  };

  return (
    <div class="container">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div class="col-md-6">
          <div class="col-12">
            <label for="inputFirstName" class="form-label">
              FirstName
            </label>
            <input
              type="text"
              onChange={(e)=>setFirstName(e.target.value)} name="firstName" value={firstName}
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
              onChange={(e)=>setLastName(e.target.value)} name="lastName" value={lastName}
              class="form-control"
              id="inputLastName"
              placeholder="Johnson....."
            />
          </div>

          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" onChange={(e)=>setUserEmail(e.target.value)} name="email" value={userEmail} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" onChange={(e)=>setUserPassword(e.target.value)} name="password" value={userPassword} class="form-control" id="inputPassword4" />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
