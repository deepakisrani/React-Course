import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY
console.log(KEY);

export const baseSearchParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
  };
  
  export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });