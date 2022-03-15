import './profileInfo.css';
import Spinner from '../../spinner/Spinner';
import userPhoto from '../../../assets/images/i.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = (props) =>{
    
    let [editMode, setEditMode] = useState(false);


    if(Object.keys(props.profile).length === 0){
        return <Spinner/>
    }

    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) =>{
        props.saveProfile(formData).then(()=>{ 
        setEditMode(false);
    })
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


                {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> : 
                <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>
                }
            </div>
        </div>
        </div>
    )
}


    const ProfileData = ({profile, isOwner, goToEditMode}) =>{
    return   <div>  
                <div>
                    {isOwner && <button onClick={goToEditMode}>edit</button>}
                </div>
                <div>
                    fullName: {profile.fullName}
                </div>
                <div>
                    Looking for a job: {profile.LookingForAJob ? "yes" : "no"}
                </div>
                <div>
                    My professional skills: {profile.LookingForAJob ? "yes" : "no"}
                </div>
                <div>
                    About me: {profile.aboutMe}
                </div>
                <div>
                    Contact: {Object.keys(profile.contacts).map(key => {
                       return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
                </div>
    }

    

    const Contact = ({contactTitle, contactValue}) => {
        return <div>
            {contactTitle} : {contactValue}
        </div>
    }


export default ProfileInfo;