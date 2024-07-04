import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LogInWindow from './logInWindow/LogInWindow.js';
import SignInWindow from './signInWindow/SignInWindow.js';

function MainComponent({ allUsers, setAllUsers, setUserInfo, userInfo }) { 
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('login');


  const navigateToSignIn = () => {
    setCurrentView('signin');
  };

  const navigateToLogIn = () => {
    setCurrentView('login');
  };



  return (
    <div>
      {currentView === 'login' ? (
        <LogInWindow allUsers={allUsers} navigateToSignIn={navigateToSignIn} setUserInfo={setUserInfo}/>
      ) : (
        <SignInWindow setAllUsers={setAllUsers} navigateToLogIn={navigateToLogIn} setUserInfo={setUserInfo} userInfo={userInfo} allUsers={allUsers}/>
      )}
    </div>
  );
}

export default MainComponent;
