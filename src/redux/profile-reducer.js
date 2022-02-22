import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS  = 'SET_STATUS';

let initialState = {
    profilePage:{
         posts:[
                {id: 1, message: "Hi, how are you", likesCount: 12 },
                {id: 2, message: "hhjsadffshju", likesCount: 11},
                {id: 3, message: "gdfxcdfr", likesCount: 11},
                {id: 4, message: "retijerfdjff", likesCount: 11},

        ],
         newPostText: "",
         profile: {},
         status: ''
    }
};


const profileReducer = (state = initialState, action) =>{
    
    switch(action.type)  {
        case ADD_POST:{
        let newPost ={
            id: 7,
            message: action.newPost,
            likesCount: 0
        }
        
        return{
            ...state,
            profilePage: {
                ...state.profilePage,
                newPostText: '',
                posts: [...state.profilePage.posts, newPost]
            }
        }
        
    }
        case UPDATE_NEW_POST_TEXT:{
        return{
            ...state,
            profilePage: {
                ...state.profilePage,
                newPostText: action.newText
            }
        }
        
        }
        case SET_USER_PROFILE:{
            return{
                ...state,
                profilePage: {
                    ...state.profilePage,
                    profile: action.profile 
            }
        }
    }
        case SET_STATUS:{
            return{
                ...state,
                profilePage: {
                    ...state.profilePage,
                    status: action.status
                }
            }
        }
        default:

             return state;
    }


    

}

export default profileReducer;

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getStatus = (id) => (dispatch) =>{
    profileAPI.getStatus(id).then(response=>{
        
        dispatch(setStatus(response.data))
    })
}


export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status)
    .then(response =>{
        if(response.data.resultCode === 0)
        dispatch(setStatus(status));
    })
}


export const getUserProfile = (userId) => (dispatch) =>{
    profileAPI.getProfile(userId).then(response => {
        
            dispatch(setUserProfile(response.data));
})
};
export const updateNewPostTextActionCreator = (text) =>
          ({type: UPDATE_NEW_POST_TEXT, newText: text});


