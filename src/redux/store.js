import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import contactReducer from "./contacts/reducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistedStore = persistStore(store)