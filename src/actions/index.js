import uuid from 'uuid/v4'

/*
 * action types
 */

export const ADD_PASSWORD = 'ADD_PASSWORD'
export const REMOVE_PASSWORD = "REMOVE_PASSWORD"

/*
 * other constants
 */

 
 /*
  * action creators
  */

  export const addPassword = (password) => {
      return { type: ADD_PASSWORD, password }
  }

  export const updatePassword = (password) => {
      return { type: UPDATE_PASSWORD, index }
  }

  export const removePassword = (password) => {
      return { type: REMOVE_PASSWORD, password}
  }

  export const addPasswordAction = (userName, password) => {
    let passwordObject = {
                   id: uuid(),
                   userName: userName,
                   password: password
               }
    
     return addPassword(passwordObject)
  } 

  export const updatePasswordAction = (password) => {
      return addPassword(password)
  }

  export const removePasswordAction = (passwordId) => {
      return removePassword({id: passwordId})
  }