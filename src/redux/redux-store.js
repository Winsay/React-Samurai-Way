import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import messagesReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store