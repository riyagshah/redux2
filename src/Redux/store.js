import { combineReducers, legacy_createStore } from "redux";
import { Authreducer } from "./Authreducer";
import { Todoreducer } from "./Todoreducer";

const rootreducer = combineReducers({
    todo : Todoreducer,
    auth : Authreducer
});

export const store = legacy_createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())