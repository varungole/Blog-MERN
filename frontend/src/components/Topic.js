import React from 'react'

function Topic({title , image , description}) {
  return (
    <div class="topic-frame">
    <h2 class="topic-title">{title}</h2>
    <img src={image} alt="temp"></img>
    <p class="topic-description">{description}</p>
  </div>
  )
}

export default Topic