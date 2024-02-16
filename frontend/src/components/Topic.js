import React from 'react'

function Topic({title , image , description}) {
  return (
    <div className="topic-frame">
    <h2 className="topic-title">{title}</h2>
    <img src={image} alt="temp"></img>
    <p className="topic-description">{description}</p>
  </div>
  )
}

export default Topic