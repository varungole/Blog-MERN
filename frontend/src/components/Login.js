  import React, { useState } from 'react'
  import GoogleIcon from './google-icon.png'
  import LinkedinIcon from './linkedin-icon.png'
  import { useNavigate } from 'react-router-dom';

  function Login() {
        
      const navigate = useNavigate();

      const handleSignIn = () => {
          navigate('/signin')
      }

      const[username , getUsername] = useState('');
      const[password , getPassword] = useState('');

      const handleLogin = async(e) => {
        e.preventDefault();
        const test = await fetch('http://localhost:4050/users');
        const data = await test.json();
        // Assuming `data` is an array of user objects
        const usernameToCheck = username;  // Replace with the username you want to check
        let flag = false;
        for (let i = 0; i < data.length; i++) {
          let tempUser = data[i];
          if (tempUser.username === usernameToCheck && tempUser.password === password) {
            flag = true;
            navigate('/', {state: { isLoggedIn: true, username: usernameToCheck}});
            console.log(usernameToCheck);
          }
        }

        if(flag === false)
        {
          alert('Incorrect username or password');

        return;
        }

      }

    return (
      <div className='login-page'>
          <div className='username-area'>
              <h1 className='Login-Title'>Login</h1>
              <input type='text' id='username' className='username' value={username} onChange={(e) => getUsername(e.target.value)}></input>
              <input type='password' id='password' className='password' value={password} onChange={(e) => getPassword(e.target.value)}></input>
              <button className='login-button' onClick={handleLogin}>Login</button>
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