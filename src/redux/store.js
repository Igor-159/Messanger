import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";


const store = {
    _state:{
    profilePage:{
          posts:[
            {id: 1, message: "Hi, how are you", likesCount: 12 },
            {id: 2, message: "hhjsadffshju", likesCount: 11},
            {id: 3, message: "gdfxcdfr", likesCount: 11},
            {id: 4, message: "retijerfdjff", likesCount: 11},
  
          ],
          newPostText: "it-kamasutra"
          
    },
    messagePage:{
      dialogs:[
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
      ],
     message:[
        {id:1, message:'Hi'},
        {id:2, message: 'How is your it-kamasutra?'},
        {id:3, message: 'You'},
        {id:4, message: 'You'},
        {id:5, message: 'You'}
    ],
    newMessageText: ""
  }
  },
  _callSubscriber(){},
  getState(){},
  subscriber(observer){},



  dispatch(action){
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sideBarReducer(this._state.sidebat, action);

      this._callSubscriber(this._state);
  }

}

 


export default store;

