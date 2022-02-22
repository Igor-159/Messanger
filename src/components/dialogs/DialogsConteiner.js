import { sendMessageCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import { compose } from "redux";

let mapStateToProps = (state) =>{
    
    return {
        dialogsPage: state.dialogsReducer.dialogsPage,
        newMessageText: state.dialogsReducer.dialogsPage.newMessageText,
        
    }
};




let mapDispatchToProps = (dispatch) =>{
    
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },

    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps ),
    withAuthRedirect
)(Dialogs);;