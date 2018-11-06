import { combineReducers } from 'redux'
import charactersReducer from './char-reducer'
// import usersReducer from './users-reducer'

const rootReducer = combineReducers({
  characters: charactersReducer,
  // users: usersReducer
})

export default rootReducer