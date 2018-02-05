import axios from 'axios'

import Config from './Config'

const withQuery = (url, params = {}) => {
  const esc = encodeURIComponent
  let query = Object.keys(params)
       .filter(key => params[key] !== '' && params[key] !== null)
       .map(key => `${esc(key)}=${esc(params[key])}`)
       .join('&')
  query = query.length > 0 ? `?${query}` : null

  return `${url}${query}`
}

const defParams = { _embed: 1, per_page: 10 }

export const getPosts = (params = {}) => {
  return axios.get(withQuery(`${Config.apiUrl}/posts`, { ...defParams, ...params }))
}

export const getCategories = () => {
  return axios.get(`${Config.apiUrl}/categories?per_page=100`)
}

export const getAuthors = () => {
  return axios.get(`${Config.apiUrl}/users?per_page=100`)
}

export const getPage = (id) => {
  return axios.get(`${Config.apiUrl}/pages/${id}`)
}
