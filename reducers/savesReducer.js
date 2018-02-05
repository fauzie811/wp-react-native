import { REHYDRATE } from 'redux-persist/constants'

import { POST_TOGGLE_SAVE } from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.saves || []
    case POST_TOGGLE_SAVE:
      let idx = state.findIndex(p => p.id === action.payload.id)
      if (idx > -1) {
        return [...state.slice(0, idx), ...state.slice(idx + 1)]
      }
      return [...state, action.payload]
    default:
      return state
  }
}
