import React, { useState } from 'react';
import LoginForm from './LoginForm';
import ChatForm from './ChatForm';

const App = () => {
  const [state, setState] = useState({ loginName: "", isLogin: false })

  const handlePostLogin = (username) => {
    setState({ ...state, loginName: username, isLogin: true })
  }

  return (
    <div>
      <header>
        Tri chat application
      </header>
      {
        state.isLogin ? (
          <ChatForm loginName={state.loginName} />
        ) : (
          <LoginForm handlePostLogin={handlePostLogin} />
        )
      }
    </div>
  );
}

export default App;
