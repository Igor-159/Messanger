import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import NavBar from './components/navbar/NavBar';
import UsersContainer from './components/user/UsersContainer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {connect} from 'react-redux';
import DialogsContainer from './components/dialogs/DialogsConteiner';
import './App.css';
import Login from './components/login/Login';
import React from 'react';
import { initializeApp} from './redux/app-reducer';
import Spinner from './components/spinner/Spinner';




class App extends React.Component {
    componentDidMount(){
        
    }

    render(){
      /*  if(!this.props.initialized){
            return <Spinner/>
        }*/



    return (
        <Router>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wraper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer />}/>
                        <Route path='/profile/:id' element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>

                </div>

            </div>
        </Router>
    )
}
}

const mapStateToProps = (state) =>({
    initialized: state.appReducer.initialized
})

export default  connect (mapStateToProps, {initializeApp}) (App);



