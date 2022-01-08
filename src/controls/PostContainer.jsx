// import * as React from 'react';
// import UserContext from '../context/UserContext';
// import {useState,useEffect} from 'react';
// import axios from 'axios';


    

// export default function PostConatiner(){
//   const[post,setPost] = useState([])
//   const getAllPosts = async () => {
//     await axios.get("http://localhost:5000/api/showPosts/").then((response) => {
//      setPost(response.data);
//     });
//   };


//   useEffect(() => {
//     getAllPosts();
  
//   }, []);

//   return(
//     <div className='post'>
//       {posts.map((posts,i)=> 
//     <p key= {i}>{posts.text}, {posts._id} </p>
//     )}
//       <div className='postImages'></div>
//       {post.image}
//       <div className='postText'>
//         {post.text}
//       </div>

//     </div>
//   )
// }