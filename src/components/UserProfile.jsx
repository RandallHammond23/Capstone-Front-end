import React, { useContext, useState, useEffect } from "react";
import { Box, Card, Container, Typography, Avatar } from "@material-ui/core";
import UserContext from "../context/UserContext";
import Controls from "../controls/Controls";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImgMediaCard from "../controls/PostContainer";
import "./UserProfile.css";

export default function UserProfile() {
  // const { user } = useContext(UserContext)
  const [userProfile, setUserProfile] = useState(null);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const { userid } = useParams();
  // const api = `http://localhost:5000/api/users/userId`

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
      setUser(response.data[0]);
      setUsers(response.data);
    });
  };

  const renderPostContainer = (
    <Container>
      <h2>my posts: </h2>
      {posts.map((post) => (
        <ImgMediaCard post={post} key={post.id} user={userProfile} />
      ))}
    </Container>
  );

  const noPosts = (
    <Container>
      <Card>
        <Typography variant="h2">User has no posts to show</Typography>
      </Card>
    </Container>
  );

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  return (
    <>
      <p>{user.firstName}</p>
    </>
    // <div className="userProfilePosts">
    //   <div className="postText">
    //     {posts.text}
    //     <div className="postImage"></div>
    //   </div>
    // </div>
  );
}
