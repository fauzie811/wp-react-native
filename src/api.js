import axios from 'axios';
import config from './config';

const API_URL = config.API_URL;

export const getLatestPosts = (page = 1) => {
  const url = `${API_URL}/posts?_embed&per_page=20&page=${page}`;
  
  return axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(err => console.log(err));
};

export const getCategories = () => {
  const url = `${API_URL}/categories?per_page=100`;

  return axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(err => console.log(err));
};

export const getAuthors = () => {
  const url = `${API_URL}/users?per_page=100`;

  return axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(err => console.log(err));
};
