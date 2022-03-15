import './myPost.css';
import Post from './post/Post';
import {Field, reduxForm} from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { Textarea } from '../../common/formsControl/FormsControls';

const maxLength10 =  maxLengthCreator(10);

const MyPost =(props) =>{
    console.log(props.addPost)
    let postsElement = props.posts.map(post => (<Post key={post.id} message={post.message} likesCount={post.likesCount}/>))

    let newPostBody = (newPost) =>{
        props.addPost(newPost.newPost)
    } ;

    return(
        <div >
            My post
            <div>
                <AddMyPostFormRedux onSubmit={newPostBody}/>
            </div>
            <div className=''> 
                {postsElement}
                
            </div>
        </div>
        
    )
}


const AddMyPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
                <Field 
                component={Textarea}
                name={"newPost"}
                placeholder={'Enter your post'}
                validate={[required, maxLength10]}
                ></Field>
                <div>
                <button >Add post</button>
                </div>
            </form>
    )
}

const AddMyPostFormRedux = reduxForm({form: "AddMyPostForm"})(AddMyPostForm)



export default MyPost;