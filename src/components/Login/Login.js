import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Login = () => {
    const navigate=useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleOnBlur = (event) => {
        const innputField = event.target.name;
        if (innputField === 'email') {
            setEmail(event.target.value);
        }
        else if (innputField === 'password') {
            setPassword(event.target.value);
        }
       

    }
    
    const handleLogin = event => {

        event.preventDefault();
        signInWithEmailAndPassword(email,password);
        
        
       

    }
    if(user){
        navigate(from, { replace: true });
        // navigate('/home')
    }
    console.log(error);
    
    return (
        <div className='form-container'>

            <div>
                <form action="" onSubmit={handleLogin}>
                    <h2 className='form-label'>login here</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleOnBlur} type="email" name='email' required></input>

                    </div>
                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input onBlur={handleOnBlur} type="password" name='password' required></input>

                    </div>
                   {error&&'id or password error'}
                    <div > <button type="submit" className='button-submit'>submit</button></div>
                </form>
                <p>
                    new to ema-john?<Link to='/signUp' className='form-link'>Create an account</Link>
                </p>
            </div>



        </div>
    );
};

export default Login;