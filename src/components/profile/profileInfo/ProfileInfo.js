import './profileInfo.css';
import Spinner from '../../spinner/Spinner';
import userPhoto from '../../../assets/images/i.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (props) =>{

    if(Object.keys(props.profile).length === 0){
        return <Spinner/>
    }

    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }
   
    return(
        <div>

            <div>
               <img src={props.profile.photos.large || userPhoto}/>
               {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
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