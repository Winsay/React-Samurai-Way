import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import messagesReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "./app-reducer ";
import friendReducer from './friend-reducer'

let reducers = combineReducers({
    friendsReducer: friendReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


window.store = store;

export default store