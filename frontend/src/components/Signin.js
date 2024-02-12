import React from 'react'
import { useNavigate } from 'react-router-dom'
function Signin() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  }
  return (
    <div className='signin'>
        <h1 className='sigin-text'>Sign In</h1>
        <input type='text' id='username' className='signin-username'></input>
        <input type='password' id='password' className='signin-password'></input>
        <h4 className='reenter'>Re-enter the password</h4>
        <input type='password' id='password' className='signin-password'></input>
        <button className='login-button'>Sign In</button>

        <h4>Already have an account?<button className='sign-in' onClick={handleLogin}>Login</button> </h4>
    </div>
  )
}

export default Signin