import React, { useState } from "react"

const LoginForm = ({ handlePostLogin }) => {

  const [state, setState] = useState({ username: "" })

  const handleUsernameChange = e => {
    const { value } = e.target
    setState({ ...state, username: value })
  }

  const handleLogin = () => {
    handlePostLogin(state.username)
  }

  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={state.username} onChange={handleUsernameChange} />
      </div>

      <div>
        <button id="login-btn" type="button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )

}

export default LoginForm