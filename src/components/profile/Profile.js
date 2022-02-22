import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostConteiner';



const Profile = (props) =>{
    
    return(
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}


export default Profile;