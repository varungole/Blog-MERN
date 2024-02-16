  import React, {  } from 'react'
  import { useNavigate } from 'react-router-dom';
  import useStore from './useStore';

  function Navbar() {
    const navigate = useNavigate();
    const store = useStore();
    

    const handleTopicPath = (topicPath) => {
      if(topicPath === 'login')
      {
        store.isLoggedIn = false;
        store.name = '';
        navigate(`/${topicPath}` , {state : {isLoggedIn : store.isLoggedIn , username : store.name}})
      }
      else
      {
      navigate(`/${topicPath}` , {state : {isLoggedIn : store.isLoggedIn , username : store.name}})
      }
    }

    return (  
      <div className='main-navbar'>
      <div className='logo' onClick={() => handleTopicPath('')}>V-Blog</div>
      <ul className='nav-links'>

        <li><div onClick={() => handleTopicPath('')}>Home</div></li>
        <li><div onClick={() => handleTopicPath('about')}>About</div></li>
        <li><div onClick={() => handleTopicPath('service')}>Services</div></li>
        <li><div onClick={() => handleTopicPath('contact')}>Contact</div></li>
        <li className='dropdown'>
          {store.isLoggedIn ? ( <p className='drop-btn' >Welcome, {store.name} </p> ) : (<a href='/login'>Login</a>)}
          </li>
          <li>
            {store.isLoggedIn ? (<p className='logout' onClick={() => handleTopicPath('login')}>Logout</p>): ''}</li>   
      </ul>
    </div>
    )
}

export default Navbar