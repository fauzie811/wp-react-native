import config from './config';

const API_URL = config.API_URL;

const withQuery = (url, params = {}) => {
  const esc = encodeURIComponent;
   let query = Object.keys(params)
       .filter(key => params[key] !== '' && params[key] !== null)
       .map(key => `${esc(key)}=${esc(params[key])}`)
       .join('&');
   query = query.length > 0 ? `?${query}` : null;

   return `${url}${query}`;
};

export const getPosts = (params = {}) => {
  const defParams = { _embed: 1, per_page: 20, page: 1 };
  const url = withQuery(`${API_URL}/posts`, { ...defParams, ...params });
  
  return fetch(url)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.log(err));
};

export const getCategories = () => {
  const url = `${API_URL}/categories?per_page=100`;

  return fetch(url)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.log(err));
};

export const getAuthors = () => {
  const url = `${API_URL}/users?per_page=100`;

  return fetch(url)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.log(err));
};
