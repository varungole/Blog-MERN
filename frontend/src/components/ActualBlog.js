import React from 'react'
import { useLocation } from 'react-router-dom'

function ActualBlog() {

    const location = useLocation();
    console.log(location.state.actualBlog);
  return (
    <div className='actual-frame'>
    <h1 className='actual-blog-title'>{location.state.title}</h1>
    <h3 className='actual-blog-description'>{location.state.description}</h3>
    <p className='actual-blog'>{location.state.actualBlog}</p>
    <p className='actual-blog-author'>{location.state.author}</p>
    </div>
  )
}

export default ActualBlog