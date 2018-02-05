import { combineReducers } from 'redux'

import posts from './postsReducer'
import slides from './slidesReducer'
import categories from './categoriesReducer'
import authors from './authorsReducer'
import saves from './savesReducer'
import about from './aboutReducer'

export default combineReducers({
  posts, slides, categories, authors, saves, about
})
