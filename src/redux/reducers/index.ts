import { combineReducers } from 'redux'
import userReducer from './user'

const rootReducer = combineReducers({
  usersDashboard: userReducer,
})

export default rootReducer