import { NavLink } from 'react-router-dom';
import './header.css';

const Header = (props) =>{
    
    return (
        <header className='header'>
                
                <img src='https://avatars.mds.yandex.net/i?id=910ba817a530088c60f257f40d680544-5232177-images-thumbs&n=13'/>
                <div className="login-block">
                    {props.isAuth 
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    :<NavLink end to={'/login'}>Login</NavLink>}
                    
                </div>
        </header>
    )
}

export default Header;