import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import contactReducer from "./contacts/reducer";

const store = createStore(
  combineReducers({
    contacts: contactReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
