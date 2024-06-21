import React, { useState } from "react";
import img1 from "../logInWindow/youtubeLogo.png";
import "./SignInWindow.css";


function SignInWindow({ addUser, navigateToLogIn}) {

  const [userInfo, setUserInfo] = useState({
    username: "",
    displayName: "",
    password: "",
    verifyPassword: "",
    image: "",
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
    if (userInfo.password !== userInfo.verifyPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    addUser(userInfo);
    alert("User signed up successfully!");
    navigateToLogIn();
  };

  const { username, displayName, password, verifyPassword, image } = userInfo;
  return (
    <body id="signInWindow">
      <div id="signInWindow_background">
        <div id="signInWindow_part1">
          <img className="img-signin" src={img1} width="150" height="150" alt="YouTube Logo" />
          <div id="signInWindow_signIn">sign in</div>
          <div id="signInWindow_toContinue">to continue to YouTube</div>
        </div>
        <div id="signInWindow_part2">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div id="signInWindow_textInputRow">
              <div className="col-md-4 signInWindow_textInputs">
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
              <div className="col-md-4 signInWindow_textInputs">
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
            <div id="signInWindow_textInputRow">
              <div className="col-md-4 signInWindow_textInputs">
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
                  className="form-text text-muted signInWindow_passwordRestriction"
                >
                  Your password must be 8-20 characters long.
                </small>
              </div>
              <div className="col-md-4 signInWindow_textInputs">
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
            <div className="mb-3 col-md-4">
              <input
                type="file"
                name="image"
                id="signInWindow_uploadPhotoButton"
                class="form-control"
                placeholder="image"
                value={image}
                onChange={handleChange}
              />
              <label
                for="formFile"
                id="signInWindow_uploadPhotoText"
                class="form-label"
              >
                please upload your photo
              </label>
            </div>
            <div className="col-12">
              <button
                id="signInWindow_signInButton"
                className="btn btn-primary"
                type="submit"
              >
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default SignInWindow;
