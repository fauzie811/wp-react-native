import {
  SLIDES_FETCH
} from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case SLIDES_FETCH:
      return action.payload
    default:
      return state
  }
}
