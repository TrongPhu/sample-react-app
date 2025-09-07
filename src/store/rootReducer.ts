import { combineReducers } from '@reduxjs/toolkit'
import sidebarReducer from './reducers/sidebarSlice'
import authReducer from './reducers/authSlice'
import errorReducer from './reducers/errorSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  error: errorReducer,
})

export default rootReducer
