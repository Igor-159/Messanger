import HeaderContainer from './components/header/HeaderContainer';
import NavBar from './components/navbar/NavBar';
import UsersContainer from './components/user/UsersContainer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {connect} from 'react-redux';//import DialogsContainer from './components/dialogs/DialogsConteiner';
import './App.css';
import Login from './components/login/Login';
import React,{Suspense} from 'react';
import { initializeApp} from './redux/app-reducer';
import Spinner from './components/spinner/Spinner';

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsConteiner'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

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
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer />}/>
                        <Route path='/profile/:id' element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </Suspense>
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



