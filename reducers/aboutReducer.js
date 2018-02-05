import {
  ABOUT_FETCH
} from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case ABOUT_FETCH:
      return action.payload
    default:
      return state
  }
}
