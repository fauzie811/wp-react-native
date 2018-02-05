import { getPosts } from '../Api'
import {
  POSTS_FETCH,
  POSTS_FETCH_START,
  POSTS_FETCH_END,
  POSTS_NEXT_PAGE,
  POSTS_RESET_PAGE,
  POSTS_UPDATE_PARAMS,
  POST_TOGGLE_SAVE
} from './types'

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: POSTS_FETCH_START })
  try {
    let { data } = await getPosts(getState().posts.params)
    dispatch({ type: POSTS_FETCH, payload: data })
    dispatch({ type: POSTS_FETCH_END, payload: false })
  } catch (e) {
    dispatch({ type: POSTS_FETCH_END, payload: true })
    // console.error(e);
  }
}

export const nextPage = () => {
  return { type: POSTS_NEXT_PAGE }
}

export const resetPage = () => {
  return { type: POSTS_RESET_PAGE }
}

export const updateParams = (params = {}) => {
  return { type: POSTS_UPDATE_PARAMS, payload: params }
}

export const toggleSavePost = post => {
  return {
    type: POST_TOGGLE_SAVE,
    payload: post
  }
}
