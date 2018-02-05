import Config from '../Config'
import { getPage } from '../Api'
import {
  ABOUT_FETCH
} from './types'

export const fetchAboutPage = () => async dispatch => {
  try {
    let { data } = await getPage(Config.aboutPageId)
    dispatch({ type: ABOUT_FETCH, payload: data })
  } catch (e) {
    console.error(e)
  }
}
