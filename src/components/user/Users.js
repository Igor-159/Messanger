import Paginator from '../common/paginator/Paginator';
import User from './User';


const Users = (props) =>{

    return(
    <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
    <div>
    {
        props.users.map(user=> <User key={user.id} user={user} followingInProgress={props.followingInProgress}
                                unfollow={props.unfollow}/> 
                )
    }
    </div>
    </div>
    )
}


export default Users;