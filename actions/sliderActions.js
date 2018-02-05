import Config from '../Config'
import { getPosts } from '../Api'
import {
  SLIDES_FETCH
} from './types'

export const fetchSlides = () => async dispatch => {
  try {
    let { data } = await getPosts(Config.sliderParams)
    dispatch({ type: SLIDES_FETCH, payload: data })
  } catch (e) {
    console.error(e)
  }
}
