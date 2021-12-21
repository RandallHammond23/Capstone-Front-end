import React, { useState, Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"








export default function LoginForm(props) {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
  
    const api = `http://localhost:5000/api/auth/login`;
  
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
      await axios
        .post(api, user)
        .then((response) => {
          localStorage.setItem("token", response.headers["x-auth-token"]);
          
          navigate("/home");
          refreshPage();
        })
        .catch((error) => {
          console.log(`Axios error: `, error);
        });
    };
  
    return (
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="col-md-6">
            
  
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
  