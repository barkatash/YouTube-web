import React, { useState } from "react";
import "./LogInWindow.css";
import img1 from "./youtubeLogo.png";
import { useNavigate } from "react-router-dom";

function LogInWindow({ allUsers, navigateToSignIn, handleLogIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onMoveToHomepage = () => {
    navigate("/");
  };

  const handleLogInClick = (event) => {
    event.preventDefault();
    console.log('Attempting login with username:', username, 'and password:', password);
    const user = allUsers.find((user) => user.username === username && user.password === password);
    console.log('Found user:', user);

    if (user) {
      alert(`Logged in successfully! Welcome, ${user.displayName}`);
      handleLogIn(user);
      onMoveToHomepage();
    } else {
      alert("Login failed. Invalid username or password.");
    }
  };

  return (
    <div id="logInWindow">
      <div id="logInWindow_background">
        <div id="logInWindow_part1">
          <img
            className="logInWindow_img"
            src={img1}
            width="150"
            height="150"
            alt="YouTube Logo"
          />
          <div id="logInWindow_logIn">Log In</div>
          <div id="logInWindow_toContinue">to continue to YouTube</div>
        </div>
        <div id="logInWindow_part2">
          <form className="row g-3" onSubmit={handleLogInClick}>
            <div>
              <input
                id="logInWindow_textInput"
                type="text"
                className="form-control"
                placeholder="user name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                id="logInWindow_textInput"
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="button"
                id="logInWindow_signInButton"
                className="btn btn-primary"
                onClick={navigateToSignIn}
              >
                Sign In
              </button>
              <button
                type="submit"
                id="logInWindow_logInButton"
                className="btn btn-primary"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInWindow;
