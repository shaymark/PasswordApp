import { combineReducers } from 'redux'
import passwords from './passwordList'
import selectedPassword from './selectedPassword'

const rootReducer = combineReducers({
    passwords,
    selectedPassword
  })
  
export default rootReducer