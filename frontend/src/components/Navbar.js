  import React, {  } from 'react'
  import { useNavigate } from 'react-router-dom';
  import useStore from './useStore';

  function Navbar() {
    const navigate = useNavigate();

    const store = useStore();

    const handleClick = () => {
      navigate('/')
    }

    const handleLogout = () => {
      store.setUsername(''); // Update the store
      store.setLoggedIn(false);
      navigate('/login', { state: { isLoggedIn: store.isLoggedIn, username: store.name } });
    };

    const handleAbout = () => {
      navigate('/about', {state: {isLoggedIn: store.isLoggedIn, username: store.name}});
    }

    const handleServices = () => {
      navigate('/services', {state: {isLoggedIn: store.isLoggedIn, username: store.name}});
    }


    const handleContact = () => {
      navigate('/contact', {state: {isLoggedIn: store.isLoggedIn, username: store.name}});
    }

    const handleHome = () => {
      navigate('/', {state: {isLoggedIn: store.isLoggedIn, username: store.name}});
    }



      return (  
        <div className='main-navbar'>
        <div className='logo' onClick={handleClick}>V-Blog</div>
        <ul className='nav-links'>
          
          <li onClick={handleHome}>Home</li>
          <li onClick={handleAbout}>About</li>
          <li onClick={handleServices}>Services</li>
          <li onClick={handleContact}>Contact</li>
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
