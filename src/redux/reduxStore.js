import { combineReducers, createStore } from "redux";
import appReducer from "./appReducer.js";

const rootReducer = combineReducers({
  app: appReducer,
})

const store = createStore(rootReducer);

window.store = store

export default store