import { NavLink } from "react-router-dom";
import './navBar.css';

const NavBar = () =>{
    return (
        <div className='nav'>
        
                <ul>
                    <li><NavLink end to='/profile'>Profile</NavLink></li>
                    <li><NavLink end to='/dialogs'>Message</NavLink></li>
                    <li><NavLink end to='/users'>Users</NavLink></li>
                    <li><NavLink end to='/news'>News</NavLink></li>
                    <li><NavLink end to='/music'>Music</NavLink></li>
                    <li><NavLink end to='/settings'>Settings</NavLink></li>

                </ul>
        
        </div>
    )
}

export default NavBar;