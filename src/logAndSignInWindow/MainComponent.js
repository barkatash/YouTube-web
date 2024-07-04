import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LogInWindow from './logInWindow/LogInWindow.js';
import SignInWindow from './signInWindow/SignInWindow.js';

function MainComponent({ setUserInfo, userInfo }) { 
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
        <LogInWindow navigateToSignIn={navigateToSignIn} setUserInfo={setUserInfo} userInfo={userInfo}/>
      ) : (
        <SignInWindow  navigateToLogIn={navigateToLogIn} setUserInfo={setUserInfo} userInfo={userInfo}/>
      )}
    </div>
  );
}

export default MainComponent;
