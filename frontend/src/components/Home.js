import React from 'react'
import Topic from './Topic'
import Geography from './geography.webp'
import ComputerScience from './compsci.jpeg'
import Football from './football.jpeg'
import History from './history.jpeg'
import useStore from './useStore'
import { useNavigate } from 'react-router-dom'

function Home() {


  const store = useStore();
  return (
    <div className='App'>
    <h1 className="welcome-title">Welcome to my blog-site!</h1>
    <div className="topics">
    <a href='/history'><Topic title="History" image={History} /></a>
      <a href='/geography'><Topic title="Geography" image={Geography}/> </a>
      <a href='/compsci'><Topic title="Computer Science" image={ComputerScience}/></a> 
      <a href='/football'><Topic title="Football" image={Football}/></a> 
    </div>
    

    <div className='chatbot'>Chatbot...Coming soon...</div>
    </div>
  )
}

export default Home