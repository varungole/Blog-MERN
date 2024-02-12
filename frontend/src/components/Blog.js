import React from 'react'

function Blog({title , description, onClick , onDeleteClick}) {
  return (
    <div className='main-frame'>
    <div className='blog-frame'>
      <h2 className='blog-title' onClick={onClick}>{title}</h2>
      <p className='blog-brief-description'>{description}</p>

      <button className='delete-button' onClick={onDeleteClick}>Delete Blog</button>
    </div>
  </div>
  )
}

export default Blog