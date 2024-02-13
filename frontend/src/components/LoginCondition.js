import React from 'react'

function LoginCondition({isLoggedIn}) {
  if(isLoggedIn)
  {
    return <p>Welcome, Varun</p>
  }
  else
  {
    return <li>Login</li>
  }
}

export default LoginCondition