import React, { useState } from 'react';
import img1 from '../logInWindow/youtubeLogo.png';
import './SignInWindow.css';

function SignInWindow() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    displayName: '',
    password: '',
    verifyPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can process the user information, such as sending it to an API
    console.log('User Information:', userInfo);
  };

  const { username, displayName, password, verifyPassword } = userInfo;

  return (
    <div>
      <div id="back">
        <div id="part1">
          <img src={img1} width="150" height="150" alt="YouTube Logo" />
          <div id="logIn">sign in</div>
          <div id="toContinue">to continue to YouTube</div>
        </div>
        <div id="part2">
          <form 
            className="row g-3"
            onSubmit={handleSubmit}>
            <div id="part2_1">
              <div className="col-md-4 allPart2">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="user name"
                  value={username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 allPart2">
                <input
                  type="text"
                  className="form-control"
                  name="displayName"
                  placeholder="display name"
                  value={displayName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div id="part2_1">
              <div className="col-md-4 allPart2">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <small
                    id="passwordHelpBlock"
                    className="form-text text-muted downText">  
                    Your password must be 8-20 characters long.
                </small>
              </div>
              <div className="col-md-4 allPart2">
                <input
                  type="password"
                  className="form-control"
                  name="verifyPassword"
                  placeholder="verify code"
                  value={verifyPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <button
                id="signInButton"
                className="btn btn-primary"
                type="submit">
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInWindow;
