import { ADD_CONTACT, DELETE_CONTACT } from "./actionTypes";

const initialState = {
  allContacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        allContacts: [...state.allContacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        allContacts: state.allContacts.filter((contact) => {
          return action.payload !== contact.key
        }) 
      }

    default:
      return state;
  }
};

export default contactReducer;
