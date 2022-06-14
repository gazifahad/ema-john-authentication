import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>

            <div>
                <form action="">
                    <h2 className='form-label'>login here</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required></input>

                    </div>
                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input type="password" name='password' required></input>

                    </div>
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