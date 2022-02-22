import './profileInfo.css';
import Spinner from '../../spinner/Spinner';
import userPhoto from '../../../assets/images/i.jpg';
import ProfileStatus from './ProfileStatus';



const ProfileInfo = (props) =>{
    
    if(Object.keys(props.profile).length === 0){
        return <Spinner/>
    }
   
    return(
        <div>

            <div>
               <img src='https://avatars.mds.yandex.net/i?id=bd0479f8e5da5c9ac4e65b61cd1defd9-4566301-images-thumbs&n=13'/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className='profileInfoContainer'>
                
            <div className=''>
                
                <img src={props.profile.photos.large !=null ? props.profile.photos.small : userPhoto} className='userPhoto'/>
            </div>
            <div>
                aboutMe: {props.profile.aboutMe}
            </div>
                <div>
                fullName: {props.profile.fullName}
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;