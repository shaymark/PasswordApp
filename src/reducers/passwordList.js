import { ADD_PASSWORD, REMOVE_PASSWORD } from "../actions"

function passwords(state = {},action) {
    switch (action.type) {
      case ADD_PASSWORD:
          return Object.assign({},state, {[action.password.id]: action.password})
      case REMOVE_PASSWORD:
          let newState = Object.assign({}, state)
          delete newState[action.password.id]
          return newState
      default:
        return state
    }
  }
  
  export default passwords