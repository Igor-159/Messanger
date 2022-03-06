import NavBar from "./NavBar";
import {connect} from 'react-redux';

const NavbarContainer = (props) =>{
    return(
        <NavBar authUserId={props.authUserId}/>
    )
}

let mapStateToProps = (state) =>({
    authUserId: state.authReducer.userId
})


export default connect(mapStateToProps)(NavbarContainer);