import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();
  const isLoggedIn = location.state ? location.state.isLoggedIn : false;
  const username = location.state? location.state.username: '';
  const handleClick = () => {
    navigate('/')
  }

  const handleLogout = () => {
    navigate('/login')
  }

    return (  
      <div className='main-navbar'>
      <div className='logo' onClick={handleClick}>V-Blog</div>
      <ul className='nav-links'>
        
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li className='dropdown'>
          {isLoggedIn ? ( <p className='drop-btn' >Welcome, {username} </p> ) : (<a href='/login'>Login</a>)}
          </li>
          <li>
            {isLoggedIn ? (<p className='logout' onClick={handleLogout}>Logout</p>): ''}</li>   
      </ul>
    </div>
    )
}

export default Navbar