import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import { required } from '../../utils/validators/validator';
import { Input } from '../common/formsControl/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Navigate} from 'react-router-dom';
import style from "../common/formsControl/FormsControls.module.css";

const LoginForm = (props) =>{
    return (

            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"email"} component={Input}
                    validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"}
                    type={"password"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
                
            </form>
        
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = (props) =>{

    const onSubmit = (formData) =>{
        
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Navigate to='/profile/'/>
    }


    return (
        <div>
            <div>
                <h2>Login</h2>
            </div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.authReducer.isAuth
})

export default  connect(mapStateToProps, {login}) (Login);