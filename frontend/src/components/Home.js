import React from 'react'
import Topic from './Topic'
import Geography from './geography.webp'
import ComputerScience from './compsci.jpeg'
import Football from './football.jpeg'
import History from './history.jpeg'
import useStore from './useStore'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  const handleHistory = () => {
    navigate('/history', {state: {isLoggedIn: store.isLoggedIn, username: store.name}});
  }

  const handleGeog = () => {
    navigate('/history', {state: {isLoggedIn: store.isLoggedIn, username: store.name}});
  }

  const handleCS = () => {
    navigate('/history', {state: {isLoggedIn: store.isLoggedIn, username: store.name}});
  }

  const handleFootball = () => {
    navigate('/history', {state: {isLoggedIn: store.isLoggedIn, username: store.name}});
  }

  const store = useStore();
  return (
    <div className='App'>
    <h1 className="welcome-title">Welcome to my blog-site!</h1>
    <div className="topics">
      <div onClick={handleHistory} ><Topic title="History" image={History} /></div>
      <div onClick={handleGeog}><Topic title="Geography" image={Geography}/> </div>
      <div onClick={handleCS}><Topic title="Computer Science" image={ComputerScience}/></div> 
      <div onClick={handleFootball}><Topic title="Football" image={Football}/></div> 
    </div>
    

    <div className='chatbot'>Chatbot...Coming soon...</div>
    </div>
  )
}

export default Home