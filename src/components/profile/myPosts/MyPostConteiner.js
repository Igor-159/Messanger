import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import MyPost from "./MyPost";



let mapStateToProps = (state) =>{
    
    return{
        posts: state.profileReducer.profilePage.posts,
        newPostText: state.profileReducer.profilePage.newPostText    
    }
}

let mapDispatchToProps = (dispatch) =>{
    
    return{
        updateNewPostText: (text) =>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: (newPost) =>{
            dispatch(addPostActionCreator(newPost))
        }
    }
}



const MyPostContainer = connect (mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;