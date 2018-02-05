import {
  POSTS_FETCH,
  POSTS_FETCH_START,
  POSTS_FETCH_END,
  POSTS_NEXT_PAGE,
  POSTS_RESET_PAGE,
  POSTS_UPDATE_PARAMS
} from '../actions/types'

const INITIAL_STATE = {
  items: [],
  loading: false,
  refreshing: false,
  eol: false,
  params: {
    page: 1
  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case POSTS_FETCH_START:
      const refreshing = state.params.page === 1
      const eol = refreshing ? false : state.eol
      return { ...state, loading: true, refreshing, eol }
    case POSTS_FETCH_END:
      return { ...state, loading: false, refreshing: false, eol: action.payload || state.eol }
    case POSTS_FETCH:
      const items =
        state.params.page === 1
        ? action.payload : [...state.items, ...action.payload]
      return { ...state, items, eol: action.payload.length < 10 }
    case POSTS_NEXT_PAGE:
      if (state.eol) { return state }
      return { ...state, params: { ...state.params, page: state.params.page + 1 } }
    case POSTS_RESET_PAGE:
      return { ...state, params: { ...state.params, page: 1 } }
    case POSTS_UPDATE_PARAMS:
      return { ...state, params: { ...action.payload, page: 1 } }
    default:
      return state
  }
}
