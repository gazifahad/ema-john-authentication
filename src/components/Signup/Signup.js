import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [error,setError]=useState('')
    const handleOnBlur=(event)=>{
       const innputField=event.target.name;
       if(innputField==='email'){
        setEmail(event.target.value);
       }
       else if(innputField==='password'){
        setPassword(event.target.value);
       }
       if(innputField==='confirmPassword'){
        setConfirmPassword(event.target.value);
       }
       
    }
    const handleCreateUser=event=>{
        event.preventDefault();
        if (password !== confirmPassword){
            setError('please type same password')
            return;
        }
        else{
            setError('')
        }
        
    }
    console.log(error);

    return (
        <div className='form-container'>

            <div>
                <form onSubmit={handleCreateUser}>
                    <h2 className='form-label'>Signup here</h2>
                    <div className="input-group">
                        <label htmlFor="email" >Email</label>
                        <input type="email" name='email' onBlur={handleOnBlur} required></input>

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' onBlur={handleOnBlur} required></input>

                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Password</label>
                        <input type="password" name='confirmPassword' onBlur={handleOnBlur} required></input>

                    </div>
                    <p> {error}</p>
                    <div> <input type="submit" className='button-submit'></input>
                    </div>
                </form>
                <p>
                   Already have an account?<Link to='/login' className='form-link'>Login</Link>
                </p>
            </div>



        </div>
    );
};

export default Signup;