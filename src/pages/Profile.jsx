import { useContext, useState, useEffect } from 'react'
import UserContext from '../context/UserContext'
import axios from 'axios'
import UserProfile from '../components/UserProfile'

export default function Profile(props) {
  const { user } = useContext(UserContext)

  
  const [posts, setPosts] = useState([]);
  // const {firstName} = props

  

  const getUserPosts = async () => {
    await axios.get('http://localhost:5000/api/showPosts/:id').then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <>
      <h1> {user}'s profile!</h1>
        <UserProfile />
        {/* * <CommentBox /> */}
    </>
  )
}

