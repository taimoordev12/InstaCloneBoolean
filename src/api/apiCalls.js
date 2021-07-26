import baseUrl from './baseUrl';
import axios from 'axios';

const getProfile = async () => {

   const result= await axios.get(`${baseUrl}/profiles`);
 
   return result.data;

  }


  const getPosts = async () => {

   const postResult= await axios.get(`${baseUrl}/posts`);
 
   return postResult.data;

  }

  export  {getProfile,getPosts};