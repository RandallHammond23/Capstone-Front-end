import React, { useState, Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"








export default function LoginForm(props) {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [value, setvalue] = useState("")
  
    const api = `http://localhost:5000/api/auth/login`;
  
    const refreshPage = () => {
      window.location.reload();
    };

    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const user = {
  
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
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div class="col-md-6">
            
  
            <label for="inputEmail4" class="form-label">
              Email
            <input type="email" onChange={(e)=>setUserEmail(e.target.value)} name="email" value={userEmail} class="form-control" id="inputEmail4" />
            </label>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            <input type="password" onChange={(e)=>setUserPassword(e.target.value)} name="password" value={userPassword} class="form-control" id="inputPassword4" />
            </label>
          </div>
  
          <div class="col-12">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
        </form>
      </div>
    );
  }
  