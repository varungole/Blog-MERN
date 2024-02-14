import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import useStore from './useStore';

function Navbar() {
  const navigate = useNavigate();

  const store = useStore();

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
          {store.isLoggedIn ? ( <p className='drop-btn' >Welcome, {store.name} </p> ) : (<a href='/login'>Login</a>)}
          </li>
          <li>
            {store.isLoggedIn ? (<p className='logout' onClick={handleLogout}>Logout</p>): ''}</li>   
      </ul>
    </div>
    )
}

export default Navbar