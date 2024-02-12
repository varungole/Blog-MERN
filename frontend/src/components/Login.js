import React from 'react'
import GoogleIcon from './google-icon.png'
import LinkedinIcon from './linkedin-icon.png'
import { useNavigate } from 'react-router-dom';

function Login() {
      
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/signin')
    }
  return (
    <div className='login-page'>
        <div className='username-area'>
            <h1 className='Login-Title'>Login</h1>
            <input type='text' id='username' className='username'></input>
            <input type='password' id='password' className='password'></input>
            <button className='login-button'>Login</button>
            <h4>Do not have an account?<button className='sign-in' onClick={handleSignIn}>Sign in</button> </h4>
            
            <h4 className='or'>Or</h4>
            <h3 className='login-via'>Login via Google or Linkedin</h3>
            <div className='icon'>
            <img src={GoogleIcon} alt='google-icon' className='google-icon'></img>
            <img src={LinkedinIcon} alt='linkedin-icon' className='google-icon'></img>
            </div>
        </div>
    </div>
  )
}

export default Login