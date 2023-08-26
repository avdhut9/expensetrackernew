import {applyMiddleware,combineReducers,compose,legacy_createStore,} from "redux";

  import reducer from "./auth/reducer"

const reducers=combineReducers({
   auth:reducer,
 
  })
  
  export const store = legacy_createStore(reducers);