import React, { useState } from "react";
import img1 from "../logInWindow/youtubeLogo.png";
import "./SignInWindow.css";

function SignInWindow({ setAllUsers, navigateToLogIn }) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    displayName: "",
    password: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, verifyPassword } = userInfo;

    if (password.length < 8 || password.length > 20) {
      alert("your password must be 8-20 characters long.");
      return;
    }

    if (password !== verifyPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    setAllUsers((prevUsers) => [...prevUsers, userInfo]);
    alert("User signed up successfully!");
    navigateToLogIn();
  };

  const { username, displayName, password, verifyPassword, image } = userInfo;
  return (
    <body id="signInWindow">
      <div id="signInWindow_background">
        <div id="signInWindow_part1">
          <img className="signInWindow_img" src={img1} width="150" height="150" alt="YouTube Logo" />
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
                  placeholder="verify password"
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
                className="form-control"
                placeholder="image"
                value={image}
                onChange={handleChange}
              />
              <label
                htmlFor="formFile"
                id="signInWindow_uploadPhotoText"
                className="form-label"
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
