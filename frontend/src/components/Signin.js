import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();


  const handleLogin = () => {
    navigate('/login');
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const test = await fetch('http://localhost:4050/users');
      const data = await test.json();

      // Assuming `data` is an array of user objects
      const usernameToCheck = username;  // Replace with the username you want to check
    
      for (let i = 0; i < data.length; i++) {
        let tempUser = data[i];
        if (tempUser.username === usernameToCheck) {
          alert('User already exists');
          return;
        }
      }
      const response = await fetch('http://localhost:4050/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        console.log('Not successful');
      }

      setUsername('')
      setPassword('')
      setRepassword('')
    };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const passwordsMatch = password === repassword;

  return (
    <div>
    <div className='signin'>
      <h1 className='sigin-text'>Sign In</h1>
      <input
        type='text'
        id='username'
        className='signin-username'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
        id='rePassword'
        className='signin-password'
        value={repassword}
        onChange={(e) => setRepassword(e.target.value)}
        placeholder='Re-enter Password'
      />
      {!passwordsMatch && <h4>Passwords do not match</h4>}
      <button className='login-button' onClick={handleSubmit}>
        Sign In
      </button>
      <h4>
        Already have an account?
        <button className='sign-in' type='submit' onClick={handleLogin}>
          Login
        </button>
      </h4>
    </div>
    </div>
  );





  
}




export default Signin;
