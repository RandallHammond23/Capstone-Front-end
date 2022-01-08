
import React from 'react'
import {useState, useEffect} from 'react'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'
import axios from 'axios';
import './Landing.css'
import PostMapper from '../components/PostMapper';
import PostConatiner from '../controls/PostContainer';


// import GoogleMaps from '../components/GoogleMaps'

export default function Landing () {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  const getAllPosts = async () => {
    await axios.get("http://localhost:5000/api/showPosts/").then((response) => {
      // console.log(response.data);
      setPosts(response.data);
    });
  };
 
 
  const getAllUsers = async () => {
    await axios.get("http://localhost:5000/api/users").then((response) => {
      // console.log(response.data);
      setUser(response.data);
    });
  };
    
    // user = user.filter((posts){
    //   for(let i = 0; i <= user.length; i++){
    //     if (user.Id === posts.Id) {
    //       return user.firstName
    //     }
    //     else {
    //       return false;
    //     }
    //   }
    // })
    //   return user.firstName;
    // }
  
  


  useEffect(() => {
    getAllPosts();
    getAllUsers();
  
  }, []);
  
  
  return (
    <div>
      <RegistrationPage />
      <LoginPage />
     

      
      {posts.map((posts,i)=> 
    <div className ='box-container' key= {i}>
      {posts.text}, {posts.image} </div>
    )}
        <div className='postWrapper'>
          {/* {user.filter((posts)=>
          )} */}
          <div className='postFirstName'>
            <span className='firstName'>{user.firstName}</span>
          </div>
          <div className="postCenter">
           
          <span className="postText" >{posts.text}</span>
          </div>
        </div>
        <div>
         
    </div>
      </div>
    



  )
      }