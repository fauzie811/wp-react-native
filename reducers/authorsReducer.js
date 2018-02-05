import {
  AUTHORS_FETCH
} from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case AUTHORS_FETCH:
      return action.payload
    default:
      return state
  }
}
