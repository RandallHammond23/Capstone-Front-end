import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader";
import RegistrationPage from "./pages/RegistrationPage";
import googleMaps from "./components/GoogleMaps";

export default function App() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState(null);
  const getPosts = async () => {
    try {
      await axios
        .get(`http://localhost:5000/api/showPosts`)
        .then((response) => setPosts(response.data));
    } catch (error) {
      throw new Error(error);
    }
  };

  const getUsers = async () => {
    await axios.get("http://localhost:5000/api/users").then((response) => {
      // console.log(response.data);
      setUser(response.data[2]);
      setUsers(response.data);
    });
  };

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  return (
    <div className="App">
      {users === null ? null : (
        <>
          {user.firstName}
          <div>
            <img
              src={`http://localhost:5000/${user.posts[0].image}`}
              height={500}
            />
          </div>
        </>
      )}
      {/* <div> <googleMaps maps={initMap()} /></div> */}
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />
        <Route path="/" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}
