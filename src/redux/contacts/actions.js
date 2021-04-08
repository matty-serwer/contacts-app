import { ADD_CONTACT, DELETE_CONTACT } from './actionTypes'

export const addContact = (contact) => (dispatch) => {
  dispatch({ type: ADD_CONTACT, payload: contact })
}

export const deleteContact = (id) => (dispatch) => {
  dispatch({ type: DELETE_CONTACT, payload: id })
}