import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        error
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate()

    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordlBlur = e =>{
        setPassword(e.target.value)
    }
    if(user){
        navigate('/home')
    }

    const handleUserSignIn =e =>{
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordlBlur} type="password" name='password' required/>
                    </div>
                    <p>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-jon? <Link className='form-link' to="/Signup">Create a new account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;