import { getCategories } from '../Api'
import {
  CATEGORIES_FETCH
} from './types'

export const fetchCategories = () => async dispatch => {
  try {
    let { data } = await getCategories()
    dispatch({ type: CATEGORIES_FETCH, payload: data })
  } catch (e) {
    console.error(e)
  }
}
