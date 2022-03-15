import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import { required } from '../../utils/validators/validator';
import { Input, createField} from '../common/formsControl/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Navigate} from 'react-router-dom';
import style from "../common/formsControl/FormsControls.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) =>{
    return (

            <form onSubmit={handleSubmit}>
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
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createField('Sumbols from image', 'capthca', [required], Input, {}, {})}
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
        
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Navigate to='/profile/'/>
    }


    return (
        <div>
            <div>
                <h2>Login</h2>
            </div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) =>({
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth
})

export default  connect(mapStateToProps, {login}) (Login);