import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";
import { getAuthUserData } from './auth-reducer';



const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    
};


const appReducer = (state = initialState, action) =>{
 switch(action.type){
    case INITIALIZED_SUCCESS:
    let stateCopy = {
        ...state,
        initialized: true,
        
    }    
    return stateCopy;
    default: return state;
}
}

export default appReducer;

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => (dispatch) =>{
    let promise = dispatch(getAuthUserData())
    promise.then(() => dispatch(initializedSuccess()))
    
}

