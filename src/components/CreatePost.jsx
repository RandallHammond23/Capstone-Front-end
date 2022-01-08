import * as React from 'react';
import { styled } from '@mui/material/styles';
import UserContext from '../context/UserContext';
import IconButton from '@mui/material/IconButton';

import {useState} from 'react';

import axios from 'axios';
;


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



    
    export default function ImgMediaCard() {
      const [posts, setPosts]= useState();
    //   const user = UserContext();
      const [text,setText] = useState();
      const [image,setImage] = useState();
      const api = 'http://localhost:5000/api/addPost/:userId/posts'



      const handleSubmit = async e => {
        e.preventDefault()
    
        const newPost = {
         text:text,
         image:image
        }
        try {
          await axios
            .post(api, newPost)
            .then(response => {
              console.log(response)
              // refreshPage()
            })
            .catch(error => {
              console.log(`Axios error: `, error)
            })
        } catch (error) {
          throw new Error(error)
        }
      }




      return (

        <div className="container">
        <form onSubmit={(e)=>handleSubmit(e)} encType='multipart/form-data'>
        <div className="form-group">
              <label htmlFor="text"/>
              <textarea type='text' name= "text" placeholder='What would you like to say?' id= 'text' className='form-control'></textarea>
          </div>
          <div className="form-group">
              <label htmlFor="image"> Upload Images</label>
              <input type='file' name= "image" id= 'image' className='form-control-file'/>
          </div>
            
        
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
      );
    }
    

