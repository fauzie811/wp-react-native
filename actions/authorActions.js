import { getAuthors } from '../Api'
import {
  AUTHORS_FETCH
} from './types'

export const fetchAuthors = () => async dispatch => {
  try {
    let { data } = await getAuthors()
    dispatch({ type: AUTHORS_FETCH, payload: data })
  } catch (e) {
    console.error(e)
  }
}
