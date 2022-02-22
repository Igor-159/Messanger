import { follow, 
         unfollow,  
         setCurrentPage,  
         toggleFollowingProgress,
         getUsers} from "../../redux/user-reducer ";
import { connect } from "react-redux";
import React from 'react';
import Users from './Users';
import   './user-styles.css';
import Spinner from "../spinner/Spinner";
import { compose } from "redux";
import {getAllUsers, 
        totalUsersCount, 
        getPageSize, 
        getCurrentPage,
        getIsFetching,
        getFollowingInProgress} from '../../redux/user-selectors';

class UsersContainer extends React.Component {

    
    componentDidMount(){

                this.props.getUsers(this.props.currentPage, this.props.pageSize);
        //     this.props.toggleIsFetching(true);
        //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        // })
        }
    
    onPageChanged = (pageNumber) =>{
        this.props.getUsers(pageNumber, this.props.pageSize);
        
}
    render(){ 
        return (
                <>
                {this.props.isFetching ? <Spinner/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followingInProgress={this.props.followingInProgress}/>
                      
                </>
        )}
}




/*const mapStateToProps = (state) =>{
    
    return{
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
    }
}*/


const mapStateToProps = (state) =>{
    
    return{
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}







/*const mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        } ,
        setUsers : (users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetchingAC: (isFetching) =>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
        
    }
}*/



export default compose(
    connect(mapStateToProps,{ 
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers})
)(UsersContainer);
