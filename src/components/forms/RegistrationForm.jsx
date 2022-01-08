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
      // image: file
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
    <div className="container">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="col-md-6">
          <div className="col-12">
            <label htmlFor="inputFirstName" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              onChange={(e)=>setFirstName(e.target.value)} name="firstName" value={firstName}
              className="form-control"
              id="inputFirstName"
              placeholder="John...."
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputLastName" className="form-label">
              LastName
            </label>
            <input
              type="text"
              onChange={(e)=>setLastName(e.target.value)} name="lastName" value={lastName}
              className="form-control"
              id="inputLastName"
              placeholder="Johnson....."
            />
          </div>

          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" onChange={(e)=>setUserEmail(e.target.value)} name="email" value={userEmail} className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" onChange={(e)=>setUserPassword(e.target.value)} name="password" value={userPassword} className="form-control" id="inputPassword4" />
        </div>
      
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
