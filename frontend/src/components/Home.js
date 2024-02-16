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


  const handleTopicPath = (topicPath) => {
    navigate(`/${topicPath}` , {state : {isLoggedIn : store.isLoggedIn , username : store.name}})
  }

  const store = useStore();
  
  return (
    <div className='App'>
    <h1 className="welcome-title">Welcome to my blog-site!</h1>
    <div className="topics">
    <div onClick={() => handleTopicPath('history')}><Topic title="History" image={History} /></div>
      <div onClick={() => handleTopicPath('geography')}><Topic title="Geography" image={Geography}/> </div>
      <div onClick={() => handleTopicPath('compsci')}><Topic title="Computer Science" image={ComputerScience}/></div> 
      <div onClick={() => handleTopicPath('football')}><Topic title="Football" image={Football}/></div> 
    </div>
    

    <div className='chatbot'>Chatbot...Coming soon...</div>
    </div>
  )
}

export default Home