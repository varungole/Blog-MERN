import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const passwordsMatch = password === repassword;

  return (
    <div className='signin'>
      <h1 className='sigin-text'>Sign In</h1>
      <input
        type='text'
        id='username'
        className='signin-username'
        placeholder='Username'
      />
      <input
        type='password'
        id='password'
        className='signin-password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <h4 className='reenter'>Re-enter the password</h4>
      <input
        type='password'
        id='password'
        className='signin-password'
        value={repassword}
        onChange={(e) => setRepassword(e.target.value)}
        placeholder='Re-enter Password'
      />
      {!passwordsMatch && <h4>Passwords do not match</h4>}
      <button className='login-button' onClick={handleLogin}>
        Sign In
      </button>
      <h4>
        Already have an account?
        <button className='sign-in' onClick={handleLogin}>
          Login
        </button>
      </h4>
    </div>
  );
}

export default Signin;
