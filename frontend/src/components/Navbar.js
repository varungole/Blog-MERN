import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='main-navbar'>
    <div className='logo' onClick={handleClick}>V-Blog</div>
    <ul className='nav-links'>
      <li><a href='/'>Home</a></li>
      <li><a href='/about'>About</a></li>
      <li><a href='/services'>Services</a></li>
      <li><a href='/contact'>Contact</a></li>
      <li><a href='/login'>Login</a></li>      
    </ul>
  </div>
  )
}

export default Navbar