import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  
  
  const location = useLocation();
  const isLoggedIn = location.state? location.state.isLoggedIn : '';
  const username = location.state ? location.state.username : '';
  const handleClick = () => {
    navigate('/')
  }

  const handleLogout = () => {
    navigate('/login')
  }

  const navigateAbout = () => {
    navigate('/about' ,  {state: { isLoggedIn: isLoggedIn, username: username}});
  }

  const navigateServices = () => {
    navigate('/services' ,  {state: { isLoggedIn: isLoggedIn, username: username}});
  }

  const navigateContact = () => {
    navigate('/contact' ,  {state: { isLoggedIn: isLoggedIn, username: username}});
  }

    return (  
      <div className='main-navbar'>
      <div className='logo' onClick={handleClick}>V-Blog</div>
      <ul className='nav-links'>
        <li onClick={navigateAbout}>About</li>
        <li onClick={navigateServices}>Services</li>
        <li onClick={navigateContact}>Contact</li>
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