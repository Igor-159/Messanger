import './dialogs.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import {Navigate} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { Textarea } from '../common/formsControl/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validator';

const Dialogs = (props) =>{
   console.log(props)
    let dialogElement = props.dialogsPage.dialogs.map( item => (<DialogItem name={item.name} key={item.id} id={item.id}/>));
    let message = props.dialogsPage.messages.map(message => (<Message message={message.message} key={message.id} id={message.id}/>))


   

    let addNewMessage = (values) =>{
        
        props.sendMessage(values.newMessageBody)
    }



    if(!props.isAuth) return <Navigate to='/login'/>

    return(
        <div className='dialogs'>
            <div className='dialog-item'>
            {dialogElement}
            </div>
            <div className='messages'>
            {message}
                
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);


const AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                component={Textarea}
                validate={[required, maxLength50]}
                name={"newMessageBody"}
                placeholder={"Enter your message"}>
                </Field>
                <div>
                <button >Add post</button>
                </div>
            </div>
            </form>
    )
}



const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;