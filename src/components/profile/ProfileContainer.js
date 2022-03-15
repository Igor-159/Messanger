import Profile from './Profile';

import React from 'react';
import {connect} from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import { useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {
    
    let params = useParams()
    console.log(params)
    if(!params){
        params = props.authorizedUserId;
    }
    console.log(params.id)
    useEffect(() => {
       props.getUserProfile(params.id)
    
    }, [params]);
    
    useEffect(() => {
        props.getStatus(params.id)
     
     }, [params]);

    

     
    return(
        <div>
            <Profile {...props} profile={props.profile} 
            status={props.status} updateStatus={props.updateStatus}
            isOwner={props.authorizedUserId == params.id}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}/>
        </div>
    )

}
    

    let mapStateToProps = (state) =>{
    
        return{
            profile: state.profileReducer.profilePage.profile,
            status: state.profileReducer.profilePage.status,
            authorizedUserId: state.authReducer.userId,
            isAuth: state.authReducer.isAuth
        }
    }








export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withAuthRedirect
)(ProfileContainer);