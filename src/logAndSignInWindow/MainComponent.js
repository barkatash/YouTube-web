import React, { useState, useEffect } from 'react';
import LogInWindow from './logInWindow/LogInWindow.js';
import SignInWindow from './signInWindow/SignInWindow.js';

function MainComponent() {
  const [users, setUsers] = useState([]);
  const [currentView, setCurrentView] = useState('login'); // 'login' or 'signin'

  const addUser = (newUser) => {
    // Update state with new user
    setUsers(prevUsers => [...prevUsers, newUser]);

    // Save users to localStorage
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    console.log('New user added:', newUser);
  };

  useEffect(() => {
    // Load users from localStorage on component mount
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

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
