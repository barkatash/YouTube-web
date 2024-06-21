import React, { useState } from "react";
import "./LogInWindow.css";
import img1 from "./youtubeLogo.png";
import { useNavigate } from "react-router-dom";

function LogInWindow({ users, navigateToSignIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onMoveToHomepage = () => {
    navigate("/");
  }

  const handleLogIn = (event) => {
    console.log('Updated users:', users);
    event.preventDefault();
    console.log('Attempting login with username:', username, 'and password:', password);
    const user = users.find((u) => u.username === username && u.password === password);
    console.log('Found user:', user);

    if (user) {
      alert(`Logged in successfully! Welcome, ${user.displayName}`);
      onMoveToHomepage();

    } else {
      alert("Login failed. Invalid username or password.");
    }
  };

  return (
    <body id="logInWindow">
      <div id="logInWindow_background">
        <div id="logInWindow_part1">
          <img
            className="logInWindow_youTubeLogo"
            id="#logInWindow_youTubeLogo"
            src={img1}
            width="150"
            height="150"
            alt="YouTube Logo"
          />
          <div id="logInWindow_logIn">log in</div>
          <div id="logInWindow_toContinue">to continue to YouTube</div>
        </div>
        <div id="logInWindow_part2">
          <form className="row g-3" onSubmit={handleLogIn}>
            <div>
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
              </div>
              <div>
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
            </div>
            <div>
              <button
                type="button"
                id="logInWindow_signInButton"
                className="btn btn-primary"
                onClick={navigateToSignIn}
              >
                sign in
              </button>
              <button
                type="submit"
                id="logInWindow_logInButton"
                className="btn btn-primary"
              >
                log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

export default LogInWindow;
