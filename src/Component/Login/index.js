import React,{useContext} from 'react'
import './style.css'
import {SignInWithGoogle} from "../../services";
import { UserContext } from '../cont';

const Login = () => {
    const [user, setUser] =  useContext(UserContext).user;

    const logInBtnClick = async(props) => {
            let userBySignIn =  await SignInWithGoogle();
                if(userBySignIn) setUser(userBySignIn);
                 

    };
    return (
        <div className='login'>
            <div className='login_Button' onClick={logInBtnClick}>
                <p>Login With Google</p>
            </div>
        </div>
    )
}

export default Login
