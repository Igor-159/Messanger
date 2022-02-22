import Profile from './Profile';
import * as axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount(){
            
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
                this.props.setUserProfile(response.data);
        })
    }

    render(){
    return(
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
            
        </div>
    )
}
}


let mapStateToProps = (state) =>{
    
    return{
        profile: state.profileReducer.profilePage.profile
    }

    
}

const WithRouth = () =>{
    let params = useParams();
    console.log(params);
    return params
}



export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);