
import { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import './header.css';


import { getAuthUserData, logout } from '../../redux/auth-reducer';

class HeaderContainer extends Component{

    componentDidMount(){
       
        
    }

    render(){
    return <Header {...this.props}/>

}
}


const mapStateToProps = (state) =>{
    return{
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
}
}


export default connect (mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);