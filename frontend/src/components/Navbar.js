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
      navigate('/login')
    } 

    const handleAbout = () => {
      navigate('/about' , {state : {isLoggedIn : store.isLoggedIn , username : store.name}})
    }

    const handleServices = () => {
      navigate('/about' , {state : {isLoggedIn : store.isLoggedIn , username : store.name}})
    }

    const handleContact = () => {
      navigate('/about' , {state : {isLoggedIn : store.isLoggedIn , username : store.name}})
    }

    const handleHome = () => {
      navigate('/about' , {state : {isLoggedIn : store.isLoggedIn , username : store.name}})
    }



    return (  
      <div className='main-navbar'>
      <div className='logo' onClick={handleClick}>V-Blog</div>
      <ul className='nav-links'>

        <li><div onClick={handleHome}>Home</div></li>
        <li><div onClick={handleAbout}>About</div></li>
        <li><div onClick={handleServices}>Services</div></li>
        <li><div onClick={handleContact}>Contact</div></li>
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