import React, { useState, useEffect } from 'react';
import LogInWindow from './logInWindow/LogInWindow.js';
import SignInWindow from './signInWindow/SignInWindow.js';

function MainComponent() {
  const [users, setUsers] = useState([]);
  const [currentView, setCurrentView] = useState('login'); // 'login' or 'signin'

  const addUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
    console.log('New user added:', newUser);
  };

  useEffect(() => {
    console.log('Updated users:', users);
  }, [users]);

  const navigateToSignIn = () => {
    setCurrentView('signin');
  };

  const navigateToLogIn = () => {
    setCurrentView('login');
  };

  return (
    <div>
      {currentView === 'login' ? (
        <LogInWindow users={users} navigateToSignIn={navigateToSignIn} />
      ) : (
        <SignInWindow addUser={addUser} navigateToLogIn={navigateToLogIn} />
      )}
    </div>
  );
}

export default MainComponent;
