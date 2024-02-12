import React from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
  
  const navigate = useNavigate()
  const handleSubmit = () => {
   navigate('/')
  }
  return (
    <div className='thanks-class'>
        <h1 className='thanks'>Thanks for submitting your blog!</h1>

        <button className='button-back' onClick={handleSubmit}>Go back to Home</button>
      
    </div>
  )
}

export default Success