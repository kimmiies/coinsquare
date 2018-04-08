import { combineReducers } from 'redux'
import globalUiReducer from './globalUiReducer'
import userReducer from './userReducer'

export default combineReducers({
  globalUiReducer,
  userReducer,
})
