import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LogInWindow from './logInWindow/LogInWindow.js';
import SignInWindow from './signInWindow/SignInWindow.js';

function MainComponent({ allUsers, setAllUsers }) { // Ensure setAllUsers is correctly initialized
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentView, setCurrentView] = useState('login'); // 'login' or 'signin'
  const [loggedInUser, setLoggedInUser] = useState(null);

  const addUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
    console.log('New user added:', newUser);
  };

  const navigateToSignIn = () => {
    setCurrentView('signin');
  };

  const navigateToLogIn = () => {
    setCurrentView('login');
  };

  const handleLogIn = (user) => {
    setLoggedInUser(user);
    console.log('Logged in user:', user);
  };

  return (
    <div>
      {currentView === 'login' ? (
        <LogInWindow allUsers={allUsers} navigateToSignIn={navigateToSignIn} handleLogIn={handleLogIn} />
      ) : (
        <SignInWindow setAllUsers={setAllUsers} navigateToLogIn={navigateToLogIn} />
      )}
    </div>
  );
}

export default MainComponent;
