import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from './user-reducer ';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer"

let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sideBarReducer,
    usersReducer,
    authReducer,
    form: formReducer,
    appReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;