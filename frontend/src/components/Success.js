import React from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from './useStore'

function Success() {
  
  const navigate = useNavigate()
  const store = useStore();
  const handleSubmit = () => {
    navigate(`/` , {state : {isLoggedIn : store.isLoggedIn , username : store.name}})
  }
  return (
    <div className='thanks-class'>
        <h1 className='thanks'>Thanks for submitting your blog!</h1>
        <button className='button-back' onClick={handleSubmit}>Go back to Home</button>
    </div>
  )
}

export default Success