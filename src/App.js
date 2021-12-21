import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import Landing from './pages/Landing';
import axios from 'axios';
import { Loader } from "@googlemaps/js-api-loader"
import RegistrationPage from './pages/RegistrationPage';


export default function App() {

  const [posts, setPosts] = useState([]);


  const getAllPosts = async () => {
    await axios.get("http://localhost:5000/api/showPosts").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(() => {
    getAllPosts();
  }, []);




  return (
    <div className="App">
       <Routes>

         <Route path='/' element={<Landing />} />


          <Route 
            path='/home' 
            element={<Home />} />
          <Route path='/' element={<RegistrationPage />} />
         
        </Routes>
    
    </div>
  );
}


